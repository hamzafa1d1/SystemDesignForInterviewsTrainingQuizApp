import { PageShell } from '../components/PageShell'
import { useState } from 'react'

export function AboutPage() {
  const basePath = import.meta.env.BASE_URL ?? '/'
  const authorPhoto = `${basePath}authorHamzaFaidi.png`
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <PageShell
      title="About"
      description="Software engineer building reliable backend systems and cloud-agnostic architectures for fintech-style products."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1128] via-[#0d1836] to-[#060c1e] p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(130,255,180,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,200,255,0.05),transparent_50%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[auto,1fr] lg:gap-12">
          {/* Profile Image */}
          <div className="mx-auto lg:mx-0">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-mint via-foam to-mint opacity-30 blur-2xl transition-all duration-700 group-hover:opacity-50 group-hover:blur-3xl" />
              <div
                className={`relative transition-all duration-1000 ${
                  imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
              >
                <img
                  src={authorPhoto}
                  alt="Hamza Faidi"
                  onLoad={() => setImageLoaded(true)}
                  className="h-48 w-48 rounded-full border-4 border-white/20 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-mint/40"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-full border border-mint/30 bg-mint/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-mint">
                Software Engineer
              </div>

              <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Hamza Faidi</h1>

              <p className="text-lg text-white/70 md:text-xl">
                I build scalable backend systems—focused on correctness, performance, and operability.
              </p>

              <p className="text-sm text-white/55">
                Cloud-agnostic by design: I think in primitives (compute, storage, queues, caches, observability) and
                choose the best provider/tool for the job.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-white/60">
              I work on fintech-style platforms (payments, expenses, integrations) and the boring-but-critical parts that
              make systems reliable: idempotency, retries, background processing, data modeling, and clear APIs.
              Frameworks are implementation details—fundamentals come first.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="mailto:hamza.faidi.software.eng@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-mint hover:bg-mint/10 hover:text-mint hover:shadow-[0_0_30px_rgba(130,255,180,0.2)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email Me</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-faidi/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mint to-foam px-6 py-3 font-semibold text-dusk transition-all hover:shadow-[0_0_40px_rgba(130,255,180,0.4)] hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 lg:justify-start">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">English (C1)</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">French (C1)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value / Approach */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/70">What I build</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            APIs, integrations, background workers, and data flows that stay correct under retries, bursts, and partial
            failures.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/70">How I work</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Start with requirements + constraints, estimate costs/throughput, pick the simplest architecture that scales,
            then tighten with monitoring and iteration.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/70">What I optimize for</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Reliability, latency, and maintainability—clean interfaces, predictable failure modes, and pragmatic tradeoffs.
          </p>
        </div>
      </section>

      {/* Tech Stack (cloud-agnostic) */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Tech stack</h2>
            <p className="mt-2 max-w-3xl text-sm text-white/60">
              Tools change. Building blocks don’t. I’m comfortable mapping the same architecture across providers
              (e.g., queues, caches, managed DBs, functions/containers, API gateways).
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2 text-xs font-semibold text-mint">
            Cloud-provider agnostic
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <StackCard
            title="Languages"
            items={['C#', 'TypeScript / JavaScript', 'SQL', 'Python (utility/automation)']}
          />
          <StackCard
            title="Backend fundamentals"
            items={['HTTP APIs', 'Background workers', 'Webhooks & idempotency', 'Async messaging', 'Caching strategies']}
          />
          <StackCard
            title="Data"
            items={['Relational DBs (SQL Server / Postgres)', 'Redis (caching / counters)', 'Schema design & indexing']}
          />
          <StackCard
            title="Cloud building blocks"
            items={[
              'Compute (VMs / containers)',
              'Serverless functions',
              'Queues & pub/sub',
              'Object storage',
              'API gateways / API management',
            ]}
          />
          <StackCard
            title="DevEx & delivery"
            items={['CI/CD pipelines', 'Docker basics', 'Infrastructure-as-code mindset', 'Git workflows']}
          />
          <StackCard
            title="Quality & observability"
            items={['Testing (unit/integration)', 'Logs / metrics / tracing', 'SLO-aware monitoring', 'Postmortems + iteration']}
          />
        </div>
      </section>
    </PageShell>
  )
}

function StackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((x) => (
          <span
            key={x}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  )
}
