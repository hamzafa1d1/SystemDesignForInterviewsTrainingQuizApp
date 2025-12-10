import type { Chapter } from '../types/content'

interface ChapterCardProps {
  chapter: Chapter
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <article className="glass-panel flex flex-col gap-6 p-6 transition duration-300 hover:-translate-y-1">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-mint/80">Chapter</p>
        <h3 className="font-display text-2xl text-foam">{chapter.title}</h3>
        <p className="text-white/70">{chapter.summary}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
        <div>
          <p className="text-foam text-lg font-semibold">{chapter.questionCount}</p>
          <p>Questions</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">~{chapter.etaMinutes}m</p>
          <p>Estimated time</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">{chapter.lastScore ?? '--'}%</p>
          <p>Last score</p>
        </div>
        <div>
          <p className="text-foam text-lg font-semibold">{chapter.timeSpentMinutes ?? '--'}m</p>
          <p>Time spent</p>
        </div>
      </div>
      <button type="button" className="rounded-full border border-mint/30 px-4 py-2 text-sm text-mint">
        Review quiz
      </button>
    </article>
  )
}
