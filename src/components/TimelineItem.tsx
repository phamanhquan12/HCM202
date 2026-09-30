import type { TimelineStage } from '../types'

type Props = {
  stage: TimelineStage
  index: number
  active: boolean
  onSelect: () => void
}

export function TimelineItem({ stage, index, active, onSelect }: Props) {
  return (
    <button
      type="button"
      className={active ? 'timeline-node active' : 'timeline-node'}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span className="timeline-index">0{index + 1}</span>
      <span className="timeline-dot" />
      <strong>{stage.period}</strong>
    </button>
  )
}
