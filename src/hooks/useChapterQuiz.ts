import { useEffect, useMemo, useState } from 'react'
import type { Question, QuizResult } from '../types/content'
import { persistResult } from '../utils/quizResultsStorage'

type AnswerEntry = {
  selectedIndex: number
  isCorrect: boolean
}

type UseChapterQuizArgs = {
  chapterId: string
  chapterTitle: string
  questions: Question[]
}

const buildEmptyAnswerSheet = (length: number): (AnswerEntry | null)[] => Array.from({ length }, () => null)

const formatClock = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function useChapterQuiz({ chapterId, chapterTitle, questions }: UseChapterQuizArgs) {
  const totalQuestions = questions.length
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(AnswerEntry | null)[]>(() => buildEmptyAnswerSheet(totalQuestions))
  const [validated, setValidated] = useState<boolean[]>(() => Array(totalQuestions).fill(false))
  const [secondsElapsed, setSecondsElapsed] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [scoreSummary, setScoreSummary] = useState<QuizResult | null>(null)

  useEffect(() => {
    setCurrentIndex(0)
    setAnswers(buildEmptyAnswerSheet(totalQuestions))
    setValidated(Array(totalQuestions).fill(false))
    setSecondsElapsed(0)
    setIsComplete(false)
    setScoreSummary(null)
  }, [chapterId, totalQuestions])

  useEffect(() => {
    if (isComplete || totalQuestions === 0) {
      return
    }

    const intervalId = window.setInterval(() => {
      setSecondsElapsed((prev) => prev + 1)
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [chapterId, isComplete, totalQuestions])

  const currentQuestion = questions[currentIndex]
  const currentAnswer = answers[currentIndex]
  const hasAnsweredCurrent = Boolean(currentAnswer)
  const answeredCount = useMemo(() => answers.reduce((acc, entry) => (entry ? acc + 1 : acc), 0), [answers])
  const progressPercent = totalQuestions
    ? ((currentIndex + (hasAnsweredCurrent ? 1 : 0)) / totalQuestions) * 100
    : 0
  const isLastQuestion = currentIndex === Math.max(totalQuestions - 1, 0)

  const selectOption = (optionIndex: number) => {
    if (!currentQuestion || isComplete || validated[currentIndex]) {
      return
    }

    setAnswers((prev) => {
      const draft = [...prev]
      draft[currentIndex] = {
        selectedIndex: optionIndex,
        isCorrect: optionIndex === currentQuestion.correctIndex,
      }
      return draft
    })
  }

  const validateAnswer = () => {
    if (!hasAnsweredCurrent || isComplete || validated[currentIndex]) {
      return
    }

    setValidated((prev) => {
      const draft = [...prev]
      draft[currentIndex] = true
      return draft
    })
  }

  const goToNext = () => {
    if (!hasAnsweredCurrent || !validated[currentIndex] || isComplete) {
      return
    }

    setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1))
  }

  const finishQuiz = () => {
    if (!hasAnsweredCurrent || !validated[currentIndex] || isComplete) {
      return
    }

    const correctCount = answers.reduce((acc, entry) => (entry?.isCorrect ? acc + 1 : acc), 0)
    const summary: QuizResult = {
      chapterId,
      chapterTitle,
      correctCount,
      totalQuestions,
      scorePercent: totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0,
      durationSeconds: secondsElapsed,
      completedAt: new Date().toISOString(),
    }

    persistResult(summary)
    setScoreSummary(summary)
    setIsComplete(true)
  }

  return {
    totalQuestions,
    currentQuestion,
    currentIndex,
    selectedIndex: currentAnswer?.selectedIndex ?? null,
    hasAnsweredCurrent,
    isValidated: validated[currentIndex],
    answeredCount,
    isLastQuestion,
    selectOption,
    validateAnswer,
    goToNext,
    finishQuiz,
    isComplete,
    scoreSummary,
    progressPercent,
    timer: { secondsElapsed, formatted: formatClock(secondsElapsed) },
  }
}
