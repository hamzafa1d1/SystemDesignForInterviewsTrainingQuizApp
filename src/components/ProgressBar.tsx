interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-mint to-blush transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
