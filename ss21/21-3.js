let string = prompt(`moi ban nhap mat khau`);
let password = (`hoangduc`);
let check =  string.includes(`${password}`);
if(check){
    alert(`da nhap dung mat khau`)
}else{
    alert(`mat khau nhap ko dung`)
}