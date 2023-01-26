// зміщення від лівого краю
let offset = 0; 
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 245;
    if (offset > 510) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 245;
    if (offset < 0) {
        offset = 510;
    }
    sliderLine.style.left = -offset + 'px';
});