// rotate image
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
}
// rotate image ///

// let liEls = document.querySelectorAll('.nike-slide-product ul li');
// let index = 0;
// window.show = function(increase) {
//   index = index + increase;
//   index = Math.min(Math.max(index,0), liEls.length-1);
//   liEls[index].scrollIntoView({behavior: 'smooth'});
// }

// second carousel;

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide .sl');

// buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})


const controls = document.querySelector('.controls');
const container = document.querySelector('.thumbnail-container');
const allbox = container.children;
const containerWidth = container.offsetWidth;
const margin = 0;
var items = 0;
var totalItems = 0;
var jumpSlideWidth=0;

responsive = [{
        breakPoint: {
            width: 0,
            item: 2
        }
    },
    {
        breakPoint: {
            width: 767,
            item: 2
        }
    },
    {
        breakPoint: {
            width: 1000,
            item: 2
        }
    }
]

function load() {
    ;
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            items = responsive[i].breakPoint.item
        }
    }
    start();
}

function start() {
    var totalItemsWidth = 0;
    for (let i = 0; i < allbox.length; i++) {
        allbox[i].style.width = (containerWidth / items) - margin + "px";
        allbox[i].style.margin = (margin / 2) + "px";
        totalItemsWidth += containerWidth / items;
        totalItems++
        
    }
    container.style.width = totalItemsWidth + "px";

    // slide controls nimber
    const allSlides = Math.ceil(totalItems / items);
    const ul = document.createElement("ul");

    for (let i = 1; i <= allSlides; i++) {
        const li = document.createElement("li");
        li.id = i;
        // li.innerHTML = i;
        li.setAttribute("onclick", "controlSlides(this)");
        ul.appendChild(li);
        if (i == 1) {
            li.className = "active";
        }
    }
    controls.appendChild(ul);
}
// next slide
function controlSlides(ele) {
    const ul=controls.children;

    const li=ul[0].children

    var active;

    for(let i=0;i<li.length;i++){
        if(li[i].className=="active"){
            active=i;
            // console.log(active)
            li[i].className="";
        }
    }
    ele.className='active';
    var numb=(ele.id-1)-active;
    jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
    container.style.marginLeft=-jumpSlideWidth + 'px';
}

window.onload = load();



var like_button = document.getElementById("like-button");
if (like_button) {
    like_button.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}
