import { PageShell } from '../components/PageShell'

export function AboutPage() {
  return (
    <PageShell
      title="About the book"
      description="A brief placeholder that will highlight the author, intent, and how the quiz app connects to each chapter."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="space-y-4 text-white/70">
          <p>
            System Design for Interviews started as annotated chapter summaries and slowly became a full course. This app
            keeps things bite-sized with quizzes, diagrams, and review cards.
          </p>
          <p>
            Expect write-ups about request flows, scaling stories, and prioritization frameworks. The author bio will live
            here later.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Author spotlight</p>
          <p className="mt-3 text-white/80">Hamza Faid · System Design Instructor</p>
          <p className="mt-2">Highlights, core philosophy, and contact details will be stitched in during the next pass.</p>
        </article>
      </div>
    </PageShell>
  )
}
