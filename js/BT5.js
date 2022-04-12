/**
 * Khối 1 : input
 * num (số có 2 chữ số)
 * 
 * 
 * Khối 2 : các bước xử lý
 * B1: Tạo biến và gán giá trị
 * B2: Các bước xử lý
 * * ten(hàng chục) = num/10 => lấy phần nguyên floor(num/10)
 * * unit(hàng đơn vị) = num % 10 => lấy phần dư num % 10
 * 
 * sum = ten + unit
 * 
 * 
 * B3: hiển thị kết quả
 * 
 * 
 * Khối 3 : output
 * sum
 * 
 * 
 */

// B1
var num = 25;
var ten = Math.floor(num/10);
var unit = num % 10;

//B2

sum = ten + unit

//B3

console.log("tổng 2 ký số: " + sum);
