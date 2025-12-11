import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChapterCard } from '../components/ChapterCard'
import { MetricCard } from '../components/MetricCard'
import { SectionHeader } from '../components/SectionHeader'
import { landingStats, plannedFeatures } from '../data/content'
import { useChaptersWithStats } from '../hooks/useChaptersWithStats'
import coverImage from '../assets/systemDesignCover.jpg'

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

      <section className="space-y-6">
        <SectionHeader eyebrow="Coming up" title="Planned niceties" description="Surface-level placeholders only." />
        <div className="grid gap-6 md:grid-cols-3">
          {plannedFeatures.map((feature) => (
            <article key={feature.title} className="glass-panel space-y-4 p-6">
              <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                {feature.tag}
              </span>
              <h3 className="font-display text-xl text-foam">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
