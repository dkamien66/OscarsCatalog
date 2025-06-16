// Add event listeners for arrow buttons
const leftArrow = document.querySelector('.arrow:first-child');
const rightArrow = document.querySelector('.arrow:last-child');

leftArrow.addEventListener('click', goLeft);
rightArrow.addEventListener('click', goRight);

function goLeft() {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    container.scrollLeft -= 100;
}
  
function goRight() {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    container.scrollLeft += 100;
}

window.addEventListener("load", function () {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    container.scrollLeft = container.scrollWidth;
  });