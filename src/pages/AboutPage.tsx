import { Link } from 'react-router-dom'

const narrative = [
  { number: '01', title: 'Bối cảnh', text: 'Việt Nam cuối thế kỷ XIX, đầu thế kỷ XX đứng trước khủng hoảng về đường lối cứu nước. Những biến đổi trong nước và thế giới đặt ra yêu cầu tìm một con đường mới.' },
  { number: '02', title: 'Hình thành', text: 'Tư tưởng Hồ Chí Minh được hình thành từ truyền thống dân tộc, tinh hoa văn hóa nhân loại, chủ nghĩa Mác – Lênin cùng phẩm chất và hoạt động thực tiễn của Người.' },
  { number: '03', title: 'Phát triển', text: 'Qua các giai đoạn cách mạng, hệ thống quan điểm được kiểm nghiệm, bổ sung và phát triển gắn với nhiệm vụ giải phóng dân tộc, xây dựng đất nước.' },
  { number: '04', title: 'Giá trị', text: 'Tư tưởng Hồ Chí Minh là tài sản tinh thần to lớn của Đảng và dân tộc, định hướng cho sự nghiệp cách mạng Việt Nam và vẫn có ý nghĩa trong hiện tại.' },
]

export function AboutPage() {
  return (
    <main className="about-exhibition">
      <header className="about-exhibition-hero section-shell">
        <span className="eyebrow">HCM202 · Tư tưởng Hồ Chí Minh</span>
        <div><h1>Hành trình của<br /><em>một hệ tư tưởng</em></h1><p>Không gian học tập số giúp bạn lần theo bối cảnh, sự hình thành, quá trình phát triển và giá trị của tư tưởng Hồ Chí Minh.</p></div>
      </header>

      <section className="narrative-grid section-shell" aria-label="Bốn lớp nội dung">
        {narrative.map((item) => <article key={item.number}><span>{item.number}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </section>

      <section className="about-editorial section-shell">
        <div className="about-editorial-image"><img src="/images/archive/nguyen-ai-quoc-1921.jpg" alt="Nguyễn Ái Quốc tại Marseille năm 1921" /><span>Nguyễn Ái Quốc · Marseille · 1921</span></div>
        <div className="about-editorial-copy">
          <span className="eyebrow">Về dự án</span><h2>Biến việc ôn tập thành một cuộc khám phá</h2>
          <p>Hành Trình Tư Tưởng tổ chức lại kiến thức HCM202 theo cách của một triển lãm số. Người học có thể đọc tiến trình lịch sử, quan sát tư liệu gốc, ghi nhớ khái niệm và tự kiểm tra trong cùng một mạch trải nghiệm.</p>
          <p>Nội dung học thuật bám theo giáo trình; phần tư liệu bổ sung luôn có chú thích và liên kết về nguồn gốc. Website phục vụ học tập, không thay thế giáo trình và tài liệu giảng dạy chính thức.</p>
          <Link className="text-link" to="/timeline">Khám phá hành trình <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="how-to-explore"><div className="section-shell">
        <header><span className="eyebrow light">Cách khám phá</span><h2>Bốn cánh cửa vào nội dung</h2></header>
        <ol>
          <li><b>01</b><div><strong>Hành trình</strong><p>Đọc sự kiện, bối cảnh và sự hình thành tư tưởng theo từng giai đoạn.</p></div></li>
          <li><b>02</b><div><strong>Tư liệu</strong><p>Xem ảnh, văn kiện và nội dung nghe nhìn kèm nguồn kiểm chứng.</p></div></li>
          <li><b>03</b><div><strong>Ghi nhớ</strong><p>Ôn 72 flashcard chuyên sâu, cân bằng theo sáu chương.</p></div></li>
          <li><b>04</b><div><strong>Trắc nghiệm</strong><p>Luyện 150 câu hỏi có đáp án và giải thích ngay sau mỗi lựa chọn.</p></div></li>
        </ol>
      </div></section>

      <section className="about-sources section-shell">
        <div><span className="eyebrow">Nguồn học thuật</span><h2>Đọc từ giáo trình,<br />đối chiếu bằng tư liệu.</h2></div>
        <div>
          <article><span>01</span><p><strong>Giáo trình Tư tưởng Hồ Chí Minh</strong>Dành cho bậc đại học hệ không chuyên lý luận chính trị, NXB Chính trị quốc gia Sự thật, 2021.</p></article>
          <article><span>02</span><p><strong>Tư liệu lịch sử</strong>Wikimedia Commons, Gallica/BNF, Trung tâm Lưu trữ quốc gia III và Center of Military History.</p></article>
          <article><span>03</span><p><strong>Nội dung nghe nhìn</strong>Chương trình và phim tài liệu từ Đài Truyền hình Việt Nam, liên kết tới trang phát hành gốc.</p></article>
        </div>
      </section>

      <section className="project-signoff section-shell"><span>HCM202 · FPT University · 2026</span><h2>Nhóm thực hiện</h2><p>Sản phẩm học tập số được xây dựng để hỗ trợ sinh viên ôn tập, kết nối kiến thức với bối cảnh lịch sử và tự đánh giá tiến độ học tập.</p></section>
    </main>
  )
}
