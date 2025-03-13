/*
khai bao ham
    1.truyen vao tham so(mang lon,kich thuoc cac mang con)
    2.kiem tra du lieu dau cao(dlieu hop le khi nos la mot mang, cac phan tu phai la so nguyen mang co kich thuoc phai lon hon 0)
    3.loc qua cac phan tu cua mang 

       } */

    function splitArray(arr, n) {
        if (!Array.isArray(arr) || typeof n !== "number" || n <= 0) {
            return "dữ liệu không hợp lệ";
        }
    
        let result = [];
        for (let i = 0; i < arr.length; i += n) {
            result.push(arr.slice(i, i + n));
        }
    
        return result;
    }
    
    console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3));