
function sumTwoNumber() {
    let a = +prompt("moi ban nhat vao so thu nhat: ");
    let b = +prompt("moi ban nhap vao so thu hai: ");

    
    if (isNaN(a) || isNaN(b)) {
        console.log("du lieu nhap vao ko hop le");
        return; 
    }

    return (console.log(`tong cua hai so `,a + b));
}

sumTwoNumber()