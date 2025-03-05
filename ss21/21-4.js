let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      alert("Phương trình có vô số nghiệm.");
    } else {
      alert("Phương trình vô nghiệm.");
    }
  } else {
    let x = -c / b;
    alert("Phương trình có nghiệm duy nhất x = " + x.toFixed(2));
  }
} else {
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có 2 nghiệm phân biệt:\n x1 = " + x1.toFixed(2) + "\n x2 = " + x2.toFixed(2));
  } else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép x = " + x.toFixed(2));
  } else {
    alert("Phương trình vô nghiệm thực.");
  }
}