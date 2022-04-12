/**
 * 
 * Khối 1 : input
 * var num1...num5
 * 
 * Khối 2 : các bước sử lý
 * tb = (num1 + ... + num5) / 5
 * 
 * 
 * khối 3 : output
 * + tb
 * 
 * 
 * 
 * 
 */


var num1 = 5.25;
var num2 = 5.25;
var num3 = 5.25;
var num4 = 5.25;
var num5 = 5.25;
var tb = 0;

tb = (num1 + num2 + num3 + num4 + num5) / 5;

console.log("Số thực trung bình: " + tb);


console.log("làm tròn TB: " + Math.round(tb));


console.log("làm tròn, lấy bao nhiêu số sau dấu . : " + tb.toFixed(1));

