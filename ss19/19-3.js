let value = parseInt(prompt(`1. ban muon doi VND --> USD \n2. ban muon doi USD --> VND `));

if (value === 1) {
    let VND = parseInt(prompt(`nhap so tien ban muon doi`));
    USD = VND / 23000;
    VNDtoUSD = alert(`${VND} VND-->${USD} $`);
} else {
    let usd = parseInt(prompt(`nhap so tien ban muon doi`));
    vnd = usd * 23000;
    VNDtoUSD = alert(`${usd} $-->${vnd} VND`);
}

