# Sử dụng Node.js v12
FROM --platform=linux/amd64 node:12-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các gói phụ thuộc
RUN npm install

# Nếu bạn đang xây dựng code cho production
# RUN npm ci --only=production

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Biên dịch TypeScript thành JavaScript

# Mở cổng 8080 cho ứng dụng
EXPOSE 3000 50051

# Chạy ứng dụng khi container được khởi động
CMD [ "npm", "start" ]