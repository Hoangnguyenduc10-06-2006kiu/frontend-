let a = parseInt(prompt(`moi ban nhap vao so bat ki`));
document.write(`cac uoc cua so ${a} la: `)
for(let i =0 ; i<a ;i++){
    if (a % i ===0){
        document.write(`${i} ${-i} `)
    }  
}
document.write(`${a} ${-a} `)



