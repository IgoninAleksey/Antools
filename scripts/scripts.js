let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__next').addEventListener('click', function(){
    offset = offset + 1440;
    if (offset > 2880) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    offset = offset - 1440;
    if (offset < 0) {
        offset = 2880;
    }
    sliderLine.style.left = -offset + 'px';
});