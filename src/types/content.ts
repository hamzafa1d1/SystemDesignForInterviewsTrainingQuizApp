// Generic interface for any quiz section (chapters, terraform sections, etc.)
export interface QuizSection {
  id: string
  title: string
  summary: string
  questionCount: number
  etaMinutes: number
  lastScore?: number
  timeSpentMinutes?: number
}

export type Chapter = QuizSection

// Terraform sections use the same structure as chapters
export type TerraformSection = QuizSection

export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export type QuestionType = 'mcq_single'

export type Question = {
  id: string
  chapter: string
  difficulty: QuestionDifficulty
  type: QuestionType
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type QuestionBank = Record<string, Question[]>

export type QuizResult = {
  chapterId: string
  chapterTitle: string
  correctCount: number
  totalQuestions: number
  scorePercent: number
  durationSeconds: number
  completedAt: string
}

export type QuizMetric = {
  label: string
  value: string
  helper?: string
}
