const first_date = new Date(prompt("nhập vào hai ngày thứ nhất. Yêu cầu ngày phải nhập dưới định dạng YYYY-MM-DD"));
const second_date = new Date(prompt(" nhập vào hai ngày thứ hai. Yêu cầu ngày phải nhập dưới định dạng YYYY-MM-DD"));
let difference = Math.abs(first_date - second_date);
let differenceInDays = difference / (1000 * 60 * 60 * 24);
document.write(`độ chênh lệch là ${differenceInDays} ngày`);

