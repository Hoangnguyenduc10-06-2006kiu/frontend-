let number = parseInt(prompt("moi ban nhap so tu nhirn n"));
let text;

document.write(`cac so chia het cho 5 tu 1 den ${number}:`)
for (let i=1 ; i <= number ; i++){
    if (i % 5 ===0 ){
         text = document.write(i+",");
    }
}
