import { Product } from "@/models/Product";

export const PRODUCTS: Product[] = [
  {
    id: "abcd-1234-efgh-5678",
    name: "Đèn LED tiết kiệm điện",
    description:
      "Đèn LED với hiệu suất chiếu sáng cao và tiêu thụ ít điện năng.",
    imageUrl:
      "https://ledduhal.net/wp-content/uploads/2019/01/bong-den-led-15w-sbnl515.jpg?v=1637415877",
    isInStock: true,
    warrantyMonths: 24,
    price: 400000, // 400,000 VND
  },
  {
    id: "ijkl-9012-mnop-3456",
    name: "Vòi nước cảm ứng",
    description:
      "Vòi nước tự động, giúp tiết kiệm nước và thuận tiện khi sử dụng.",
    imageUrl: "https://sieuthidienthongminh.vn/media/product/334_sh_f66.jpg",
    isInStock: true,
    warrantyMonths: 12,
    price: 150000, // 150,000 VND
  },
  {
    id: "qrst-7890-uvwx-1234",
    name: "Bóng đèn thông minh",
    description: "Bóng đèn có thể điều khiển bằng điện thoại qua ứng dụng.",
    imageUrl:
      "https://product.hstatic.net/1000111355/product/el52710w__26__55dc1dbfb53d4542ac703ee04b78ddcc.jpg",
    isInStock: false,
    warrantyMonths: 18,
    price: 350000, // 350,000 VND
  },
  {
    id: "yzab-5678-cdef-9012",
    name: "Máy bơm nước tự động",
    description: "Máy bơm nước có chức năng tự động tắt khi không có nước.",
    imageUrl: "https://sieuthidienthongminh.vn/media/product/334_sh_f66.jpg",
    isInStock: true,
    warrantyMonths: 36,
    price: 250000, // 250,000 VND
  },
  {
    id: "ghij-3456-klmn-7890",
    name: "Công tắc điện thông minh",
    description: "Công tắc điện có thể điều khiển từ xa qua Wi-Fi.",
    imageUrl:
      "https://bizweb.dktcdn.net/100/089/254/products/touch-3-nhom-vien-gold-mat-den-2.jpg?v=1546019332067",
    isInStock: false,
    warrantyMonths: 12,
    price: 1200000, // 1,200,000 VND
  },
];
