import type { Chapter } from '../types/content'
import { QuizSectionCard } from './QuizSectionCard'

interface ChapterCardProps {
  chapter: Chapter
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  return <QuizSectionCard section={chapter} categoryLabel="Chapter" />
}
