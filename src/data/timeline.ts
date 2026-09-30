import type { TimelineStage } from '../types'

export const timelineStages: TimelineStage[] = [
  {
    id: 'before-1911',
    period: 'Trước 1911',
    title: 'Hình thành tư tưởng yêu nước và chí hướng tìm con đường cứu nước mới',
    summary: 'Từ truyền thống gia đình, quê hương và thực tiễn đất nước, Nguyễn Tất Thành hình thành lòng yêu nước cùng quyết tâm tìm một hướng đi mới.',
    events: [
      { year: '1890', title: 'Nguyễn Sinh Cung sinh tại Nghệ An.' },
      { title: 'Tiếp thu truyền thống yêu nước của gia đình, quê hương và dân tộc.' },
      { title: 'Quan sát sự thất bại của nhiều khuynh hướng cứu nước đương thời.' },
      { title: 'Hình thành mong muốn tìm một con đường cứu nước khác.' },
    ],
  },
  {
    id: '1911-1920',
    period: '1911–1920',
    title: 'Hình thành tư tưởng cứu nước theo con đường cách mạng vô sản',
    summary: 'Quá trình lao động, khảo nghiệm thực tiễn thế giới và tiếp cận Luận cương của Lênin tạo nên bước ngoặt trong nhận thức về con đường giải phóng dân tộc.',
    events: [
      { year: '1911', title: 'Ra đi tìm đường cứu nước.' },
      { year: '1911–1917', title: 'Sống, lao động và quan sát xã hội ở nhiều nước.' },
      { year: '1919', title: 'Tham gia hoạt động chính trị ở Pháp; gửi Yêu sách của nhân dân An Nam.' },
      { year: '1920', title: 'Tiếp cận Luận cương của Lênin về vấn đề dân tộc và thuộc địa.', description: 'Bước ngoặt quan trọng về lập trường cách mạng.' },
    ],
  },
  {
    id: '1920-1930',
    period: '1920–1930',
    title: 'Hình thành những nội dung cơ bản về cách mạng Việt Nam',
    summary: 'Tư tưởng về đường lối, lực lượng và tổ chức cách mạng được truyền bá, chuẩn bị về chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng.',
    events: [
      { year: '1921', title: 'Tham gia Hội Liên hiệp thuộc địa.' },
      { year: '1922', title: 'Hoạt động báo Le Paria.' },
      { year: '1925', title: 'Thành lập Hội Việt Nam Cách mạng Thanh niên.' },
      { year: '1927', title: 'Xuất bản Đường cách mệnh.' },
      { year: '1930', title: 'Thành lập Đảng Cộng sản Việt Nam và thông qua Cương lĩnh chính trị đầu tiên.' },
    ],
  },
  {
    id: '1930-1941',
    period: '1930–1941',
    title: 'Vượt qua thử thách, kiên trì quan điểm về cách mạng Việt Nam',
    summary: 'Trong thử thách, Hồ Chí Minh bảo vệ những quan điểm phù hợp với điều kiện Việt Nam và chuẩn bị trở về trực tiếp lãnh đạo cách mạng.',
    events: [
      { title: 'Bảo vệ quan điểm giải phóng dân tộc phù hợp với điều kiện Việt Nam.' },
      { title: 'Tiếp tục hoạt động cách mạng quốc tế.' },
      { title: 'Trở về Việt Nam.' },
      { title: 'Chuẩn bị chuyển trọng tâm sang trực tiếp lãnh đạo cách mạng trong nước.' },
    ],
  },
  {
    id: '1941-1969',
    period: '1941–1969',
    title: 'Tư tưởng tiếp tục phát triển và được hiện thực hóa trong cách mạng',
    summary: 'Tư tưởng Hồ Chí Minh được bổ sung, phát triển gắn với thắng lợi của cách mạng giải phóng dân tộc và công cuộc xây dựng xã hội mới.',
    events: [
      { year: '1941', title: 'Thành lập Mặt trận Việt Minh.' },
      { year: '1944', title: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.' },
      { year: '1945', title: 'Cách mạng Tháng Tám thành công.' },
      { year: '02/09/1945', title: 'Tuyên ngôn Độc lập.' },
      { year: '1946', title: 'Tổng tuyển cử và tổ chức bộ máy Nhà nước mới.' },
      { year: '1954 trở đi', title: 'Miền Bắc bước vào thời kỳ xây dựng chủ nghĩa xã hội.' },
      { year: '1969', title: 'Di chúc; khép lại quá trình phát triển tư tưởng trong cuộc đời Hồ Chí Minh.' },
    ],
  },
]
