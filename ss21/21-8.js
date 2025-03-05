document.write("cac so armstrong 3 chu so la:");
for(let i = 100;i<1000;i++){
    const i1 = Math.floor(i / 100);
    const i2 = Math.floor((i % 100) / 10);
    const i3 = i % 10;
  
    if (i1**3  + i2 ** 3 + i3 **3 === i) {
    document.write(i+" ");
    }
}
