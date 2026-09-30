import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { TimelineItem } from '../components/TimelineItem'
import { timelineStages } from '../data/timeline'

export function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = timelineStages[activeIndex]
  const progress = ((activeIndex + 1) / timelineStages.length) * 100

  return (
    <main className="page-main section-shell timeline-page">
      <PageHeader
        eyebrow="Triển lãm theo thời gian"
        title="Hành trình tư tưởng"
        description="Mỗi giai đoạn được đọc qua ba lớp: sự kiện đã diễn ra, bối cảnh lịch sử và những nội dung tư tưởng được hình thành hoặc phát triển."
        count="1890 — 1969"
      />

      <div className="timeline-progress" aria-label={`Đã xem đến giai đoạn ${activeIndex + 1} trên ${timelineStages.length}`}>
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="timeline-explorer">
        <div className="timeline-track" aria-label="Chọn một giai đoạn">
          {timelineStages.map((stage, index) => (
            <TimelineItem key={stage.id} stage={stage} index={index} active={activeIndex === index} onSelect={() => setActiveIndex(index)} />
          ))}
        </div>

        <article className="journey-chapter" key={activeStage.id}>
          <header className="journey-chapter-header">
            <div><span className="timeline-period">Chương 0{activeIndex + 1} · {activeStage.period}</span><h2>{activeStage.title}</h2><p>{activeStage.summary}</p></div>
            <span className="journey-big-number" aria-hidden="true">0{activeIndex + 1}</span>
          </header>

          {activeStage.image && (
            <figure className="journey-chapter-image">
              <img src={activeStage.image} alt={activeStage.imageAlt} />
              <figcaption>{activeStage.imageCaption}<a href={activeStage.sourceUrl} target="_blank" rel="noreferrer">Nguồn ↗</a></figcaption>
            </figure>
          )}

          <div className="journey-layers">
            <section className="journey-events"><span className="layer-label">Sự kiện</span><ol className="event-list">
              {activeStage.events.map((event, index) => <li key={`${event.year ?? 'event'}-${index}`}><span className="event-marker" aria-hidden="true" /><div>{event.year && <time>{event.year}</time>}<strong>{event.title}</strong>{event.description && <p>{event.description}</p>}</div></li>)}
            </ol></section>
            <div className="journey-analysis">
              <section><span className="layer-label">Bối cảnh</span><p>{activeStage.context}</p></section>
              <section><span className="layer-label">Hình thành tư tưởng</span><p>{activeStage.thought}</p></section>
            </div>
          </div>

          <footer className="journey-chapter-footer">
            <button type="button" disabled={activeIndex === 0} onClick={() => setActiveIndex((index) => index - 1)}>← Giai đoạn trước</button>
            <span>{activeIndex + 1} / {timelineStages.length}</span>
            {activeIndex < timelineStages.length - 1 ? <button type="button" onClick={() => setActiveIndex((index) => index + 1)}>Giai đoạn tiếp →</button> : <Link to="/ideas">Tiếp tục: Hệ tư tưởng →</Link>}
          </footer>
        </article>
      </div>
    </main>
  )
}
