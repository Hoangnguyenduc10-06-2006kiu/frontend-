let a = parseInt(prompt("moi ban nhap thang muon kiem tra so ngay"));

switch (a) {
    case 1: case 3 : case 5 : case 7 : case 8 : case 10 : case 12: 
       document.write( `thang ${a} co 31 ngay ` );
        break;
   case 2: 
   document.write( `thang ${a} co 28 ngay hoac 29 ngay nam nhuan ` );
   break;
    case 4: case 6: case 9: case 11:
        document.write( `thang ${a} co 30 ngay` );
    default:
        document.write("thang ko hop le")
        break;
}