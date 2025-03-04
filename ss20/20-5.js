let a = parseInt(prompt(`moi ban nhap vao co so  bat ki`));
let b = parseInt(prompt(`moi ban nhap vao so mu bat ki `));
let Product=1;
for(let i =0;i<b;i++ ){
   Product*=a;
}
document.write(`${Product}`)
