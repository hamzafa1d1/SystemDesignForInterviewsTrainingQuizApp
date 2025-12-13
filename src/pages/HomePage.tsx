import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChapterCard } from '../components/ChapterCard'
import { MetricCard } from '../components/MetricCard'
import { SectionHeader } from '../components/SectionHeader'
import { landingStats } from '../data/content'
import { useChaptersWithStats } from '../hooks/useChaptersWithStats'
import coverImage from '../assets/systemDesignCover.jpg'
import reviewThumbnail from '../assets/reviewThumbnail.png'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const INITIAL_CHAPTERS_COUNT = 2

export function HomePage() {
  const chapters = useChaptersWithStats()
  const availableChapters = chapters.filter((chapter) => chapter.questionCount > 0)
  const [showAllChapters, setShowAllChapters] = useState(false)

  const displayedChapters = showAllChapters
    ? availableChapters
    : availableChapters.slice(0, INITIAL_CHAPTERS_COUNT)

  const hasMoreChapters = availableChapters.length > INITIAL_CHAPTERS_COUNT

  const scrollToChapters = () => {
    const chaptersSection = document.getElementById('chapters-section')
    chaptersSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToReview = () => {
    const reviewSection = document.getElementById('book-review-section')
    reviewSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="space-y-12">
      <motion.section
        className="glass-panel grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr]"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Ace Your Interview</p>
          <h1 className="font-display text-4xl leading-tight text-foam sm:text-5xl">
            Master system design through bite-sized quizzes.
          </h1>

          {/* ✅ Improved wording */}
          <p className="text-lg text-white/70">
            A quiz companion for <em>System Design Interview: An Insider’s Guide</em> (Alex Xu). Review key ideas
            chapter by chapter, then test yourself until it sticks.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <button
              type="button"
              onClick={scrollToChapters}
              className="rounded-full bg-mint/80 px-4 py-2 text-dusk transition hover:bg-mint"
            >
              Browse chapters
            </button>
            <button
              type="button"
              onClick={scrollToReview}
              className="rounded-full border border-white/30 px-4 py-2 text-white/80 transition hover:border-mint hover:text-mint"
            >
              Read Book Review
            </button>
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[36px] border border-white/5 bg-gradient-to-br from-[#05060e] via-[#070a16] to-[#020207] p-6 shadow-[0_35px_80px_rgba(5,6,14,0.8)]"
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <motion.div
            className="pointer-events-none absolute inset-[-20%] opacity-30 blur-3xl"
            animate={{ rotate: [0, 6, -4, 0], opacity: [0.25, 0.5, 0.35, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(circle at 25% 20%, rgba(137,255,224,0.5), transparent 55%), radial-gradient(circle at 80% 10%, rgba(92,143,255,0.35), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255,118,178,0.25), transparent 65%)',
            }}
          />
          <div className="relative">
            <motion.div
              className="absolute inset-0 z-0 rounded-[28px] bg-gradient-to-b from-transparent via-[#060a18]/20 to-[#060a18]/70 blur-2xl"
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src={coverImage}
              alt="System Design for Interviews cover"
              className="relative z-10 w-full rounded-[28px] border border-white/10 object-cover shadow-[0_35px_70px_rgba(0,0,0,0.65)]"
              initial={{ y: 16, rotate: -1.5 }}
              animate={{ y: [16, -4, 12], rotate: [-1.5, 0.5, -0.8] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-1/2 top-full z-0 h-24 w-3/4 -translate-x-1/2 -translate-y-4 rounded-[999px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-30 blur-2xl"
              animate={{ scaleX: [0.8, 1, 0.85], opacity: [0.25, 0.45, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute right-6 top-6 z-20 h-12 w-12 rounded-full border border-white/20"
              animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.section>

      <section className="grid gap-4 sm:grid-cols-3">
        {landingStats.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section id="chapters-section" className="space-y-8">
        <SectionHeader
          eyebrow="Chapters"
          title="Pick a topic and start quizzing"
          description="Track your progress, time spent, and scores as you work through each chapter."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {displayedChapters.map((chapter) => (
            <Link key={chapter.id} to={`/chapter/${chapter.id}`} className="no-underline">
              <ChapterCard chapter={chapter} />
            </Link>
          ))}

          {hasMoreChapters && (
            <motion.button
              type="button"
              onClick={() => setShowAllChapters(!showAllChapters)}
              className="glass-panel group relative flex flex-col items-center justify-center gap-4 overflow-hidden p-8 text-white/70 transition-all hover:border-mint/40"
              initial={false}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-foam/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <motion.div
                className="relative rounded-full bg-mint/10 p-4 ring-2 ring-mint/20 transition-all group-hover:bg-mint/20 group-hover:ring-mint/40"
                animate={showAllChapters ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-8 w-8 text-mint transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>

              <div className="relative text-center">
                <h3 className="font-display text-xl text-foam transition-colors group-hover:text-mint">
                  {showAllChapters ? 'Show Less' : `View ${availableChapters.length - INITIAL_CHAPTERS_COUNT} More Chapters`}
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  {showAllChapters ? 'Collapse to see fewer chapters' : `${availableChapters.length - INITIAL_CHAPTERS_COUNT} additional topics available`}
                </p>
              </div>
            </motion.button>
          )}

          {showAllChapters && (
            <article className="glass-panel flex flex-col gap-4 p-6 text-white/70">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                <span role="img" aria-label="sparkles">✨</span>
                Coming soon
              </div>
              <h3 className="font-display text-2xl text-foam">More chapters coming soon</h3>
              <p>Working on new topics like service boundaries, data modeling, and scaling patterns.</p>
              <p className="text-sm text-white/50">New chapters will appear here as they're ready.</p>
            </article>
          )}
        </div>
      </section>

      <section id="book-review-section" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Expert Review</p>
          <h2 className="font-display text-3xl text-foam">What the industry says</h2>
        </div>

        <a
          href="https://blog.pragmaticengineer.com/system-design-interview-an-insiders-guide-review/"
          target="_blank"
          rel="noreferrer"
          className="glass-panel group block overflow-hidden no-underline transition-all hover:-translate-y-1"
        >
          <div className="relative h-64 overflow-hidden md:h-80">
            <img
              src={reviewThumbnail}
              alt="Pragmatic Engineer review"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint backdrop-blur-sm">
                  Pragmatic Engineer
                </span>
                <span className="text-white/40">•</span>
                <span className="text-sm text-white/80">Independent analysis</span>
              </div>

              <h3 className="font-display text-3xl text-white mb-3 group-hover:text-foam transition-colors">
                "A comprehensive guide to system design interviews"
              </h3>
            </div>
          </div>

          <div className="p-8 space-y-4">
            <p className="text-white/70 leading-relaxed">
              Gergely Orosz breaks down the book's strengths, covering everything from high-level architecture patterns
              to practical interview strategies that actually work.
            </p>

            <div className="flex items-center gap-2 text-mint font-semibold">
              <span>Read full review</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>
      </section>
    </div>
  )
}
