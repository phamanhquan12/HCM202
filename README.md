# Hành Trình Tư Tưởng

Nền tảng ôn tập trực quan cho học phần HCM202, giúp sinh viên học Tư tưởng Hồ Chí Minh theo ba bước: **nhớ khái niệm → hiểu tiến trình → tự kiểm tra**.

## Chức năng

- 41 flashcard thuộc 6 chương, có lọc theo chương, trộn thẻ, chuyển thẻ và đánh dấu đã thuộc/cần ôn.
- Dòng thời gian gồm 5 giai đoạn hình thành và phát triển tư tưởng Hồ Chí Minh.
- 24 câu hỏi trắc nghiệm; mỗi lượt tổng hợp lấy ngẫu nhiên 10 câu, hiển thị giải thích ngay sau khi trả lời.
- Lưu tiến độ flashcard và điểm quiz tốt nhất bằng `localStorage`; không cần tài khoản hay máy chủ.
- Giao diện đáp ứng cho máy tính, máy tính bảng và điện thoại.

Nội dung được tổng hợp từ *Giáo trình Tư tưởng Hồ Chí Minh* dành cho bậc đại học hệ không chuyên lý luận chính trị, NXB Chính trị quốc gia Sự thật, 2021. Sản phẩm phục vụ mục đích học tập.

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

Tệp `vercel.json` đã cấu hình fallback về `index.html` để các route như `/flashcards`, `/timeline` và `/quiz` hoạt động khi truy cập trực tiếp.

Nếu dùng Vercel CLI:

```bash
npx vercel
npx vercel --prod
```

## Công nghệ

React, TypeScript, Vite, React Router và CSS thuần. Dự án không dùng backend, cơ sở dữ liệu, đăng nhập hay API ngoài.
