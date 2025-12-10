import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChapterCard } from '../components/ChapterCard'
import { MetricCard } from '../components/MetricCard'
import { SectionHeader } from '../components/SectionHeader'
import { chapters, landingStats, plannedFeatures } from '../data/content'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function LandingPage() {
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
        <div className="glass-panel space-y-6 border-white/5 p-6">
          <p className="text-sm text-white/60">
            Planned features include time tracking, score snapshots, and retake flows backed by local storage.
          </p>
          <div className="space-y-4 text-sm text-white/70">
            <div className="flex items-center justify-between">
              <span>Last session</span>
              <span className="font-semibold text-foam">24m focused</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Confidence</span>
              <span className="font-semibold text-foam">78%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Next action</span>
              <span className="font-semibold text-foam">Retake storage quiz</span>
            </div>
          </div>
        </div>
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
            <Link key={chapter.id} to={`/chapter/${chapter.id}`} className="no-underline">
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
