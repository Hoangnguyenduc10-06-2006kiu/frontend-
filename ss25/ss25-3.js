function sumTwoNumber(arr) {
    let div2=[];
    let check =0;
    for (let i = 0;i< arr.length;i++ ){
        if( arr[i] % 2 === 0){
            div2.push(arr[i])
            check =1
        }
        if( check === 0){
            console.log("day ko co so chan");
        }  
    }
    if( check === 1){
        return (console.log(`so le co trong maang la `,div2));
    }
}  
    
sumTwoNumber([13,2,4,6,8,11]);