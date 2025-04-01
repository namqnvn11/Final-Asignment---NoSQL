# BooksStore MongoDB Project

Đây là ứng dụng quản lý cửa hàng sách sử dụng MongoDB để lưu trữ dữ liệu.

## Cấu trúc dự án

```
BooksStore/
├── config/               # Cấu hình
│   └── db.js             # Cấu hình kết nối MongoDB
├── controllers/          # Bộ điều khiển
│   ├── authorController.js # Xử lý logic liên quan đến tác giả
│   └── bookController.js # Xử lý logic liên quan đến sách
├── models/               # Các model MongoDB
│   ├── author.js         # Schema cho tác giả
│   ├── book.js           # Schema cho sách
│   ├── favorite.js       # Schema cho yêu thích
│   └── genre.js          # Schema cho thể loại
├── routes/               # Định nghĩa các route API
│   ├── authors.js        # Route cho tác giả
│   └── books.js          # Route cho sách
├── app.js                # Điểm khởi đầu ứng dụng
├── seed-data.js          # Script để thêm dữ liệu mẫu
└── README.md             # Tài liệu hướng dẫn
```

## Cài đặt

1. Đảm bảo bạn đã cài đặt Node.js và MongoDB.
2. Clone repository này.
3. Cài đặt các gói phụ thuộc:

```bash
npm install
```

## Cấu hình

Chỉnh sửa file `config/db.js` để đặt chuỗi kết nối MongoDB phù hợp.

## Thêm dữ liệu mẫu

Để thêm dữ liệu mẫu vào cơ sở dữ liệu, chạy lệnh:

```bash
node seed-data.js
```

## Khởi động ứng dụng

Để khởi động ứng dụng, chạy lệnh:

```bash
node app.js
```

Ứng dụng sẽ chạy trên cổng 3000 (mặc định).

## API Endpoints

### Sách

- `GET /api/books`: Lấy tất cả thông tin về sách
- `GET /api/books/created-this-year`: Lấy tất cả thông tin về các cuốn sách được tạo trong năm nay
- `GET /api/books/programming-tech`: Lấy thông tin về các cuốn sách có chứa từ "programming" trong tiêu đề và thuộc thể loại "Technology"
- `GET /api/books/with-favorites`: Lấy thông tin về sách (id, title, author_full_name, publishing_year, num_of_favorites)

### Tác giả

- `GET /api/authors`: Lấy tất cả thông tin về tác giả
- `GET /api/authors/with-at-least-five-books`: Lấy thông tin về các tác giả có ít nhất 5 cuốn sách

## Cơ sở dữ liệu

Dự án sử dụng cơ sở dữ liệu MongoDB với tên `BooksStore` gồm 4 collections:

1. `authors`: Lưu trữ thông tin về tác giả
2. `books`: Lưu trữ thông tin về sách (có index trên trường title)
3. `genres`: Lưu trữ thông tin về thể loại
4. `favorites`: Lưu trữ thông tin về sách yêu thích

## Yêu cầu đã thực hiện

1. ✅ Tạo cơ sở dữ liệu BooksStore
2. ✅ Thiết kế cơ sở dữ liệu NoSQL - Document Database (MongoDB)
3. ✅ Tạo chỉ mục (Index) trên trường title trong bộ sưu tập books
4. ✅ Chèn vào bộ sưu tập ít nhất 5 tài liệu (thực tế đã thêm 15 sách)
5. ✅ Tạo truy vấn để truy xuất tất cả thông tin về các cuốn sách được tạo trong năm nay
6. ✅ Tạo truy vấn để lấy thông tin về các tác giả có ít nhất 5 cuốn sách
7. ✅ Tạo truy vấn để lấy thông tin về các cuốn sách có chứa từ "programming" trong tiêu đề và thuộc thể loại "Technology"
8. ✅ Tạo truy vấn để lấy thông tin về sách bao gồm các trường: id, title, author_full_name, publishing_year, num_of_favorites 