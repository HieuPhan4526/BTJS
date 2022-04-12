/**
 * Khối 1 : input
 * giaUsdHienNay
 * giaQuyDoiUsdSangVnd
 * nguoiDungSoTienUSD
 * 
 * Khối 2 : Các bước xử lý
 * B1: Tạo biến và gán giá trị
 * B2: Xây dựng công thức
 * tienSauQuyDoi = giaQuyDoiUsdSangVnd * nguoiDungSoTienUSD
 * 
 * 
 * B3: hiển thị kết quả 
 * 
 * 
 * 
 * Khối 3 : Output
 * + tienSauQuyDoi
 * 
 * 
 * 
 */



// B1
var giaUsdHienNay = 1;  
var giaQuyDoiUsdSangVnd = 23500 * giaUsdHienNay;
var nguoiDungSoTienUSD = 2
var tienSauQuyDoi = 0;

//B2

tienSauQuyDoi = giaQuyDoiUsdSangVnd * nguoiDungSoTienUSD

//B3
console.log("tiền sau quy đổi: " + tienSauQuyDoi.toLocaleString() + " VND");
