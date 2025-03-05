let a = parseInt(prompt("moi ban nhap vao a day so bat ki"));
let b = parseInt(prompt("moi ban nhap vao b day so bat ki"));
let c = parseInt(prompt("moi ban nhap vao c day so bat ki"));
let d = parseInt(prompt("moi ban nhap vao d day so bat ki"));
let e = parseInt(prompt("moi ban nhap vao e day so bat ki"));
let check=0;

if (a % 2 === 0 && a > 0 ) {;
    check +=1;
}

if (b % 2 === 0 && b > 0 ) {;
    check +=1;
}

if (c % 2 === 0 && c > 0 ) {;
    check +=1;
}

if (d % 2 === 0 && d > 0 ) {;
    check +=1;
}

if (e % 2 === 0 && e > 0 ) {;
    check +=1;
}

let odd_number = 5 - check;
document.write(`so luong so chan trong day la: ${check} ; so le la:${odd_number}` );