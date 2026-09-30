import { useState } from 'react'

const layers = [
  { title: 'Công · Nông · Trí', label: 'Nền tảng', description: 'Liên minh công nhân, nông dân và trí thức; đoàn kết trong Đảng giữ vai trò hạt nhân.' },
  { title: 'Mặt trận dân tộc thống nhất', label: 'Hình thức tổ chức', description: 'Tập hợp các lực lượng bằng hiệp thương dân chủ, đoàn kết lâu dài, chân thành và tôn trọng khác biệt.' },
  { title: 'Toàn dân tộc', label: 'Phạm vi tập hợp', description: 'Mọi giai cấp, tầng lớp, dân tộc, tôn giáo, lứa tuổi, giới tính và người Việt Nam ở nước ngoài có lòng yêu nước.' },
  { title: 'Đoàn kết quốc tế', label: 'Kết nối sức mạnh thời đại', description: 'Hợp tác với các lực lượng tiến bộ vì hòa bình, độc lập và phát triển, trên cơ sở độc lập, tự chủ.' },
]

export function SolidarityDiagram() {
  const [active, setActive] = useState(0)

  return (
    <div className="solidarity-visual">
      <div className="solidarity-orbits" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          {[3, 2, 1, 0].map((index) => <circle key={index} className={`solidarity-orbit orbit-${index}${active === index ? ' selected' : ''}`} cx="200" cy="200" r={72 + index * 40} />)}
          {[3, 2, 1].map((index) => <g key={index} className="orbit-marker"><circle cx="200" cy={200 - 72 - index * 40} r="13" /><text x="200" y={200 - 72 - index * 40 + 4}>{index + 1}</text></g>)}
          <text className="orbit-core-label" x="200" y="191">Công · Nông · Trí</text>
          <text className="orbit-core-note" x="200" y="216">01 · NỀN TẢNG</text>
        </svg>
      </div>
      <div className="solidarity-legend" role="group" aria-label="Khám phá các mối liên hệ của đại đoàn kết">
        {layers.map((layer, index) => <button key={layer.title} type="button" aria-pressed={active === index} className={active === index ? 'selected' : ''} onClick={() => setActive(index)}>
          <span className="orbit-number">0{index + 1}</span><span><small>{layer.label}</small><strong>{layer.title}</strong></span>
        </button>)}
      </div>
      <p className="solidarity-explanation" aria-live="polite">{layers[active].description}</p>
    </div>
  )
}
