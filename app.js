const slideList = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.slide-dots span')];
let indexSlide = 0;
let indexSetInterval = 0;


const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));
    dots[activeDot].classList.remove('active-dots');
    dots[indexSlide].classList.add('active-dots');
}

const changeSlide = () => {
    indexSlide++
    if (indexSlide == slideList.length) indexSlide = 0;
    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    slideList[activeSlide].classList.remove('active-slide');
    slideList[indexSlide].classList.add('active-slide');

    changeDots();
}
indexSetInterval = setInterval(changeSlide, 8000);

const dotsManual = [...document.querySelectorAll('.slide-dots span')];

function changeManual() {
    let activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));
    dots[activeDot].classList.remove('active-dots');
    this.classList.add('active-dots');
    activeDot = dots.findIndex(dot => dot.classList.contains('active-dots'));

    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    slideList[activeSlide].classList.remove('active-slide');
    slideList[activeDot].classList.add('active-slide');
    clearInterval(indexSetInterval);
    indexSetInterval = setInterval(changeSlide, 8000);
}

dotsManual.forEach(item => item.addEventListener('click', changeManual));


//gallery 

const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
// function generateHTML() {
//     return ` <div>class="item__overlay"><button>Zobacz</button></div>`;
// }

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}

const items = document.querySelectorAll('.hexagon');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);



//sticky nav


const nav = document.querySelector('.header__burger');
let topOfNav = nav.offsetTop;


function fixNav() {
    if(window.scrollY >=topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add('fixed-nav');
    
    }else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);


//burger nav

const burger = document.querySelector('.fa-bars');


const slider_nav = document.querySelector('.header__slider-nav');
const iconBars = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');

burger.addEventListener('click', function () {
    iconBars.classList.toggle("on");
    iconX.classList.toggle("on");
    slider_nav.classList.toggle("on");
})

iconX.addEventListener('click', function() {
    slider_nav.classList.toggle("on");
    iconX.classList.toggle("on");
    iconBars.classList.toggle("on");
})