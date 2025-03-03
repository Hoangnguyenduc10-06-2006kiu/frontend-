let string = prompt(`moi ban nhap vao mot chuoi bat ki`);
check =  string.includes(" ");
if(check){
    alert(`chuoi nhap vao co khoang cach`)
}else{
    alert(`chuoi nhap khong vao co khoang cach`)
}