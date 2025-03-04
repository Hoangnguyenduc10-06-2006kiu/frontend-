let a = parseInt(prompt(`moi ban nhap vao so bat ki`));
let check =0;
if (a < 2) {
    alert(`${a} không là số nguyên tố`);
}
for(let i = 2; i<a ;i++){
    if (a % i === 0){
        check = 1;
        break;
    }  
}

if (check === 0) {
    alert(`${a} là số nguyên tố`);
} else {
    alert(`${a} không là số nguyên tố`);
}
