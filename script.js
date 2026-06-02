const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];

let currentIndex = 0;

const galleryImage =
document.getElementById("galleryImage");

const counter =
document.getElementById("counter");

function updateImage(){

    galleryImage.src =
    images[currentIndex];

    counter.textContent =
    `${currentIndex + 1} / ${images.length}`;
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    updateImage();
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    updateImage();
}

/* Auto Slide Every 3 Seconds */

setInterval(() => {

    nextImage();

}, 3000);