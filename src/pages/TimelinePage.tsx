import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { TimelineItem } from '../components/TimelineItem'
import { timelineStages } from '../data/timeline'

export function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = timelineStages[activeIndex]

  return (
    <main className="page-main section-shell timeline-page">
      <PageHeader
        eyebrow="Quá trình hình thành & phát triển"
        title="Dòng thời gian"
        description="Năm giai đoạn cho thấy tư tưởng Hồ Chí Minh được hình thành, thử thách và hiện thực hóa trong cách mạng Việt Nam."
        count="1890 — 1969"
      />

      <div className="timeline-explorer">
        <div className="timeline-track" aria-label="Chọn một giai đoạn">
          {timelineStages.map((stage, index) => (
            <TimelineItem
              key={stage.id}
              stage={stage}
              index={index}
              active={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <article className="timeline-detail" key={activeStage.id}>
          <div className="timeline-detail-heading">
            <div>
              <span className="timeline-period">{activeStage.period}</span>
              <h2>{activeStage.title}</h2>
            </div>
            <span className="stage-number">0{activeIndex + 1}</span>
          </div>
          <p className="timeline-summary">{activeStage.summary}</p>
          <ol className="event-list">
            {activeStage.events.map((event, index) => (
              <li key={`${event.year ?? 'event'}-${index}`}>
                <span className="event-marker" aria-hidden="true" />
                <div>
                  {event.year && <time>{event.year}</time>}
                  <strong>{event.title}</strong>
                  {event.description && <p>{event.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </main>
  )
}
