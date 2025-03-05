// // Mô phỏng 1 máy ATM trong thực tế.
// Cho người dùng nhập vào số tiền cần rút (Số tiền nhập vào phải chia hết cho 1000)
// → Output ra các tờ tiền theo từng mệnh giá và số lượng của chúng
// Biết trong cây ATM có các loại tiền với mệnh giá sau: (500.000, 200.000, 100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000)
// → Khi rút tiền thì ưu tiên rút các tờ tiền có mệnh giá lớn trước


//CHỮA:
let money = +prompt("Nhập số tiền: ");
let minMoneyDraw = 500000;
let count;
if (Number.isInteger(money) && (money % 1000 === 0)) {
    while (money !== 0) {
        count = Math.floor(money / minMoneyDraw);
        if (count > 0) {
            document.write(`${minMoneyDraw.toLocaleString()} - ${count} tờ <br/>`);
            money = money - minMoneyDraw * count;
        }
        if (minMoneyDraw === 500000) {
            minMoneyDraw = 200000; //gán
        } else if (minMoneyDraw === 200000) {
            minMoneyDraw = 100000;
        } else if (minMoneyDraw === 100000) {
            minMoneyDraw = 50000;
        } else if (minMoneyDraw === 50000) {
            minMoneyDraw = 20000;
        } else if (minMoneyDraw === 20000) {
            minMoneyDraw = 10000;
        } else if (minMoneyDraw === 10000) {
            minMoneyDraw = 5000;
        } else if (minMoneyDraw === 5000) {
            minMoneyDraw = 2000;
        } else if (minMoneyDraw === 2000) {
            minMoneyDraw = 1000;
        }
    }
} else {
    alert(`Nhạp lại`);
}