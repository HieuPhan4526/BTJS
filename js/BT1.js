/**
 * Khối 1: input
 * luongMoiNgay
 * soNgayLam
 * 
 * Khối 2: các bước sử lý
 * sử dụng 3 bước cơ bản
 * B1: tạo biến và gán giá trị
 * B2: xây dựng công thức
 * B3: hiển thị kết quả.
 * 
 * 
 * 
 * Khối 3 : output
 * tongLuong
 */


// B1
var luong1Ngay = 100000;
var soNgayLam = 5;
var tongLuong = 0;

//B2

tongLuong = luong1Ngay * soNgayLam

// B3
// toLocaleString: hiển thị dấu chia phần ngàn cho number.
console.log("Tổng lương: " + tongLuong.toLocaleString() + "VND");