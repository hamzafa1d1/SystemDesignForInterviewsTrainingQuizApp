import chapterOneQuestions from './chapters/chapter_1_scale_from_zero_to_millions.json'
import type { Chapter, Question, QuestionBank, QuizMetric } from '../types/content'

const CHAPTER_ONE_ID = 'chapter_1_scale_from_zero_to_millions'

const typedChapterOneQuestions = chapterOneQuestions as Question[]

export const chapterQuestionBank: QuestionBank = {
  [CHAPTER_ONE_ID]: typedChapterOneQuestions,
}

export const chapters: Chapter[] = [
  {
    id: CHAPTER_ONE_ID,
    title: 'Chapter 1 · Scale from Zero to Millions',
    summary: 'DNS, load balancers, caches, CDNs, queues, and database patterns for the very first growth curve.',
    questionCount: typedChapterOneQuestions.length,
    etaMinutes: 35,
  },
]

export const landingStats: QuizMetric[] = [
  { label: 'Chapters', value: '01', helper: 'More lanes unlock soon' },
  { label: 'Practice Sets', value: '30', helper: 'Chapter 1 questions' },
  { label: 'Avg. Session', value: '22m', helper: 'Focused review sprints' },
]

