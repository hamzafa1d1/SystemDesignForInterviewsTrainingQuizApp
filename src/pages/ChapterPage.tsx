import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { ProgressBar } from '../components/ProgressBar'
import { chapterQuestionBank, chapters } from '../data/content'
import { useParams } from 'react-router-dom'
import { useChapterQuiz } from '../hooks/useChapterQuiz'

const fallbackChapterId = chapters[0]?.id ?? 'chapter_1_scale_from_zero_to_millions'

export function ChapterPage() {
  const { chapterId } = useParams<{ chapterId?: string }>()
  const resolvedChapterId = chapterId && chapterQuestionBank[chapterId] ? chapterId : fallbackChapterId
  const questions = chapterQuestionBank[resolvedChapterId] ?? []
  const chapterMeta = chapters.find((chapter) => chapter.id === resolvedChapterId)

  const quiz = useChapterQuiz({
    chapterId: resolvedChapterId,
    chapterTitle: chapterMeta?.title ?? 'Chapter preview',
    questions,
  })

  const hasQuestions = quiz.totalQuestions > 0

  return (
    <div className="space-y-8">
      <PageShell
        title={chapterMeta?.title ?? 'Chapter preview'}
        description="Counter, question body, answer states, and explanations will plug into this shell. Data now comes from the JSON bank to make layering logic easier later."
      >
        {hasQuestions ? (
          <div className="grid gap-8 md:grid-cols-[0.7fr_0.3fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Question {(quiz.currentIndex + 1).toString().padStart(2, '0')} /{' '}
                  {quiz.totalQuestions.toString().padStart(2, '0')}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  ⏱️ {quiz.timer.formatted}
                </span>
              </div>
              <motion.article
                key={quiz.currentIndex}
                className="space-y-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    {quiz.currentQuestion?.difficulty ?? 'preview'}
                  </p>
                  <p className="text-lg text-foam">
                    {quiz.currentQuestion?.question ?? 'Question placeholder'}
                  </p>
                </div>
                <div className="space-y-3">
                  {(quiz.currentQuestion?.options ?? []).map((option, index) => {
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
                  <p>{quiz.isComplete ? 'Quiz completed' : 'Keep steady pacing.'}</p>
                </div>
              </div>
              {quiz.isComplete && quiz.scoreSummary && (
                <div className="rounded-2xl border border-mint/30 bg-mint/5 p-5 text-sm text-mint">
                  <p className="text-xs uppercase tracking-[0.4em] text-mint/70">Results saved</p>
                  <p className="mt-3 text-3xl font-semibold text-mint">
                    {quiz.scoreSummary.scorePercent}%
                  </p>
                  <p className="text-white/70">
                    {quiz.scoreSummary.correctCount} / {quiz.scoreSummary.totalQuestions} correct · {quiz.timer.formatted}
                  </p>
                </div>
              )}
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
            No questions yet. Add a JSON bank for this chapter to unlock the quiz.
          </div>
        )}
      </PageShell>
    </div>
  )
}
