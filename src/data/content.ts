import chapterOneQuestions from './chapters/chapter_1_scale_from_zero_to_millions.json'
import chapterTwoQuestions from './chapters/chapter_2_back_of_the_envelope_estimation.json'
import chapterThreeQuestions from './chapters/chapter_3_framework_for_system_design_interviews.json'
import chapterFourQuestions from './chapters/chapter_4_design_a_rate_limiter.json'
import type { Chapter, Question, QuestionBank, QuizMetric } from '../types/content'

const CHAPTER_ONE_ID = 'chapter_1_scale_from_zero_to_millions'
const CHAPTER_TWO_ID = 'chapter_2_back_of_the_envelope_estimation'
const CHAPTER_THREE_ID = 'chapter_3_framework_for_system_design_interviews'
const CHAPTER_FOUR_ID = 'chapter_4_design_a_rate_limiter'

const typedChapterOneQuestions = chapterOneQuestions as Question[]
const typedChapterTwoQuestions = chapterTwoQuestions as Question[]
const typedChapterThreeQuestions = chapterThreeQuestions as Question[]
const typedChapterFourQuestions = chapterFourQuestions as Question[]

export const chapterQuestionBank: QuestionBank = {
  [CHAPTER_ONE_ID]: typedChapterOneQuestions,
  [CHAPTER_TWO_ID]: typedChapterTwoQuestions,
  [CHAPTER_THREE_ID]: typedChapterThreeQuestions,
  [CHAPTER_FOUR_ID]: typedChapterFourQuestions,
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
  {
    id: CHAPTER_THREE_ID,
    title: 'Chapter 3 · Framework for System Design Interviews',
    summary: 'A 4-step process: clarify scope, propose high-level design, deep dive into key components, and wrap up.',
    questionCount: typedChapterThreeQuestions.length,
    etaMinutes: 30,
  },
  {
    id: CHAPTER_FOUR_ID,
    title: 'Chapter 4 · Design a Rate Limiter',
    summary: 'Why rate limiting matters, common algorithms (token bucket, leaky bucket, fixed/sliding windows), and Redis-based distributed designs.',
    questionCount: typedChapterFourQuestions.length,
    etaMinutes: 35,
  },
]

// derived metrics (no dummy values)
const totalQuestions = Object.values(chapterQuestionBank).reduce((sum, qs) => sum + qs.length, 0)
const avgSessionMinutes =
  Math.round(chapters.reduce((sum, c) => sum + c.etaMinutes, 0) / Math.max(chapters.length, 1))

export const landingStats: QuizMetric[] = [
  { label: 'Chapters', value: String(chapters.length).padStart(2, '0'), helper: 'More lanes unlock soon' },
  { label: 'Practice Sets', value: String(totalQuestions), helper: 'Chapter questions' },
  { label: 'Avg. Session', value: `${avgSessionMinutes}m`, helper: 'Focused review sprints' },
]
