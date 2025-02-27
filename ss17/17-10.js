let a = parseInt(prompt("nhap so ban muon kiem tra co phai la so chinh phuong ko"));
let num = Math.sqrt(a);
if (num ** 2 == a) {
    document.write("day la so chinh phuong");
}else{
    document.write("day ko phai so chinh phương");
}
