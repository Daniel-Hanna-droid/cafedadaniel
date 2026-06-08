const images = [
    "images/Cafe Da Daniel has just opened.png",
    "images/tour.png",
    "images/waffle.png"
];

let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

// Auto-switch every 15 seconds
setInterval(nextSlide, 15000);

// Show first image on load
showSlide();
