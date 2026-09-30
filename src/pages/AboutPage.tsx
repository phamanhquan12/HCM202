import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'

export function AboutPage() {
  return (
    <main className="page-main section-shell about-page">
      <PageHeader
        eyebrow="Về dự án"
        title="Học chủ động, hiểu có hệ thống"
        description="Hành Trình Tư Tưởng là sản phẩm học tập số giúp sinh viên tiếp cận nội dung trọng tâm của học phần HCM202."
      />
      <div className="about-grid">
        <article className="about-story">
          <span className="large-number">03</span>
          <div>
            <h2>Ba hình thức cho ba loại kiến thức</h2>
            <p>
              Dự án không thay thế giáo trình. Nội dung được tổ chức lại để việc ôn tập trở nên chủ động: khái niệm học bằng flashcard, tiến trình lịch sử xem qua timeline, kiến thức được củng cố bằng quiz.
            </p>
          </div>
        </article>
        <div className="about-principles">
          <article><span>01</span><div><h3>Nhớ</h3><p>72 thẻ chuyên sâu, mỗi chương 12 thẻ.</p></div></article>
          <article><span>02</span><div><h3>Hiểu</h3><p>5 giai đoạn hình thành và phát triển.</p></div></article>
          <article><span>03</span><div><h3>Tự kiểm tra</h3><p>150 câu hỏi, mỗi chương 25 câu có giải thích.</p></div></article>
        </div>
      </div>
      <section className="source-panel">
        <div>
          <span className="eyebrow light">Nguồn nội dung</span>
          <h2>Giáo trình Tư tưởng Hồ Chí Minh</h2>
          <p>Dành cho bậc đại học hệ không chuyên lý luận chính trị, NXB Chính trị quốc gia Sự thật, 2021.</p>
          <small>Sản phẩm phục vụ mục đích học tập.</small>
        </div>
        <Link className="button cream" to="/flashcards">Bắt đầu ôn tập <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  )
}
