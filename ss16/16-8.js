let a=prompt("moi nhap so a");
let b=prompt("moi nhap so b");
let c=prompt("moi nhap so c");

if (a > b && a > c) {
    document.write(a+" la so lon nhat");
  } else if (b > a && b > c) {
    document.write(b+" la so lon nhat");
  } else {
    document.write(c+" la so lon nhat");
  }
