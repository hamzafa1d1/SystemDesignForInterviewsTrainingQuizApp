import type { QuizResult } from '../types/content'

export const QUIZ_RESULTS_STORAGE_KEY = 'sd_quiz_results_v1'
export const QUIZ_RESULTS_UPDATED_EVENT = 'sd_quiz_results_updated'

export const readStoredResults = (): QuizResult[] => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(QUIZ_RESULTS_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as QuizResult[]) : []
  } catch {
    return []
  }
}

const dispatchResultsUpdated = (payload: QuizResult) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.dispatchEvent(new CustomEvent(QUIZ_RESULTS_UPDATED_EVENT, { detail: payload }))
  } catch {
    // Ignore event dispatch issues
  }
}

export const persistResult = (result: QuizResult) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const existing = readStoredResults()
    const updated = [result, ...existing].slice(0, 20)
    window.localStorage.setItem(QUIZ_RESULTS_STORAGE_KEY, JSON.stringify(updated))
    dispatchResultsUpdated(result)
  } catch {
    // Swallow storage errors silently
  }
}
