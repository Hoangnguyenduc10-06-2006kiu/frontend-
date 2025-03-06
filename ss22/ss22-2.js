let listNumbers = [2,5,7,4,1,8,6];
let number = parseInt(prompt("moi ban cho con so may man "));
console.log('mang la',listNumbers)
if (listNumbers.includes(number)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
