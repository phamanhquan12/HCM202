import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { archiveItems } from '../data/archive'
import { flashcards } from '../data/flashcards'
import { useLocalStorage } from '../hooks/useLocalStorage'

const milestones = ['1890', '1911', '1920', '1930', '1941', '1945', '1969']

const studyPaths = [
  { number: '01', label: 'Đọc lịch sử', title: 'Hành trình tư tưởng', description: 'Theo dõi năm giai đoạn qua sự kiện, bối cảnh và sự hình thành tư tưởng.', to: '/timeline', meta: '05 giai đoạn' },
  { number: '02', label: 'Xem chứng tích', title: 'Phòng tư liệu số', description: 'Khám phá ảnh, văn kiện, phim và âm thanh có nguồn dẫn rõ ràng.', to: '/archive', meta: 'Ảnh · Văn kiện · Phim' },
  { number: '03', label: 'Ôn và kiểm tra', title: 'Flashcard & trắc nghiệm', description: 'Ghi nhớ 72 chủ đề và luyện với ngân hàng 150 câu hỏi có giải thích.', to: '/flashcards', meta: '72 thẻ · 150 câu' },
]

export function HomePage() {
  const [knownCards] = useLocalStorage<string[]>('knownCards', [])
  const [bestQuizScore] = useLocalStorage<number>('bestQuizScore', 0)
  const featured = archiveItems.slice(0, 3)

  return (
    <>
      <section className="museum-hero section-shell">
        <div className="museum-hero-copy">
          <span className="hero-kicker"><span /> HCM202 · Tư tưởng Hồ Chí Minh</span>
          <h1>Hành trình<br /><em>tư tưởng</em></h1>
          <p>Từ những cơ sở hình thành đến quá trình phát triển của tư tưởng Hồ Chí Minh qua các bước ngoặt của lịch sử Việt Nam.</p>
          <div className="hero-actions">
            <Link className="button primary" to="/timeline">Bắt đầu hành trình <span aria-hidden="true">→</span></Link>
            <Link className="text-link" to="/archive">Vào phòng tư liệu <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <figure className="museum-hero-image">
          <span className="hero-ghost-year" aria-hidden="true">1945</span>
          <img src="/images/archive/ba-dinh-1945.jpg" alt="Lễ Độc lập tại Quảng trường Ba Đình ngày 2 tháng 9 năm 1945" />
          <figcaption><span>02.09.1945 · Hà Nội</span><a href={archiveItems[3].sourceUrl} target="_blank" rel="noreferrer">Nguồn ↗</a></figcaption>
        </figure>
      </section>

      <div className="journey-rail" aria-label="Các mốc chính của hành trình">
        <div className="section-shell">
          {milestones.map((year, index) => <span className={year === '1945' ? 'active' : ''} key={year}><i />{year}{index < milestones.length - 1 && <b aria-hidden="true" />}</span>)}
        </div>
      </div>

      <section className="manifesto-section section-shell">
        <span className="quote-glyph" aria-hidden="true">“</span>
        <blockquote><p>Không có gì quý hơn độc lập, tự do.</p><footer>Hồ Chí Minh · Lời kêu gọi chống Mỹ, cứu nước · 1966</footer></blockquote>
        <p className="manifesto-note">Một mệnh đề cô đọng tư tưởng xuyên suốt về độc lập dân tộc, quyền tự do và ý chí tự quyết.</p>
      </section>

      <section className="featured-archive">
        <div className="section-shell">
          <header className="section-heading split">
            <div><span className="eyebrow">Hiện vật tiêu biểu</span><h2>Lịch sử để lại dấu vết</h2></div>
            <p>Mỗi bức ảnh và văn kiện giúp kết nối khái niệm trong giáo trình với con người, địa điểm và thời điểm cụ thể.</p>
          </header>
          <div className="featured-archive-grid">
            {featured.map((item, index) => (
              <Link to="/archive" className={`featured-piece piece-${index + 1}`} key={item.id}>
                <img src={item.image} alt={item.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} />
                <span><small>{item.kind} · {item.year}</small><strong>{item.title}</strong><b>Xem hiện vật ↗</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="study-paths section-shell">
        <header><span className="eyebrow">Cách khám phá</span><h2>Đọc. Xem. Ghi nhớ.</h2></header>
        <div className="study-path-list">
          {studyPaths.map((path) => (
            <Link to={path.to} key={path.number}>
              <span className="path-number">{path.number}</span>
              <span><small>{path.label}</small><strong>{path.title}</strong><p>{path.description}</p></span>
              <span className="path-meta">{path.meta}</span><b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="progress-section section-shell">
        <div className="progress-panel">
          <div className="progress-intro"><span className="eyebrow light">Tiến độ của bạn</span><h2>Mỗi lần ôn là một bước tiến.</h2><p>Tiến độ được lưu ngay trên trình duyệt này, không cần tài khoản.</p></div>
          <div className="progress-stats"><ProgressBar value={knownCards.length} max={flashcards.length} label="Flashcards đã thuộc" /><div className="best-score-row"><span>Điểm quiz tốt nhất</span><strong>{bestQuizScore}<small>/ 10</small></strong></div></div>
        </div>
      </section>
    </>
  )
}
