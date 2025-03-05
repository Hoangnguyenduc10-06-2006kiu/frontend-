let day = prompt("Nhập ngày sinh: ");
let month = prompt("Nhập tháng sinh: ");
	if(month==12 && day>=22 || month==1 && day<=19 ){
	    alert("Cung Ma Kết"); 
	}else if(month==1 && day>=20 || month==2&& day<=18){
	    alert("Cung Bảo Bình"); 
	}else if(month==2 && day>=19 || month==3&& day<=20){
	    alert("Cung Song Ngư");
	}else if(month==3 && day>=21 || month==4&& day<=19){
	    alert("Cung Bạch Dương ");
	}else if(month==4 && day>=20 || month==5&& day<=20){
	    alert("Cung Kim Ngưu");
	}else if(month==5 && day>=21 || month==6&& day<=21){
	    alert("Cung Song Tử");
	}else if(month==6 && day>=22 || month==7&& day<=22){
	    alert("Cung Cự Giải ");
	}else if(month==7 && day>=23 || month==8&& day<=22){
	    alert("Cung Sư Tử ");
	}else if(month==8 && day>=23 || month==9&& day<=22){
	    alert("Cung Xử Nữ");
	}else if(month==9 && day>=23 || month==10&& day<=22){
	    alert("Cung Thiên Bình");
	}else if(month==10 && day>=23 || month==11&& day<=22){
	    alert("Cung Bọ Cạp");
	}else if(month==11 && day>=23 || month==12&& day<=21){
	    alert("Cung Nhân Mã");}