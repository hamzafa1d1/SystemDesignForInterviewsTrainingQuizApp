import { PageShell } from '../components/PageShell'
import { ProgressBar } from '../components/ProgressBar'

const mockSessions = [
  { chapter: 'Foundations', score: '84%', duration: '21m', date: 'Dec 4' },
  { chapter: 'Storage & DBs', score: '91%', duration: '28m', date: 'Dec 6' },
  { chapter: 'Scale & Reliability', score: '76%', duration: '19m', date: 'Dec 8' },
]

export function DashboardPage() {
  return (
    <PageShell
      title="Dashboard scaffold"
      description="Summary widgets, streaks, and donation callouts are staged here without business logic."
    >
      <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Current streak', value: '3 days' },
              { label: 'Avg. focus', value: '23m' },
              { label: 'Quizzes done', value: '12' },
            ].map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{item.label}</p>
                <p className="font-display text-2xl text-foam">{item.value}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between text-sm text-white/70">
              <p>Weekly velocity</p>
              <p>Placeholder 64%</p>
            </div>
            <div className="mt-4 space-y-3">
              <ProgressBar value={64} />
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Based on mock data only</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Recent sessions</p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              {mockSessions.map((session) => (
                <div key={session.chapter} className="flex items-center justify-between border-b border-white/5 py-3 last:border-b-0">
                  <div>
                    <p className="text-white/80">{session.chapter}</p>
                    <p className="text-xs text-white/50">{session.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-mint">{session.score}</p>
                    <p>{session.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Donation placeholder</p>
            <p className="mt-3">
              A future button will let supporters donate to keep the interview guide updated.
            </p>
            <button type="button" className="mt-6 w-full rounded-full bg-mint/80 px-4 py-2 text-dusk">
              Coming soon
            </button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Next focus</p>
            <p className="mt-3">Storage write paths · 4 cards</p>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}
