let a = parseInt(prompt("moi ban nhap so a: "));
let b = parseInt(prompt("moi ban nhap so b: "));
let c = parseInt(prompt("moi ban nhap so c: "));
let delta=b**2 - 4 * a * c;
if (delta < 0){
document.write("phuong trinh vo nghiem");
}else if(delta === 0) {
    let x = -b / (2 * a);
document.write("phuong trinh co nghiệm kép:" + x);
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("Phương trình có hai nghiệm x1 = " + x1 + " và x2 = " + x2);
}






