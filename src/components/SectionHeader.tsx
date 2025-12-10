interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{eyebrow}</p>
      <h2 className="font-display text-3xl text-foam">{title}</h2>
      {description && <p className="text-white/70 max-w-2xl">{description}</p>}
    </div>
  )
}
