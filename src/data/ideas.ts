export type IdeaTopic = {
  id: string
  number: string
  chapter: string
  title: string
  shortTitle: string
  thesis: string
  context: string
  practice: string
  pillars: { title: string; description: string }[]
}

export const ideaTopics: IdeaTopic[] = [
  {
    id: 'doc-lap-cnxh',
    number: '01',
    chapter: 'Chương III',
    title: 'Độc lập dân tộc & chủ nghĩa xã hội',
    shortTitle: 'Độc lập & CNXH',
    thesis: 'Độc lập dân tộc là điều kiện tiên quyết; chủ nghĩa xã hội tạo nền tảng để độc lập được bảo vệ bền vững và nhân dân có tự do, ấm no, hạnh phúc.',
    context: 'Khủng hoảng đường lối cứu nước đầu thế kỷ XX cho thấy giành lại chủ quyền cần đi cùng một con đường phát triển có khả năng giải phóng dân tộc, xã hội và con người.',
    practice: 'Sự lựa chọn con đường cách mạng vô sản, Cương lĩnh năm 1930, thắng lợi năm 1945 và quá trình xây dựng xã hội mới là những dấu mốc hiện thực hóa mối quan hệ này.',
    pillars: [
      { title: 'Quyền dân tộc', description: 'Độc lập, tự do là quyền thiêng liêng và bất khả xâm phạm của mọi dân tộc.' },
      { title: 'Tự do, hạnh phúc', description: 'Độc lập phải đem lại cơm ăn, áo mặc, học hành và quyền làm chủ cho nhân dân.' },
      { title: 'Thật sự, hoàn toàn', description: 'Chủ quyền phải được bảo đảm đầy đủ trên chính trị, kinh tế, quân sự và ngoại giao.' },
      { title: 'Thống nhất lãnh thổ', description: 'Độc lập gắn với thống nhất quốc gia và toàn vẹn lãnh thổ.' },
    ],
  },
  {
    id: 'dang-nha-nuoc',
    number: '02',
    chapter: 'Chương IV',
    title: 'Đảng & Nhà nước của nhân dân',
    shortTitle: 'Đảng & Nhà nước',
    thesis: 'Đảng lãnh đạo để phụng sự Tổ quốc và nhân dân; mọi quyền lực nhà nước thuộc về nhân dân, do nhân dân thiết lập và phải phục vụ nhân dân.',
    context: 'Sau khi giành chính quyền, cách mạng cần một Đảng trong sạch, một nhà nước hợp hiến, hợp pháp và cơ chế kiểm soát quyền lực để quyền làm chủ không chỉ dừng ở tuyên bố.',
    practice: 'Tổng tuyển cử ngày 6/1/1946, việc xây dựng Hiến pháp và yêu cầu cán bộ vừa là người lãnh đạo vừa là người phục vụ trung thành cho thấy nguyên tắc ấy trong tổ chức nhà nước.',
    pillars: [
      { title: 'Đảng là đạo đức', description: 'Không có lợi ích riêng ngoài lợi ích của Tổ quốc và nhân dân.' },
      { title: 'Của dân', description: 'Quyền lực thuộc về nhân dân; dân có quyền kiểm soát, phê bình và bãi miễn.' },
      { title: 'Do dân', description: 'Nhân dân lập nên, tham gia quản lý, ủng hộ và giám sát Nhà nước.' },
      { title: 'Vì dân', description: 'Bộ máy không có đặc quyền, đặc lợi; mọi hoạt động hướng tới lợi ích chính đáng của dân.' },
    ],
  },
  {
    id: 'dai-doan-ket',
    number: '03',
    chapter: 'Chương V',
    title: 'Đại đoàn kết dân tộc & đoàn kết quốc tế',
    shortTitle: 'Đại đoàn kết',
    thesis: 'Đại đoàn kết là đường lối chiến lược, mục tiêu và nhiệm vụ hàng đầu; sức mạnh dân tộc được nhân lên khi kết hợp với sức mạnh của thời đại.',
    context: 'Một dân tộc thuộc địa chỉ có thể tạo sức mạnh đủ lớn khi tập hợp mọi người yêu nước, hài hòa lợi ích khác biệt và tổ chức khối đoàn kết thành lực lượng hành động.',
    practice: 'Các hình thức Mặt trận qua từng thời kỳ quy tụ nhiều giai cấp, tầng lớp, dân tộc và tôn giáo; đồng thời cách mạng Việt Nam tranh thủ sự đồng tình của các lực lượng tiến bộ thế giới.',
    pillars: [
      { title: 'Toàn dân tộc', description: 'Mọi giai cấp, tầng lớp, dân tộc, tôn giáo, lứa tuổi, giới tính và kiều bào yêu nước.' },
      { title: 'Công–Nông–Trí', description: 'Liên minh công nhân, nông dân và trí thức là nền tảng của khối đoàn kết.' },
      { title: 'Hiệp thương', description: 'Bàn bạc dân chủ, tôn trọng khác biệt, đoàn kết chân thành và lâu dài.' },
      { title: 'Quốc tế', description: 'Đoàn kết có lý, có tình trên cơ sở độc lập, tự chủ và lợi ích chính đáng.' },
    ],
  },
  {
    id: 'van-hoa',
    number: '04',
    chapter: 'Chương VI',
    title: 'Văn hóa',
    shortTitle: 'Văn hóa',
    thesis: 'Văn hóa vừa là mục tiêu, vừa là động lực và một mặt trận của cách mạng; văn hóa phải ở trong đời sống và phục vụ nhân dân.',
    context: 'Giải phóng chính trị mở đường cho văn hóa phát triển, nhưng văn hóa đồng thời tác động trở lại kinh tế, chính trị và xã hội bằng tri thức, lý tưởng, tình cảm và phẩm giá.',
    practice: 'Diệt giặc dốt, xây dựng đời sống mới, phát triển giáo dục và quan niệm người hoạt động văn hóa là chiến sĩ cho thấy văn hóa được đặt trong sự nghiệp cải tạo xã hội.',
    pillars: [
      { title: 'Mục tiêu', description: 'Hướng tới tự do, hạnh phúc, chân–thiện–mỹ và đời sống tinh thần ngày càng cao.' },
      { title: 'Động lực', description: 'Soi đường, bồi dưỡng lý tưởng, nâng cao dân trí, phẩm giá và năng lực con người.' },
      { title: 'Mặt trận', description: 'Đấu tranh với cái xấu, lạc hậu; người làm văn hóa có trách nhiệm xã hội.' },
      { title: 'Phục vụ nhân dân', description: 'Xuất phát từ thực tiễn, phản ánh khát vọng và nâng cao đời sống của quần chúng.' },
    ],
  },
  {
    id: 'dao-duc',
    number: '05',
    chapter: 'Chương VI',
    title: 'Đạo đức cách mạng',
    shortTitle: 'Đạo đức',
    thesis: 'Đạo đức là gốc và nguồn sức mạnh của người cách mạng; đức phải thống nhất với tài, lời nói phải đi cùng hành động và sự tu dưỡng phải kéo dài suốt đời.',
    context: 'Quyền lực, khó khăn và lợi ích riêng luôn có thể làm con người xa rời mục tiêu chung. Vì vậy, đạo đức không phải phần trang trí mà là điều kiện để giữ vững lý tưởng và niềm tin của nhân dân.',
    practice: 'Các chuẩn mực Cần, Kiệm, Liêm, Chính, Chí công vô tư được Hồ Chí Minh dùng để định hướng công việc, sử dụng của công và quan hệ giữa cán bộ với nhân dân.',
    pillars: [
      { title: 'Nêu gương', description: 'Nói đi đôi với làm; người đứng đầu và cán bộ phải làm gương trước.' },
      { title: 'Xây đi đôi với chống', description: 'Bồi dưỡng phẩm chất tốt đồng thời chống chủ nghĩa cá nhân và hành vi vô đạo đức.' },
      { title: 'Tu dưỡng suốt đời', description: 'Đạo đức được rèn trong hoạt động thực tiễn và những quan hệ hằng ngày.' },
      { title: 'Đức và tài', description: 'Đạo đức là nền tảng, năng lực giúp biến mục tiêu tốt đẹp thành kết quả.' },
    ],
  },
  {
    id: 'con-nguoi',
    number: '06',
    chapter: 'Chương VI',
    title: 'Con người',
    shortTitle: 'Con người',
    thesis: 'Con người vừa là mục tiêu cao nhất, vừa là động lực quyết định của cách mạng; xây dựng xã hội mới phải gắn với xây dựng con người phát triển toàn diện.',
    context: 'Con người luôn tồn tại trong những quan hệ gia đình, giai cấp, dân tộc và nhân loại. Giải phóng xã hội vì thế phải hướng tới tự do và khả năng phát triển của từng con người cụ thể.',
    practice: 'Tư tưởng “trồng người” đặt giáo dục, tự rèn luyện và môi trường xã hội trong một chiến lược lâu dài nhằm hình thành con người vừa có đạo đức, vừa có năng lực.',
    pillars: [
      { title: 'Mục tiêu', description: 'Mọi thành quả cách mạng cuối cùng phải nâng cao tự do, phẩm giá và hạnh phúc con người.' },
      { title: 'Động lực', description: 'Trí tuệ, sức lao động, tinh thần làm chủ và tổ chức của nhân dân tạo nên thành công.' },
      { title: 'Hồng & chuyên', description: 'Phát triển toàn diện cả phẩm chất đạo đức và năng lực chuyên môn.' },
      { title: 'Trồng người', description: 'Kết hợp tự tu dưỡng với giáo dục của gia đình, nhà trường, xã hội và tổ chức.' },
    ],
  },
]

export const virtues = [
  { name: 'Cần', text: 'Siêng năng, có kế hoạch, sáng tạo và đạt năng suất cao; chống lười biếng, ỷ lại.' },
  { name: 'Kiệm', text: 'Tiết kiệm sức lao động, thời gian, tiền bạc của dân và nước; hiệu quả nhưng không bủn xỉn.' },
  { name: 'Liêm', text: 'Trong sạch, không tham địa vị, tiền tài hay đặc quyền; tôn trọng của công và của dân.' },
  { name: 'Chính', text: 'Ngay thẳng, đứng đắn; với mình không tự cao, với người không nịnh hót, với việc đặt công lên trước tư.' },
  { name: 'Chí công vô tư', text: 'Đặt lợi ích của Tổ quốc, nhân dân và tập thể lên trên lợi ích riêng; xử lý công việc công bằng, khách quan.' },
]
