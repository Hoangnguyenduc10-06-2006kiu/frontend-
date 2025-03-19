

const textElement = document.querySelector('#text');
const btnhideElement = document.querySelector('#btn-hide');
const btnshowElement = document.querySelector('#btn-show');

btnhideElement.addEventListener("click", function () {
    textElement.style.display='none';
});

btnshowElement.addEventListener("click", function () {
    textElement.style.display='block';
});