# Year Progress

Ứng dụng web tối giản giúp theo dõi tiến độ của năm, tháng và ngày theo thời gian thực. Giao diện hiển thị trực quan phần thời gian đã trôi qua bằng hiệu ứng màu sắc, đồng thời cho phép chuyển qua lại giữa các cặp năm.

## Tính năng

- Hiển thị phần trăm thời gian đã trôi qua của năm hiện tại.
- Hiển thị tiến độ của từng tháng trong năm.
- Hiển thị tiến độ của ngày hiện tại cùng thứ, ngày, tháng, năm và giờ.
- Cập nhật tự động ở phía trình duyệt mà không cần tải lại trang.
- Hỗ trợ năm nhuận và số ngày khác nhau giữa các tháng.
- Dùng mũi tên lên/xuống để xem năm trước hoặc năm tiếp theo.
- Giao diện responsive, phù hợp với màn hình máy tính và thiết bị di động.

## Công nghệ sử dụng

- Java 17
- Spring Boot 3.3.4
- Spring MVC
- Thymeleaf
- HTML, CSS và JavaScript thuần
- Maven

## Yêu cầu môi trường

Trước khi chạy dự án, hãy cài đặt:

- JDK 17 trở lên
- Apache Maven 3.8 trở lên
- Trình duyệt web hiện đại như Chrome, Firefox, Edge hoặc Safari

Kiểm tra phiên bản đã cài đặt:

```bash
java -version
mvn -version
```

## Cài đặt và chạy

Clone repository và chuyển vào thư mục dự án:

```bash
git clone <repository-url>
cd year-progress/year-progress
```

Khởi động ứng dụng bằng Maven:

```bash
mvn spring-boot:run
```

Sau đó mở trình duyệt tại:

```text
http://localhost:8080
```

## Đóng gói ứng dụng

Tạo file JAR thực thi:

```bash
mvn clean package
```

Chạy file JAR sau khi build:

```bash
java -jar target/year-progress-1.0.0.jar
```

## Cấu trúc dự án

```text
year-progress/
├── pom.xml
└── src/
	└── main/
		├── java/com/example/yearprogress/
		│   ├── HomeController.java
		│   └── YearProgressApplication.java
		└── resources/
			├── application.properties
			├── static/
			│   ├── css/style.css
			│   └── js/app.js
			└── templates/index.html
```

## Cách hoạt động

Trang chủ được phục vụ bởi endpoint `GET /`. Tham số `offset` dùng để thay đổi cặp năm đang hiển thị:

```text
http://localhost:8080/?offset=-1
http://localhost:8080/?offset=0
http://localhost:8080/?offset=1
```

Việc tính toán tiến độ và cập nhật đồng hồ được thực hiện bằng JavaScript dựa trên thời gian của máy khách. Ứng dụng cập nhật giao diện mỗi 100 mili giây để phần hiển thị chuyển động mượt mà.

## Cấu hình

Các cấu hình mặc định nằm trong `src/main/resources/application.properties`:

```properties
spring.application.name=year-progress
server.port=8080
spring.thymeleaf.cache=false
```

Có thể đổi cổng chạy ứng dụng bằng cách sửa `server.port`, ví dụ:

```properties
server.port=8081
```

## Kiểm thử

Chạy các bước kiểm tra và build dự án bằng lệnh:

```bash
mvn test
```

## Giấy phép

Dự án hiện chưa khai báo giấy phép. Nếu phát hành công khai, hãy bổ sung file `LICENSE` và chọn giấy phép phù hợp với mục đích sử dụng.
