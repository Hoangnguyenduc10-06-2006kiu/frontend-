function findMin(arr) {
    if (!Array.isArray(arr)) {
        return "mang ko hop le!";
    }else if(arr.length === 0){
        return "mang rong!";
    }
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return (`gia tri be nhat cua mang  la: ${min}`); 
}
console.log(findMin([1,2,34,54,5,6,43])); 