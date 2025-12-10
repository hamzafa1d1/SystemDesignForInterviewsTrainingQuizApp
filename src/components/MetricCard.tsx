import type { QuizMetric } from '../types/content'

interface MetricCardProps {
  metric: QuizMetric
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">{metric.label}</p>
      <p className="font-display text-4xl text-foam">{metric.value}</p>
      {metric.helper && <p className="text-sm text-white/60">{metric.helper}</p>}
    </div>
  )
}
