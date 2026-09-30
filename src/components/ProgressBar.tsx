type Props = {
  value: number
  max: number
  label: string
  compact?: boolean
}

export function ProgressBar({ value, max, label, compact = false }: Props) {
  const percentage = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0

  return (
    <div className={compact ? 'progress-block compact' : 'progress-block'}>
      <div className="progress-label">
        <span>{label}</span>
        <strong>{value} / {max}</strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
