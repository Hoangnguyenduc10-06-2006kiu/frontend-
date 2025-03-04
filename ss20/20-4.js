// buoc 1 nhap chuoi
// b2 tao bien co
// b3 duyet chuoi do kiem tra ki tu
// b4 i ra kq 
let string = prompt(`moi ban nhap vao mot chuoi bat ki`);
let check_str= prompt(`moi ban nhap vao ki tu can tim `);
check =  string.includes(`${check_str}`);
if(check){
    alert(`ton tai tu tim kiem`)
}else{
    alert(`ko ton tai tu tim kiem`)
}