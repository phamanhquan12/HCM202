import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { flashcards } from '../data/flashcards'
import { useLocalStorage } from '../hooks/useLocalStorage'

type IconName = 'cards' | 'timeline' | 'quiz' | 'arrow'

function Icon({ name }: { name: IconName }) {
  if (name === 'cards') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
  }
  if (name === 'timeline') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4v16M5 7h5l2 3h7M5 16h5l2-3h7" /><circle cx="5" cy="7" r="2" /><circle cx="5" cy="16" r="2" /></svg>
  }
  if (name === 'quiz') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a2 2 0 0 1 2 2v16l-7-3-7 3V5a2 2 0 0 1 2-2Z" /><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.9.4-.9 1.2-.9 1.7M12 15.8v.2" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
}

const features = [
  {
    number: '01',
    icon: 'cards' as const,
    title: 'Flashcards',
    description: 'Ghi nhớ 41 khái niệm trọng tâm theo từng chương, tự đánh dấu phần đã thuộc.',
    to: '/flashcards',
    label: 'Bắt đầu ghi nhớ',
  },
  {
    number: '02',
    icon: 'timeline' as const,
    title: 'Dòng thời gian',
    description: 'Theo dõi 5 giai đoạn hình thành và phát triển tư tưởng Hồ Chí Minh.',
    to: '/timeline',
    label: 'Khám phá hành trình',
  },
  {
    number: '03',
    icon: 'quiz' as const,
    title: 'Quiz kiến thức',
    description: 'Tự kiểm tra với 10 câu hỏi ngẫu nhiên và xem giải thích ngay sau mỗi câu.',
    to: '/quiz',
    label: 'Kiểm tra ngay',
  },
]

export function HomePage() {
  const [knownCards] = useLocalStorage<string[]>('knownCards', [])
  const [bestQuizScore] = useLocalStorage<number>('bestQuizScore', 0)

  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> Nền tảng ôn tập HCM202</span>
          <h1>Học để nhớ.<br /><em>Hiểu để vận dụng.</em></h1>
          <p>
            Khám phá những nội dung trọng tâm của Tư tưởng Hồ Chí Minh qua một hành trình học tập ngắn gọn, trực quan và có hệ thống.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/flashcards">Bắt đầu học <Icon name="arrow" /></Link>
            <Link className="text-link" to="/timeline">Xem dòng thời gian <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-meta" aria-label="Nội dung nền tảng">
            <span><strong>41</strong> thẻ ghi nhớ</span>
            <span><strong>05</strong> giai đoạn</span>
            <span><strong>24</strong> câu hỏi</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="sun-disc" />
          <div className="quote-card">
            <span className="quote-mark">“</span>
            <p>Học để làm việc,<br />làm người, làm cán bộ.</p>
            <span className="quote-rule" />
            <small>Hồ Chí Minh</small>
          </div>
          <div className="year-stamp">1890 <span>—</span> 1969</div>
          <div className="hero-lines" />
        </div>
      </section>

      <section className="features-section">
        <div className="section-shell">
          <header className="section-heading split">
            <div>
              <span className="eyebrow">Ba bước học tập</span>
              <h2>Một hành trình, ba cách tiếp cận</h2>
            </div>
            <p>Mỗi loại kiến thức được đặt vào hình thức học phù hợp để bạn nhớ lâu hơn và hiểu rõ hơn.</p>
          </header>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <span className="feature-icon"><Icon name={feature.icon} /></span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.to}>{feature.label} <Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="progress-section section-shell">
        <div className="progress-panel">
          <div className="progress-intro">
            <span className="eyebrow light">Tiến độ của bạn</span>
            <h2>Mỗi lần ôn là một bước tiến.</h2>
            <p>Tiến độ được lưu ngay trên trình duyệt này, không cần tài khoản.</p>
          </div>
          <div className="progress-stats">
            <ProgressBar value={knownCards.length} max={flashcards.length} label="Flashcards đã thuộc" />
            <div className="best-score-row">
              <span>Điểm quiz tốt nhất</span>
              <strong>{bestQuizScore}<small>/ 10</small></strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
