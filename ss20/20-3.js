let string = parseInt(prompt('nhap vao chuoi so doi xung'));

string=string.toString()
let reverse_string = string.toString().split("").reverse().join("");

 if (string === reverse_string) {
        alert(`Số ${string} đối xứng`);
    } else {
        alert(`Số ${string} không đối xứng`);
    }