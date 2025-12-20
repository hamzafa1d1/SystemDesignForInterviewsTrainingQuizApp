import type { QuizSection } from '../types/content'

interface QuizSectionCardProps {
  section: QuizSection
  categoryLabel?: string
}

export function QuizSectionCard({ section, categoryLabel = 'Section' }: QuizSectionCardProps) {
  return (
    <article className="glass-panel flex h-full flex-col gap-6 p-6 transition duration-300 hover:-translate-y-1">
      <div className="flex-grow space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-mint/80">{categoryLabel}</p>
        <h3 className="font-display text-2xl text-foam">{section.title}</h3>
        <p className="text-white/70">{section.summary}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
        <div>
          <p className="text-foam text-lg font-semibold">{section.questionCount}</p>
          <p>Questions</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">~{section.etaMinutes}m</p>
          <p>Estimated time</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">{section.lastScore ?? '--'}%</p>
          <p>Last score</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">{section.timeSpentMinutes ?? '--'}m</p>
          <p>Time spent</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm font-medium text-mint">
        <span>Take quiz</span>
        <span aria-hidden className="text-lg">
          →
        </span>
      </div>
    </article>
  )
}
