let currentSlide = 0;
const slideInterval = 5000; 

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}


setInterval(() => moveSlide(1), slideInterval);

