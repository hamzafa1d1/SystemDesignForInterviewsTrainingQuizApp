import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { ProgressBar } from '../components/ProgressBar'

const sampleQuestion = {
  prompt: 'Design a news feed system that scales to 200M MAU. What would you cache?',
  explanation:
    'Correct submissions will reference timelines, fan-out strategies, and eventual consistency trade-offs. The longform explanation will live here later.',
}

const options = [
  'Cache only the read-heavy fan-out timeline per user.',
  'Cache writes before they hit the queue to absorb bursts.',
  'Cache media assets globally and bypass any timeline caching.',
]

export function ChapterPage() {
  return (
    <div className="space-y-8">
      <PageShell
        title="Chapter in progress"
        description="Counter, question body, answer states, and explanations will plug into this shell. All static for now."
      >
        <div className="grid gap-8 md:grid-cols-[0.7fr_0.3fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">Question 03 / 16</span>
              <span>Elapsed: 04:22</span>
              <button type="button" className="text-mint underline-offset-4 hover:underline">
                Reset counter
              </button>
            </div>
            <motion.article
              className="space-y-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-foam">{sampleQuestion.prompt}</p>
              <div className="space-y-3">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80 transition hover:border-mint/40"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-mint/30 bg-mint/5 p-4 text-sm text-mint">
                Explanation placeholder: {sampleQuestion.explanation}
              </div>
            </motion.article>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Progress</p>
              <div className="mt-4 space-y-3">
                <ProgressBar value={42} />
                <p className="text-white/80">Score preview: 8 / 16</p>
                <p>Time budget remaining: 12m</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Upcoming figures</p>
              <p className="mt-3">A placeholder for diagrams (consistency charts, flow maps, etc.).</p>
            </div>
          </aside>
        </div>
      </PageShell>
    </div>
  )
}
