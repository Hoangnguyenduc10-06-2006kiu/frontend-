function addStudents() {
    for (let i = 0; i < n; i++){
        let nameStudent = prompt(`Nhap ten sinh vien ${i + 1}`);

        if (nameStudent) {
            studentArr[i] = nameStudent;
        }
    }
}
function showStudents() {
    let message = "";
    for (let i = 0; i < n; i++){
        message += `Sinh vien ${i+1} ten: ${studentArr[i]}\n`;
    }
    alert(message);
}
function findStudent() {
    let inputFindStudent = prompt("Nhap ten sinh vien can tim:");
    for (let i = 0; i < n; i++){
        if (inputFindStudent === studentArr[i]) {
            alert(`Tim thay sinh vien ${i+1} ten: ${studentArr[i]}`);
            return;
        }
    }
    alert("Khong tim thay sinh vien");
}
function deleteStudent() {
    let inputDeleteStudent = prompt("Nhap ten sinh vien can xoa:");
    for (let i = 0; i < n; i++){
        if (inputDeleteStudent === studentArr[i]) {
            studentArr.splice(i, 1);
            n--;
            alert("Xoa thanh cong");
            return;
        }
    }
    alert("Khong tim thay sinh vien");
}
let studentArr = [];
let choice;
let n;
do {
    choice = +prompt("Menu\n1.Nhập danh sách sinh viên.\n2.Hiển thị danh sách sinh viên.\n3.Tìm sinh viên theo tên.\n4.Xóa sinh viên khỏi danh sách.\n5.Thoat\nLua chon cua ban:");
    switch (choice) {
        case 1://1.Nhập danh sách sinh viên.
            n = +prompt("Nhap so luong sinh vien:");
            if (n && n > 0) {
                addStudents();
            } else {
                alert("Sai input");
            }
            break;
        case 2:
            if (Number.isInteger(n) && n > 0) {
                showStudents();
            } else {
                alert("Mang rong");
            }
            break;
        case 3:
            if (Number.isInteger(n) && n > 0) {
                findStudent();
            } else {
                alert("Mang rong");
            }
            break;
        case 4:
            if (Number.isInteger(n) && n > 0) {
                deleteStudent();
            } else {
                alert("Mang rong");
            }
            break;
        case 5:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
            break;
    }
} while (choice !== 5);