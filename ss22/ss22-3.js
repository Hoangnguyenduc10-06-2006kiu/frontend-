let numbers = prompt('moi ban nhap mot day so bat ki');
if  (!isNaN(numbers)){
    let reversednumbers = numbers.split("").reverse().join("");
    console.log(reversednumbers)
}else{
    console.log('day nhap vao ko hop')
}
