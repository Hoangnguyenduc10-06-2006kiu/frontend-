let money = parseInt(prompt(`moi ban nhap so tien muon gui`));
let interest_rate = parseInt(prompt(`moi ban nhap lai xuat thang`));
let rate = interest_rate/100
let moth = parseInt(prompt(`moi ban nhap so thang muon gui`));
let Future_Value =(money*(1 + rate)**moth) ;
alert(`so nhan dc ${Future_Value} so tien lai ${Future_Value - money}`);