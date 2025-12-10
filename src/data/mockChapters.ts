import type { Chapter, PlannedFeature, QuizMetric } from '../types/content'

export const chapters: Chapter[] = [
  {
    id: 'foundations',
    title: 'System Design Foundations',
    summary: 'Latency, throughput, SLAs, and mental models for big interviews.',
    questionCount: 18,
    etaMinutes: 25,
    lastScore: 84,
    timeSpentMinutes: 22,
  },
  {
    id: 'storage',
    title: 'Storage & Databases',
    summary: 'CAP intuition, replication, sharding, and consistency trade-offs.',
    questionCount: 22,
    etaMinutes: 30,
    lastScore: 91,
    timeSpentMinutes: 28,
  },
  {
    id: 'scalability',
    title: 'Scale & Reliability',
    summary: 'Caching, CDNs, queues, and designing for resiliency.',
    questionCount: 16,
    etaMinutes: 20,
    lastScore: 76,
    timeSpentMinutes: 19,
  },
]

export const landingStats: QuizMetric[] = [
  { label: 'Chapters', value: '08', helper: 'Curated interview-ready paths' },
  { label: 'Practice Sets', value: '120+', helper: 'Scenario-based prompts' },
  { label: 'Avg. Session', value: '22m', helper: 'Focused review sprints' },
]

export const plannedFeatures: PlannedFeature[] = [
  {
    title: 'Motivational Quotes',
    description: 'Celebrate every completion with curated insights from top engineers.',
    tag: 'Nice to have',
  },
  {
    title: 'Personal Dashboard',
    description: 'Visualize streaks, pacing, and focus zones from prior quizzes.',
    tag: 'In backlog',
  },
  {
    title: 'Support & Donations',
    description: 'Let the community fuel ongoing improvements with a simple tip jar.',
    tag: 'Community',
  },
]
