import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ideaTopics, virtues } from '../data/ideas'
import { ConnectedDiagram, type DiagramEdge } from '../components/ConnectedDiagram'
import { SolidarityDiagram } from '../components/SolidarityDiagram'

const topicEdges: DiagramEdge[] = ideaTopics.map((topic) => ({ from: 'topic-core', to: topic.id, toPort: 'left', route: 'branch' }))
const peopleEdges: DiagramEdge[] = ['cua-dan', 'do-dan', 'vi-dan'].map((id) => ({ from: 'people', to: id, route: 'tree' }))
const summaryEdges: DiagramEdge[] = [
  { from: 'independence', to: 'socialism', fromPort: 'right', toPort: 'left' },
  ...['party', 'state', 'solidarity'].map((to) => ({ from: 'socialism', to })),
  ...['party', 'state', 'solidarity'].map((from) => ({ from, to: 'people' })),
  ...['culture', 'ethics', 'human'].map((to) => ({ from: 'people', to })),
  { from: 'ethics', to: 'integrity' },
]

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
          <ConnectedDiagram className="topic-diagram" edges={topicEdges} label="Sáu chủ đề liên hệ với hạt nhân độc lập dân tộc gắn liền với chủ nghĩa xã hội">
            <div className="topic-core" data-node="topic-core"><small>Hạt nhân xuyên suốt</small><strong>Độc lập dân tộc gắn liền với CNXH</strong></div>
            {ideaTopics.map((topic) => <button key={topic.id} data-node={topic.id} type="button" aria-pressed={activeTopicId === topic.id} className={activeTopicId === topic.id ? 'active' : ''} onClick={() => selectTopic(topic.id)}><span>{topic.number}</span><strong>{topic.shortTitle}</strong><small>Khám phá chủ đề →</small></button>)}
          </ConnectedDiagram>
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
          <ConnectedDiagram className="people-diagram" edges={peopleEdges} label="Nhân dân: của dân, do dân, vì dân">
            <div className="people-core" data-node="people"><small>Quyền lực thuộc về</small><strong>Nhân dân</strong></div>
            <article data-node="cua-dan"><small>Quyền lực</small><b>Của dân</b><p>Nhân dân là chủ và có quyền kiểm soát quyền lực.</p></article>
            <article data-node="do-dan"><small>Thiết lập</small><b>Do dân</b><p>Nhân dân thiết lập, tham gia quản lý và giám sát.</p></article>
            <article data-node="vi-dan"><small>Phục vụ</small><b>Vì dân</b><p>Nhà nước phục vụ lợi ích và nguyện vọng chính đáng.</p></article>
          </ConnectedDiagram>
        </div>
      </section>

      <section className="solidarity-section section-shell" id="dai-doan-ket-truc-quan">
        <div className="solidarity-copy"><span className="eyebrow">Sức mạnh có tổ chức</span><h2>Đại đoàn kết</h2><p>Phạm vi đoàn kết là toàn thể dân tộc; nền tảng là liên minh Công–Nông–Trí; hình thức tổ chức là Mặt trận; chiều mở rộng là đoàn kết quốc tế.</p><a href="#idea-reading" onClick={() => setActiveTopicId('dai-doan-ket')}>Đọc chủ đề đầy đủ →</a></div>
        <SolidarityDiagram />
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
        <header><div><span className="eyebrow">Bản đồ tổng kết</span><h2>Một hệ thống,<br />nhiều điểm nối</h2></div><p>Đọc từ trên xuống để theo dõi các mối liên hệ. Chọn một khái niệm để trở lại phần tương ứng.</p></header>
        <ConnectedDiagram className="summary-diagram" edges={summaryEdges} label="Độc lập và chủ nghĩa xã hội liên hệ với Đảng, Nhà nước, đoàn kết, nhân dân, văn hóa, đạo đức và con người">
          <a data-node="independence" href="#idea-reading" onClick={() => setActiveTopicId('doc-lap-cnxh')}><small>Quyền dân tộc</small><strong>Độc lập</strong></a>
          <a data-node="socialism" href="#idea-reading" onClick={() => setActiveTopicId('doc-lap-cnxh')}><small>Con đường phát triển</small><strong>Chủ nghĩa xã hội</strong></a>
          <a data-node="party" href="#idea-reading" onClick={() => setActiveTopicId('dang-nha-nuoc')}><small>Lãnh đạo</small><strong>Đảng</strong></a>
          <a data-node="state" href="#nhan-dan"><small>Phục vụ</small><strong>Nhà nước</strong></a>
          <a data-node="solidarity" href="#dai-doan-ket-truc-quan"><small>Tập hợp sức mạnh</small><strong>Đại đoàn kết</strong></a>
          <a data-node="people" className="summary-core" href="#nhan-dan"><small>Chủ thể · Mục tiêu · Động lực</small><strong>Nhân dân</strong></a>
          <a data-node="culture" href="#idea-reading" onClick={() => setActiveTopicId('van-hoa')}><small>Đời sống tinh thần</small><strong>Văn hóa</strong></a>
          <a data-node="ethics" href="#dao-duc-truc-quan"><small>Nền tảng</small><strong>Đạo đức</strong></a>
          <a data-node="human" href="#idea-reading" onClick={() => setActiveTopicId('con-nguoi')}><small>Phát triển toàn diện</small><strong>Con người</strong></a>
          <a data-node="integrity" className="summary-integrity" href="#giac-noi-xam"><small>Cần · Kiệm · Liêm · Chính · Chí công vô tư</small><strong>Chống chủ nghĩa cá nhân</strong><span>Phòng chống tham ô, lãng phí, quan liêu →</span></a>
        </ConnectedDiagram>
      </section>
    </main>
  )
}
