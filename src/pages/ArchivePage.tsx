import { useEffect, useState } from 'react'
import { archiveItems, mediaResources, type ArchiveItem } from '../data/archive'

function CloseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
}

export function ArchivePage() {
  const [selected, setSelected] = useState<ArchiveItem | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <main className="archive-page">
      <header className="archive-hero section-shell">
        <div>
          <span className="eyebrow">Phòng tư liệu số · HCM202</span>
          <h1>Dấu vết của<br /><em>một hành trình</em></h1>
        </div>
        <p>
          Ảnh, văn kiện và phim tư liệu đặt kiến thức vào đúng bối cảnh lịch sử. Mỗi hiện vật đều kèm chú thích, nguồn và tình trạng bản quyền để người học có thể kiểm chứng.
        </p>
      </header>

      <div className="archive-index section-shell" aria-label="Mốc thời gian tư liệu">
        {['1921', '1927', '1945', '02.09.1945'].map((year, index) => (
          <span key={year}><b>0{index + 1}</b>{year}</span>
        ))}
      </div>

      <section className="archive-gallery section-shell" aria-label="Hiện vật tiêu biểu">
        {archiveItems.map((item, index) => (
          <button
            className={`archive-object archive-object-${index + 1}`}
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`Xem chi tiết: ${item.title}`}
          >
            <span className="archive-image-wrap">
              <img src={item.image} alt="" loading={index > 1 ? 'lazy' : 'eager'} />
              <span className="archive-open">Mở hiện vật ↗</span>
            </span>
            <span className="archive-object-meta"><b>{item.kind}</b><time>{item.year}</time></span>
            <strong>{item.title}</strong>
            <small>{item.credit}</small>
          </button>
        ))}
      </section>

      <section className="media-room">
        <div className="section-shell media-room-inner">
          <header>
            <span className="eyebrow light">Phòng nghe nhìn</span>
            <h2>Lịch sử qua hình ảnh và âm thanh</h2>
            <p>Các liên kết dẫn tới đơn vị phát hành hoặc kho lưu trữ gốc.</p>
          </header>
          <div className="media-list">
            {mediaResources.map((resource, index) => (
              <a href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>
                <span className="media-number">0{index + 1}</span>
                <span><small>{resource.type} · {resource.publisher}</small><strong>{resource.title}</strong><p>{resource.description}</p></span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="archive-modal" role="dialog" aria-modal="true" aria-labelledby="archive-dialog-title" onMouseDown={() => setSelected(null)}>
          <article onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Đóng hiện vật"><CloseIcon /></button>
            <div className="modal-image"><img src={selected.image} alt={selected.imageAlt} /></div>
            <div className="modal-copy">
              <span className="eyebrow">{selected.kind} · {selected.year}</span>
              <h2 id="archive-dialog-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <dl>
                <div><dt>Nguồn</dt><dd>{selected.credit}</dd></div>
                <div><dt>Quyền sử dụng</dt><dd>{selected.license}</dd></div>
              </dl>
              <a className="button primary" href={selected.sourceUrl} target="_blank" rel="noreferrer">Xem hồ sơ gốc <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      )}
    </main>
  )
}
