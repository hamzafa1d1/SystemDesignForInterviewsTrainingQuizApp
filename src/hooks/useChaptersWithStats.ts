import { useEffect, useState } from 'react'
import { chapters as baseChapters } from '../data/content'
import type { QuizSection, QuizResult } from '../types/content'
import {
  QUIZ_RESULTS_STORAGE_KEY,
  QUIZ_RESULTS_UPDATED_EVENT,
  readStoredResults,
} from '../utils/quizResultsStorage'

const coerceMinutes = (durationSeconds: number) => Math.max(1, Math.round(durationSeconds / 60))

const selectLatestResults = (results: QuizResult[]) => {
  const latestByChapter = new Map<string, QuizResult>()

  results.forEach((result) => {
    const existing = latestByChapter.get(result.chapterId)
    if (!existing) {
      latestByChapter.set(result.chapterId, result)
      return
    }

    const existingTime = Date.parse(existing.completedAt)
    const incomingTime = Date.parse(result.completedAt)
    if (Number.isNaN(existingTime) || incomingTime >= existingTime) {
      latestByChapter.set(result.chapterId, result)
    }
  })

  return latestByChapter
}

const buildEnrichedSections = <T extends QuizSection>(sections: T[], results: QuizResult[]): T[] => {
  const latestByChapter = selectLatestResults(results)

  return sections.map((section) => {
    const latestResult = latestByChapter.get(section.id)
    if (!latestResult) {
      return section
    }

    const minutesSpent = coerceMinutes(latestResult.durationSeconds)

    return {
      ...section,
      etaMinutes: minutesSpent,
      lastScore: latestResult.scorePercent,
      timeSpentMinutes: minutesSpent,
    }
  })
}

export function useChaptersWithStats<T extends QuizSection>(sections?: T[]): T[] {
  const sectionsToUse = (sections ?? baseChapters) as T[]
  const [enrichedSections, setEnrichedSections] = useState<T[]>(() => 
    buildEnrichedSections(sectionsToUse, readStoredResults())
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const refresh = () => {
      setEnrichedSections(buildEnrichedSections(sectionsToUse, readStoredResults()))
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key && event.key !== QUIZ_RESULTS_STORAGE_KEY) {
        return
      }
      refresh()
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener(QUIZ_RESULTS_UPDATED_EVENT, refresh as EventListener)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener(QUIZ_RESULTS_UPDATED_EVENT, refresh as EventListener)
    }
  }, [sectionsToUse])

  return enrichedSections
}
