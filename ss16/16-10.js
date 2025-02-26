let firstNumber = prompt("moi ban nhap so thu nhat");
let  secondNumber = prompt("moi ban nhap so thu hai");
let min = Math.min(firstNumber, secondNumber );
let max = Math.max(firstNumber, secondNumber );
let randomNumber = Math.random() * (max - min) + min;
console.log(`Số ngẫu nhiên trong khoảng từ ${min} đến ${max}: ${randomNumber}`);3
