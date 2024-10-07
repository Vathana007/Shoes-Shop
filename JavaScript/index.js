function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('Header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    fetch('Footer.html')
        .then(respone => respone.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

// Image slider
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .items');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthitems = items.length;

    next.onclick = function () {
        active = (active + 1) % lengthitems;
        reloadSlider();
    };

    prev.onclick = function () {
        active = (active - 1 + lengthitems) % lengthitems;
        reloadSlider();
    };

    dots.forEach((dot, index) => {
        dot.onclick = function () {
            active = index;
            reloadSlider();
        };
    });

    function reloadSlider() {
        let checkLeft = active * -100;
        list.style.transform = `translateX(${checkLeft}%)`;

        document.querySelector('.slider .dots li.active').classList.remove('active');
        dots[active].classList.add('active');
    }
});

// Shop Item
const track = document.querySelector('.products');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-item');
const prevButton = document.querySelector('.prev-item');

const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlideIndex = 0;

const moveToSlide = (currentIndex) => {
    const offset = -slideWidth * currentIndex;
    track.style.transform = `translateX(${offset}px)`;
};

nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0;
    }
    moveToSlide(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = slides.length - 1;
    }
    moveToSlide(currentSlideIndex);
});
