import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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

export function LandingPage() {
  const chapters = useChaptersWithStats()
  const availableChapters = chapters.filter((chapter) => chapter.questionCount > 0)

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
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Interview companion</p>
          <h1 className="font-display text-4xl leading-tight text-foam sm:text-5xl">
            System design training that feels handcrafted for interviews.
          </h1>
          <p className="text-lg text-white/70">
            Map each chapter, understand the trade-offs, then test yourself with focused quiz sprints.
            Nothing automated yet—this is the intentional planning stage.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <button type="button" className="rounded-full bg-mint/80 px-4 py-2 text-dusk">
              Browse chapters
            </button>
            <button type="button" className="rounded-full border border-white/30 px-4 py-2 text-white/80">
              Preview quiz flow
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

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Chapters"
          title="Every topic gets its own quiz lane"
          description="Cards show the question load, estimated duration, and how you did last time."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {availableChapters.map((chapter) => (
            <Link key={chapter.id} to={`/SystemDesignForInterviewsTrainingQuizApp/chapter/${chapter.id}`} className="no-underline">
              <ChapterCard chapter={chapter} />
            </Link>
          ))}
          <article className="glass-panel flex flex-col gap-4 p-6 text-white/70">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              <span role="img" aria-label="sparkles">
                ✨
              </span>
              Coming soon
            </div>
            <h3 className="font-display text-2xl text-foam">More chapters incoming</h3>
            <p>We are storyboarding the next quiz lanes—service boundaries, data growth, and beyond.</p>
            <p className="text-sm text-white/50">Expect more cards to unlock as soon as their question banks are ready.</p>
          </article>
        </div>
      </section>
      
      <motion.section
        className="glass-panel overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#04050d] via-[#0b1430] to-[#020203] p-1 text-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.a
          href="https://blog.pragmaticengineer.com/system-design-interview-an-insiders-guide-review/"
          target="_blank"
          rel="noreferrer"
          className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[#05060e]/70 text-left no-underline lg:grid-cols-[0.55fr_0.45fr]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        >
          <div className="relative p-8">
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
              animate={{ opacity: [0.3, 0.55, 0.3], rotate: [0, 5, -3, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              style={{
                background:
                  'radial-gradient(circle at 15% 20%, rgba(151,255,219,0.4), transparent 55%), radial-gradient(circle at 80% 0%, rgba(115,182,255,0.35), transparent 60%), radial-gradient(circle at 50% 85%, rgba(255,173,220,0.25), transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
              <span className="rounded-full border border-white/20 px-3 py-1">Review signal</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Pragmatic Engineer</span>
            </div>
            <div className="relative z-10 mt-6 space-y-3">
              <p className="text-sm text-white/70">Independent take on the book&apos;s impact</p>
              <h2 className="font-display text-3xl text-foam">Peek inside the full write-up</h2>
            </div>
            <div className="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full border border-mint/40 px-5 py-2 text-sm font-semibold text-mint/90">
              <span>Open review</span>
              <motion.span
                className="text-xl"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ↗
              </motion.span>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-black via-[#040618] to-[#010103]">
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-8 z-0 mx-auto h-32 w-2/3 rounded-full bg-mint/30 blur-[100px] opacity-40"
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.img
              src={reviewThumbnail}
              alt="Pragmatic Engineer review thumbnail"
              className="relative z-10 w-full object-cover"
              initial={{ y: 4, rotateX: 3 }}
              animate={{ y: [4, -2, 4], rotateX: [3, 0, 3], scale: [1, 1.005, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotateY: -3, scale: 1.01 }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 border border-white/10"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.section>

    </div>
  )
}
