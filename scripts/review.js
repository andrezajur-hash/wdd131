
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
localStorage.setItem("numReviews-ls", numReviews);

const display = document.querySelector("#review-count");
if (display) {
    display.textContent = numReviews;
}
