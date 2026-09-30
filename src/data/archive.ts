export type ArchiveItem = {
  id: string
  year: string
  kind: 'Ảnh tư liệu' | 'Ấn phẩm' | 'Văn kiện'
  title: string
  description: string
  image: string
  imageAlt: string
  credit: string
  license: string
  sourceUrl: string
}

export const archiveItems: ArchiveItem[] = [
  {
    id: 'nguyen-ai-quoc-1921',
    year: '1921',
    kind: 'Ảnh tư liệu',
    title: 'Nguyễn Ái Quốc tại Đại hội Đảng Cộng sản Pháp',
    description:
      'Chân dung Nguyễn Ái Quốc với tư cách đại biểu Đông Dương tại Đại hội ở Marseille. Đây là giai đoạn Người chuyển từ chủ nghĩa yêu nước đến lập trường cách mạng vô sản.',
    image: '/images/archive/nguyen-ai-quoc-1921.jpg',
    imageAlt: 'Nguyễn Ái Quốc tại Đại hội Đảng Cộng sản Pháp ở Marseille năm 1921',
    credit: 'Agence de presse Meurisse · Gallica, Thư viện Quốc gia Pháp',
    license: 'Phạm vi công cộng',
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Nguyen_A%C3%AFn_Nu%C3%A4'C_(Ho-Chi-Minh),_d%C3%A9l%C3%A9gu%C3%A9_indochinois,_Congr%C3%A8s_communiste_de_Marseille,_1921,_Meurisse,_BNF_Gallica.jpg",
  },
  {
    id: 'duong-kach-menh',
    year: '1927',
    kind: 'Ấn phẩm',
    title: 'Tác phẩm Đường Kách mệnh',
    description:
      'Tập hợp các bài giảng dùng để huấn luyện cán bộ của Hội Việt Nam Cách mạng Thanh niên, trình bày những vấn đề căn bản về mục tiêu, lực lượng và tổ chức cách mạng.',
    image: '/images/archive/duong-kach-menh.jpg',
    imageAlt: 'Bản gốc tác phẩm Đường Kách mệnh xuất bản năm 1927',
    credit: 'Hiện vật tại Bảo tàng Lịch sử Quốc gia · ảnh Hoangkid',
    license: 'Phạm vi công cộng',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Duong_Kach_Menh_(Original).jpg',
  },
  {
    id: 'oss-1945',
    year: '1945',
    kind: 'Ảnh tư liệu',
    title: 'Hồ Chí Minh và Đội Con Nai của OSS',
    description:
      'Bức ảnh ghi lại một lát cắt của quan hệ quốc tế trong năm 1945, khi lực lượng Việt Minh hợp tác với nhóm tình báo Đồng minh tại chiến khu Việt Bắc.',
    image: '/images/archive/ho-chi-minh-oss-1945.jpg',
    imageAlt: 'Hồ Chí Minh cùng các thành viên Việt Minh và Đội Con Nai của OSS năm 1945',
    credit: 'U.S. Army · Center of Military History',
    license: 'Phạm vi công cộng tại Hoa Kỳ',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_(third_from_left_standing)_and_the_OSS_in_1945.jpg',
  },
  {
    id: 'ba-dinh-1945',
    year: '02.09.1945',
    kind: 'Ảnh tư liệu',
    title: 'Lễ Độc lập tại Quảng trường Ba Đình',
    description:
      'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
    image: '/images/archive/ba-dinh-1945.jpg',
    imageAlt: 'Quang cảnh lễ Độc lập tại Quảng trường Ba Đình ngày 2 tháng 9 năm 1945',
    credit: 'Tác giả khuyết danh · Wikimedia Commons',
    license: 'Phạm vi công cộng tại Việt Nam',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ba_Dinh_Square_September_2nd,_1945.jpg',
  },
  {
    id: 'tuyen-ngon-doc-lap',
    year: '1945',
    kind: 'Văn kiện',
    title: 'Bản Tuyên ngôn Độc lập',
    description:
      'Bản lưu trữ của văn kiện khẳng định quyền độc lập của dân tộc Việt Nam, đồng thời đặt quyền dân tộc trong mối liên hệ với các quyền phổ quát của con người.',
    image: '/images/archive/tuyen-ngon-doc-lap.jpg',
    imageAlt: 'Bản Tuyên ngôn Độc lập của nước Việt Nam Dân chủ Cộng hòa',
    credit: 'Trung tâm Lưu trữ quốc gia III · Phông Phủ Thủ tướng, hồ sơ 586',
    license: 'Tài liệu của Chính phủ Việt Nam · phạm vi công cộng',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:B%E1%BA%A3n_Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_c%E1%BB%A7a_n%C6%B0%E1%BB%9Bc_Vi%E1%BB%87t_Nam_D%C3%A2n_ch%E1%BB%A7_C%E1%BB%99ng_h%C3%B2a._-_Trung_t%C3%A2m_L%C6%B0u_tr%E1%BB%AF_qu%E1%BB%91c_gia_III._Ph%C3%B4ng_Ph%E1%BB%A7_Th%E1%BB%A7_t%C6%B0%E1%BB%9Bng,_h%E1%BB%93_s%C6%A1_586,_t%E1%BB%9D_s%E1%BB%91_1_%E2%80%93_3.jpg',
  },
]

export const mediaResources = [
  {
    type: 'Phim tài liệu',
    title: 'Hành trình tìm đường cứu nước của Chủ tịch Hồ Chí Minh',
    description: 'Tư liệu truyền hình về hành trình qua nhiều châu lục và bước ngoặt lựa chọn con đường cách mạng.',
    publisher: 'VTV',
    url: 'https://vtv.vn/truyen-hinh/khat-vong-ho-chi-minh-khat-vong-viet-nam-hanh-trinh-tim-duong-cuu-nuoc-cua-chu-tich-ho-chi-minh-20200507090836625.htm',
  },
  {
    type: 'Phim tài liệu',
    title: 'Hành trình cứu nước · Phần 1',
    description: 'Chương trình tư liệu giới thiệu bối cảnh đất nước và quyết định ra đi tìm đường cứu nước năm 1911.',
    publisher: 'VTV',
    url: 'https://vtv.vn/video/phim-tai-lieu-hanh-trinh-cuu-nuoc-phan-1-272248.htm',
  },
  {
    type: 'Âm thanh lưu trữ',
    title: 'Hồ Chí Minh đọc Tuyên ngôn Độc lập',
    description: 'Bản ghi âm dài gần bảy phút của sự kiện ngày 2/9/1945, được lưu trên Wikimedia Commons.',
    publisher: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_reading_the_Proclamation_of_Independence_of_the_Democratic_Republic_of_Vietnam_on_2_September_1945.wav',
  },
]
