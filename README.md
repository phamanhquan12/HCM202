# Hành Trình Tư Tưởng

Triển lãm học tập số cho học phần HCM202, giúp sinh viên khám phá Tư tưởng Hồ Chí Minh theo bốn bước: **đọc tiến trình → xem tư liệu → nhớ khái niệm → tự kiểm tra**.

## Chức năng

- 72 flashcard chuyên sâu, cân bằng 12 thẻ cho mỗi chương, có lọc, trộn thẻ và đánh dấu đã thuộc/cần ôn.
- Hành trình gồm 5 giai đoạn, tách rõ sự kiện, bối cảnh lịch sử và sự hình thành tư tưởng.
- Không gian **Hệ tư tưởng** kết nối 6 chủ đề lớn, sơ đồ Nhà nước của dân–do dân–vì dân, vòng tròn đại đoàn kết, tương tác Cần–Kiệm–Liêm–Chính và bản đồ khái niệm tổng kết.
- Chuyên đề “Giặc ở bên trong” trực quan hóa quan hệ giữa chủ nghĩa cá nhân, quan liêu, tham ô, lãng phí và niềm tin của nhân dân.
- Phòng tư liệu số với ảnh, văn kiện, phim và âm thanh; từng hiện vật có chú thích, nguồn và tình trạng bản quyền.
- Ngân hàng 150 câu hỏi trắc nghiệm, cân bằng 25 câu cho mỗi chương và có giải thích ngay sau khi trả lời.
- Chế độ luyện tổng hợp 30 câu, làm đủ 25 câu theo chương hoặc thử sức với toàn bộ 150 câu.
- Lưu tiến độ flashcard và điểm quiz tốt nhất bằng `localStorage`; không cần tài khoản hay máy chủ.
- Giao diện triển lãm lịch sử đáp ứng cho máy tính, máy tính bảng và điện thoại.

Nội dung học thuật được tổng hợp từ *Giáo trình Tư tưởng Hồ Chí Minh* dành cho bậc đại học hệ không chuyên lý luận chính trị, NXB Chính trị quốc gia Sự thật, 2021. Tư liệu lịch sử lấy từ Wikimedia Commons, Gallica/Thư viện Quốc gia Pháp, Trung tâm Lưu trữ quốc gia III và Center of Military History; nội dung nghe nhìn liên kết tới VTV và kho lưu trữ gốc. Tất cả hiện vật sử dụng trực tiếp đều có thông tin nguồn và giấy phép trên trang `/archive`. Sản phẩm phục vụ mục đích học tập.

## Chạy trên máy cá nhân

Yêu cầu [Node.js](https://nodejs.org/) 20 trở lên.

```bash
git clone https://github.com/phamanhquan12/HCM202.git
cd HCM202
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal, mặc định là <http://localhost:5173>.

## Kiểm tra bản production

```bash
npm run lint
npm run build
npm run preview
```

Thư mục `dist/` được tạo sau khi build và có thể triển khai lên bất kỳ dịch vụ static hosting nào.

## Triển khai Vercel

Có thể import trực tiếp repository này vào Vercel. Vercel sẽ tự nhận diện Vite và dùng:

- Build command: `npm run build`
- Output directory: `dist`

Tệp `vercel.json` đã cấu hình fallback về `index.html` để các route như `/ideas`, `/archive`, `/flashcards`, `/timeline` và `/quiz` hoạt động khi truy cập trực tiếp.

Nếu dùng Vercel CLI:

```bash
npx vercel
npx vercel --prod
```

## Công nghệ

React, TypeScript, Vite, React Router và CSS thuần. Dự án không dùng backend, cơ sở dữ liệu, đăng nhập hay API ngoài.
