import chapterOneQuestions from './chapters/chapter_1_scale_from_zero_to_millions.json'
import chapterTwoQuestions from './chapters/chapter_2_back_of_the_envelope_estimation.json'
import type { Chapter, Question, QuestionBank, QuizMetric } from '../types/content'

const CHAPTER_ONE_ID = 'chapter_1_scale_from_zero_to_millions'
const CHAPTER_TWO_ID = 'chapter_2_back_of_the_envelope_estimation'

const typedChapterOneQuestions = chapterOneQuestions as Question[]
const typedChapterTwoQuestions = chapterTwoQuestions as Question[]

export const chapterQuestionBank: QuestionBank = {
  [CHAPTER_ONE_ID]: typedChapterOneQuestions,
  [CHAPTER_TWO_ID]: typedChapterTwoQuestions,
}

export const chapters: Chapter[] = [
  {
    id: CHAPTER_ONE_ID,
    title: 'Chapter 1 · Scale from Zero to Millions',
    summary: 'DNS, load balancers, caches, CDNs, queues, and database patterns for the very first growth curve.',
    questionCount: typedChapterOneQuestions.length,
    etaMinutes: 35,
  },
  {
    id: CHAPTER_TWO_ID,
    title: 'Chapter 2 · Back-of-the-Envelope Estimation',
    summary: 'Power of two, latency numbers, availability metrics, and quick calculations for system design interviews.',
    questionCount: typedChapterTwoQuestions.length,
    etaMinutes: 30,
  },
]

// should not be dummy data, should be calculated from the already given data 
export const landingStats: QuizMetric[] = [
  { label: 'Chapters', value: '02', helper: 'More lanes unlock soon' },
  { label: 'Practice Sets', value: '60', helper: 'Chapter questions' },
  { label: 'Avg. Session', value: '30m', helper: 'Focused review sprints' },
]

