import { Link } from 'react-router-dom'

const aboutSections = [
  {
    number: '01',
    title: 'Dự án là gì',
    text: 'Hành Trình Tư Tưởng là triển lãm học tập số cho học phần HCM202. Website giúp sinh viên đọc tiến trình, nhận ra quan hệ giữa các khái niệm, quan sát tư liệu và tự kiểm tra kiến thức.',
  },
  {
    number: '02',
    title: 'Chúng tôi kể câu chuyện như thế nào',
    text: 'Nội dung đi qua bốn lớp: Lịch sử cho biết tư tưởng hình thành khi nào; Tư tưởng giải thích hệ thống quan điểm; Thực tiễn cho thấy cách vận dụng; Giá trị kết nối bài học với hiện tại.',
  },
  {
    number: '03',
    title: 'Nội dung dựa trên đâu',
    text: 'Nền tảng học thuật là Giáo trình Tư tưởng Hồ Chí Minh, tài liệu HCM202 và các bài học của học phần. Ảnh, văn kiện, phim và âm thanh bổ sung đều dẫn về kho lưu trữ hoặc đơn vị phát hành gốc.',
  },
  {
    number: '04',
    title: 'Nhóm thực hiện',
    text: 'Sản phẩm học tập của sinh viên FPT University, được xây dựng để biến việc ôn tập thành một hành trình có bối cảnh, hệ thống và khả năng tự đánh giá.',
  },
]

export function AboutPage() {
  return (
    <main className="about-brief">
      <header className="about-brief-hero section-shell">
        <span className="eyebrow">Về dự án</span>
        <h1>Một triển lãm số<br />cho <em>HCM202</em></h1>
        <p>Thay vì chỉ trình bày một chuỗi sự kiện hoặc một bộ câu hỏi, dự án kết nối lịch sử, hệ thống tư tưởng, tư liệu và hoạt động ôn tập trong cùng một trải nghiệm.</p>
      </header>

      <section className="about-brief-list section-shell">
        {aboutSections.map((section) => <article key={section.number}><span>{section.number}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}
      </section>

      <section className="about-method">
        <div className="section-shell">
          <span>Lịch sử</span><i>→</i><span>Tư tưởng</span><i>→</i><span>Thực tiễn</span><i>→</i><span>Giá trị</span>
        </div>
      </section>

      <section className="about-brief-cta section-shell">
        <div><span className="eyebrow light">Bắt đầu khám phá</span><h2>Đi theo lịch sử,<br />đọc thành hệ thống.</h2></div>
        <div><Link className="button cream" to="/timeline">Bắt đầu hành trình <span aria-hidden="true">→</span></Link><Link className="about-secondary-link" to="/ideas">Mở hệ tư tưởng ↗</Link></div>
      </section>
    </main>
  )
}
