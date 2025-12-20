import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { ProgressBar } from '../components/ProgressBar'
import { terraformQuestionBank, terraformSections } from '../data/content'
import { useParams, useNavigate } from 'react-router-dom'
import { useChapterQuiz } from '../hooks/useChapterQuiz'

const fallbackSectionId = terraformSections[0]?.id ?? 'tf003-iac-01'

export function TerraformSectionPage() {
  const { sectionId } = useParams<{ sectionId?: string }>()
  const navigate = useNavigate()
  const resolvedSectionId = sectionId && terraformQuestionBank[sectionId] ? sectionId : fallbackSectionId
  const questions = terraformQuestionBank[resolvedSectionId] ?? []
  const sectionMeta = terraformSections.find((section) => section.id === resolvedSectionId)

  const quiz = useChapterQuiz({
    chapterId: resolvedSectionId,
    chapterTitle: sectionMeta?.title ?? 'Terraform Section',
    questions,
  })

  const hasQuestions = quiz.totalQuestions > 0

  // Show results screen when quiz is complete
  if (quiz.isComplete && quiz.scoreSummary) {
    return (
      <div className="space-y-8">
        <PageShell title={sectionMeta?.title ?? 'Terraform Section'}>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Celebration Header */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="text-6xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
              >
                🎉
              </motion.div>
              <h2 className="font-display text-4xl text-foam">Quiz Complete!</h2>
              <p className="text-white/70">Great work on completing this section</p>
            </motion.div>

            {/* Score Card */}
            <motion.div
              className="glass-panel relative overflow-hidden p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-foam/10" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">Your Score</p>
                  <motion.p
                    className="mt-2 font-display text-7xl text-mint"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.6,
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                    }}
                  >
                    {quiz.scoreSummary.scorePercent}%
                  </motion.p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    <p className="text-3xl font-semibold text-foam">
                      {quiz.scoreSummary.correctCount}
                    </p>
                    <p className="text-sm text-white/60 mt-1">Correct</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <p className="text-3xl font-semibold text-foam">
                      {quiz.scoreSummary.totalQuestions - quiz.scoreSummary.correctCount}
                    </p>
                    <p className="text-sm text-white/60 mt-1">Wrong</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  >
                    <p className="text-3xl font-semibold text-foam">{quiz.timer.formatted}</p>
                    <p className="text-sm text-white/60 mt-1">Time</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Performance Message */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <p className="text-lg text-white/80">
                {quiz.scoreSummary.scorePercent >= 90
                  ? '🌟 Outstanding! You have mastered this section.'
                  : quiz.scoreSummary.scorePercent >= 70
                    ? '💪 Great job! You have a solid understanding of the concepts.'
                    : quiz.scoreSummary.scorePercent >= 50
                      ? '📚 Good effort! Review the material and try again to improve.'
                      : '🔄 Keep practicing! Review the section and come back stronger.'}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <button
                type="button"
                onClick={() => navigate('/terraform')}
                className="rounded-full bg-mint/80 px-8 py-3 text-sm font-semibold text-dusk transition hover:bg-mint hover:scale-105"
              >
                Back to Terraform Sections
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-mint hover:text-mint"
              >
                Retake Quiz
              </button>
            </motion.div>
          </motion.div>
        </PageShell>
      </div>
    )
  }

  // Show quiz
  return (
    <div className="space-y-8">
      <PageShell title={sectionMeta?.title ?? 'Terraform Section'}>
        {hasQuestions ? (
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <p>
                    Question {quiz.currentIndex + 1} of {quiz.totalQuestions}
                  </p>
                  <p className="font-mono text-mint">{quiz.timer.formatted}</p>
                </div>
              </div>
              <motion.article
                className="glass-panel space-y-6 p-8"
                key={quiz.currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display text-2xl leading-snug text-foam">
                  {quiz.currentQuestion?.question}
                </h2>
                <div className="space-y-3">
                  {quiz.currentQuestion?.options.map((option, index) => {
                    const isSelected = quiz.selectedIndex === index
                    const isCorrectOption = quiz.currentQuestion?.correctIndex === index
                    const isValidated = quiz.isValidated

                    let visualClass = 'border-white/10 bg-white/5 text-white/80 hover:border-mint/40'
                    if (isValidated) {
                      if (isCorrectOption) {
                        visualClass = 'border-mint/80 bg-mint/10 text-mint'
                      } else if (isSelected) {
                        // User's selected wrong answer - highlighted in red
                        visualClass = 'border-rose-400/80 bg-rose-500/20 text-rose-100 ring-2 ring-rose-400/40'
                      } else {
                        // Other wrong answers - dimmed
                        visualClass = 'border-white/5 bg-white/5 text-white/40 opacity-60'
                      }
                    } else if (isSelected) {
                      visualClass = 'border-mint/60 bg-mint/10 text-mint'
                    }

                    const animateProps = isValidated
                      ? isCorrectOption
                        ? { scale: [1, 1.05, 1], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 24px rgba(185,245,216,0.35)', '0 0 0 rgba(0,0,0,0)'] }
                        : isSelected
                          ? { x: [0, -8, 8, -5, 5, 0] }
                          : { opacity: 0.6 }
                      : { scale: 1 }

                    return (
                      <motion.button
                        key={option}
                        type="button"
                        layout
                        onClick={() => quiz.selectOption(index)}
                        className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${visualClass} ${
                          quiz.isComplete || quiz.isValidated ? 'cursor-not-allowed opacity-70' : ''
                        }`}
                        animate={animateProps}
                        transition={{ duration: quiz.isValidated && isSelected && !isCorrectOption ? 0.5 : 0.4 }}
                        disabled={quiz.isComplete || quiz.isValidated}
                      >
                        {option}
                      </motion.button>
                    )
                  })}
                </div>
                {quiz.isValidated && quiz.currentQuestion && (
                  <div className="rounded-2xl border border-mint/30 bg-mint/5 p-4 text-sm text-mint">
                    Explanation: {quiz.currentQuestion.explanation}
                  </div>
                )}
                <div className="flex flex-wrap gap-4 pt-2">
                  {!quiz.isValidated && (
                    <button
                      type="button"
                      onClick={quiz.validateAnswer}
                      className="rounded-full bg-mint/80 px-6 py-2 text-sm text-dusk disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={!quiz.hasAnsweredCurrent || quiz.isComplete}
                    >
                      Validate Answer
                    </button>
                  )}
                  {quiz.isValidated && !quiz.isLastQuestion && (
                    <button
                      type="button"
                      onClick={quiz.goToNext}
                      className="rounded-full bg-white/15 px-6 py-2 text-sm text-white"
                      disabled={quiz.isComplete}
                    >
                      Next question
                    </button>
                  )}
                  {quiz.isValidated && quiz.isLastQuestion && (
                    <button
                      type="button"
                      onClick={quiz.finishQuiz}
                      className="rounded-full bg-mint/80 px-6 py-2 text-sm text-dusk"
                      disabled={quiz.isComplete}
                    >
                      Finish quiz
                    </button>
                  )}
                </div>
              </motion.article>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Progress</p>
                <div className="mt-4 space-y-3">
                  <ProgressBar value={quiz.progressPercent} />
                  <p className="text-white/80">
                    Answered: {quiz.answeredCount} / {quiz.totalQuestions}
                  </p>
                  <p>Keep steady pacing.</p>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
            No questions yet. Add a JSON bank for this section to unlock the quiz.
          </div>
        )}
      </PageShell>
    </div>
  )
}
