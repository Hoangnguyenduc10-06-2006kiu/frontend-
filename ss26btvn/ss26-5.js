function integer(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let maxElement = -Infinity;
            let maxElementIndex;
            for (let i = 0; i < arr.length; i++){
                if (Number.isInteger(arr[i]) && arr[i] > maxElement) {
                    maxElement = arr[i];
                    maxElementIndex = i;
                }
            }
            if (maxElement != -Infinity) {
                alert(`max: ${maxElement}\nposition: ${maxElementIndex}`);
            }
        } else {
            alert("Mảng ko có dữ liệu");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
integer([10, 9, 5, 11, 24, 5]);