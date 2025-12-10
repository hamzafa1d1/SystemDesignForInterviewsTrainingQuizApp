export type Chapter = {
  id: string
  title: string
  summary: string
  questionCount: number
  etaMinutes: number
  lastScore?: number
  timeSpentMinutes?: number
}

export type QuizMetric = {
  label: string
  value: string
  helper?: string
}

export type PlannedFeature = {
  title: string
  description: string
  tag: string
}
