import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ideaTopics, virtues } from '../data/ideas'

export function IdeasPage() {
  const [activeTopicId, setActiveTopicId] = useState(ideaTopics[0].id)
  const [activeVirtue, setActiveVirtue] = useState(0)
  const activeTopic = ideaTopics.find((topic) => topic.id === activeTopicId) ?? ideaTopics[0]

  const selectTopic = (id: string) => {
    setActiveTopicId(id)
    document.getElementById('idea-reading')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="ideas-page">
      <header className="ideas-hero section-shell">
        <div>
          <span className="eyebrow">Chiều thứ hai của hành trình</span>
          <h1>Hệ thống<br /><em>tư tưởng</em></h1>
        </div>
        <div className="ideas-hero-intro">
          <p>Tư tưởng Hồ Chí Minh là một hệ thống quan điểm có quan hệ chặt chẽ. Dòng thời gian cho biết hệ thống ấy hình thành khi nào; bản đồ này giúp bạn hiểu nó chứa đựng điều gì.</p>
          <div className="two-dimensions"><Link to="/timeline"><b>01</b><span><small>Hành trình lịch sử</small>Khi nào · Bằng cách nào</span></Link><span aria-hidden="true">→</span><a href="#ban-do"><b>02</b><span><small>Hệ thống tư tưởng</small>Nội dung · Mối liên hệ</span></a></div>
        </div>
      </header>

      <section className="idea-map-section" id="ban-do">
        <div className="section-shell">
          <header className="idea-map-heading"><div><span className="eyebrow light">Bản đồ khái niệm</span><h2>Từ độc lập đến con người</h2></div><p>Chọn một nút để đọc theo ba lớp: tư tưởng, bối cảnh và thực tiễn.</p></header>
          <div className="idea-map" aria-label="Bản đồ hệ thống tư tưởng">
            <div className="idea-map-axis" aria-hidden="true" />
            {ideaTopics.map((topic) => <button key={topic.id} type="button" className={activeTopicId === topic.id ? 'active' : ''} onClick={() => selectTopic(topic.id)}><span>{topic.number}</span>{topic.shortTitle}</button>)}
            <div className="idea-map-center"><small>Hạt nhân xuyên suốt</small><strong>Độc lập dân tộc<br />gắn liền với CNXH</strong></div>
          </div>
        </div>
      </section>

      <section className="idea-reading section-shell" id="idea-reading" key={activeTopic.id}>
        <aside><span>{activeTopic.number}</span><small>{activeTopic.chapter}</small><h2>{activeTopic.title}</h2><p>Chọn chủ đề</p>{ideaTopics.map((topic) => <button className={topic.id === activeTopic.id ? 'active' : ''} type="button" key={topic.id} onClick={() => setActiveTopicId(topic.id)}>{topic.shortTitle}</button>)}</aside>
        <article>
          <section className="idea-thesis"><span>Tư tưởng</span><p>{activeTopic.thesis}</p></section>
          <div className="idea-pillars">{activeTopic.pillars.map((pillar, index) => <div key={pillar.title}><span>0{index + 1}</span><strong>{pillar.title}</strong><p>{pillar.description}</p></div>)}</div>
          <div className="idea-evidence"><section><span>Bối cảnh</span><p>{activeTopic.context}</p></section><i aria-hidden="true">↓</i><section><span>Thực tiễn</span><p>{activeTopic.practice}</p></section></div>
        </article>
      </section>

      <section className="people-concept" id="nhan-dan">
        <div className="section-shell people-concept-inner">
          <header><span className="eyebrow">Khái niệm kết nối</span><h2>Nhân dân</h2><p>Chủ thể của quyền lực, nguồn sức mạnh của đoàn kết, mục tiêu phục vụ của Nhà nước và động lực của cách mạng.</p></header>
          <div className="people-diagram">
            <div className="people-core"><small>Quyền lực thuộc về</small><strong>Nhân dân</strong></div>
            <span className="people-line" aria-hidden="true" />
            <div className="people-branches">
              <article><b>Của dân</b><p>Nhân dân là chủ và có quyền kiểm soát quyền lực.</p></article>
              <article><b>Do dân</b><p>Nhân dân thiết lập, tham gia quản lý và giám sát.</p></article>
              <article><b>Vì dân</b><p>Nhà nước phục vụ lợi ích và nguyện vọng chính đáng.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="solidarity-section section-shell" id="dai-doan-ket-truc-quan">
        <div className="solidarity-copy"><span className="eyebrow">Sức mạnh có tổ chức</span><h2>Đại đoàn kết</h2><p>Phạm vi đoàn kết là toàn thể dân tộc; nền tảng là liên minh Công–Nông–Trí; hình thức tổ chức là Mặt trận; chiều mở rộng là đoàn kết quốc tế.</p><a href="#idea-reading" onClick={() => setActiveTopicId('dai-doan-ket')}>Đọc chủ đề đầy đủ →</a></div>
        <div className="solidarity-rings" aria-label="Các tầng của đại đoàn kết">
          <div className="ring ring-global"><span>Đoàn kết quốc tế</span><div className="ring ring-nation"><span>Toàn dân tộc · dân tộc · tôn giáo · tầng lớp · kiều bào</span><div className="ring ring-front"><span>Mặt trận dân tộc thống nhất</span><div className="ring ring-foundation"><strong>Công · Nông · Trí</strong><small>Nền tảng</small></div></div></div></div>
        </div>
      </section>

      <section className="ethics-section" id="dao-duc-truc-quan">
        <div className="section-shell ethics-inner">
          <header><span className="eyebrow light">Đạo đức là gốc</span><h2>Cần · Kiệm · Liêm · Chính</h2><p>Năm chuẩn mực liên hệ với nhau và quy tụ ở việc đặt lợi ích chung lên trên lợi ích riêng.</p></header>
          <div className="virtue-selector" role="tablist" aria-label="Các chuẩn mực đạo đức">{virtues.map((virtue, index) => <button role="tab" aria-selected={activeVirtue === index} className={activeVirtue === index ? 'active' : ''} type="button" key={virtue.name} onClick={() => setActiveVirtue(index)}>{virtue.name}</button>)}</div>
          <div className="virtue-detail" role="tabpanel" key={virtues[activeVirtue].name}><span>0{activeVirtue + 1}</span><strong>{virtues[activeVirtue].name}</strong><p>{virtues[activeVirtue].text}</p></div>
        </div>
      </section>

      <section className="inner-enemy" id="giac-noi-xam">
        <div className="section-shell">
          <header><span className="eyebrow light">Chuyên đề · Module 1</span><div><h2>“Giặc ở bên trong”</h2><p>Một góc nhìn về tham ô, lãng phí và quan liêu</p></div></header>
          <div className="corruption-flow" aria-label="Chuỗi nguyên nhân và hệ quả của tham ô, lãng phí, quan liêu">
            <article><small>Nguồn gốc sâu xa</small><strong>Chủ nghĩa cá nhân</strong><p>Đặt lợi ích riêng lên trên lợi ích tập thể.</p></article><i>↓</i>
            <article><small>Môi trường dung túng</small><strong>Quan liêu</strong><p>Xa thực tế, xa quần chúng, thiếu kiểm tra và giám sát.</p></article><i>↓</i>
            <div className="corruption-pair"><article><small>Chiếm đoạt</small><strong>Tham ô</strong><p>Biến của công thành của tư.</p></article><b>↔</b><article><small>Hao tổn</small><strong>Lãng phí</strong><p>Làm mất của cải, thời gian và sức lực của nhân dân.</p></article></div><i>↓</i>
            <article className="corruption-result"><small>Hệ quả</small><strong>Phá hoại Nhà nước · Đạo đức · Niềm tin của nhân dân</strong></article>
          </div>
          <div className="corruption-response"><span>Phòng ngừa từ gốc</span><p>Kiểm soát quyền lực · gần dân và chịu giám sát · thực hành dân chủ · pháp luật nghiêm minh · nêu gương · Cần, Kiệm, Liêm, Chính</p></div>
          <p className="case-source">Nguồn nội dung: Module 1 · Lesson 1 — Tư tưởng Hồ Chí Minh về tham nhũng; đối chiếu Giáo trình Tư tưởng Hồ Chí Minh, 2021.</p>
        </div>
      </section>

      <section className="knowledge-graph section-shell" id="ban-do-tong-ket">
        <header><span className="eyebrow">Bản đồ tổng kết</span><h2>Một hệ thống, nhiều điểm nối</h2><p>Chọn một nút để quay lại phần tương ứng.</p></header>
        <div className="knowledge-graph-canvas">
          <span className="graph-lines" aria-hidden="true" />
          <a className="graph-node n1" href="#idea-reading" onClick={() => setActiveTopicId('doc-lap-cnxh')}>Độc lập</a>
          <a className="graph-node n2" href="#idea-reading" onClick={() => setActiveTopicId('doc-lap-cnxh')}>CNXH</a>
          <a className="graph-node n3" href="#idea-reading" onClick={() => setActiveTopicId('dang-nha-nuoc')}>Đảng</a>
          <a className="graph-node n4" href="#nhan-dan">Nhà nước</a>
          <a className="graph-node n5 core" href="#nhan-dan">Nhân dân</a>
          <a className="graph-node n6" href="#dai-doan-ket-truc-quan">Đại đoàn kết</a>
          <a className="graph-node n7" href="#idea-reading" onClick={() => setActiveTopicId('van-hoa')}>Văn hóa</a>
          <a className="graph-node n8" href="#dao-duc-truc-quan">Đạo đức</a>
          <a className="graph-node n9" href="#idea-reading" onClick={() => setActiveTopicId('con-nguoi')}>Con người</a>
          <a className="graph-node n10 danger" href="#giac-noi-xam">Chống chủ nghĩa cá nhân</a>
        </div>
      </section>
    </main>
  )
}
