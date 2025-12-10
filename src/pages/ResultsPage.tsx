import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { ProgressBar } from '../components/ProgressBar'

export function ResultsPage() {
  return (
    <PageShell
      title="Results blueprint"
      description="This view will read from local storage to hydrate the score insights once logic is added."
    >
      <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
        <motion.section
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-white/15 bg-gradient-to-br from-mint/30 to-blush/30 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Score</p>
                <p className="font-display text-5xl text-foam">82%</p>
                <p className="text-sm text-white/60">Great progress</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <div>
              <p className="text-white/80">Accuracy trend</p>
              <ProgressBar value={68} />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {['Consistency', 'System depth', 'Trade-offs'].map((label) => (
                <article key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">{label}</p>
                  <p className="font-display text-2xl text-foam">Pending</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>
        <aside className="space-y-6 text-sm text-white/70">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Storage plan</p>
            <p className="mt-3">
              Results will persist in local storage with timestamped entries for each chapter quiz once logic is ready.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Motivational quote</p>
            <p className="mt-3 text-white/80">
              \"Every scaling story starts with a single measured iteration.\"
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}
