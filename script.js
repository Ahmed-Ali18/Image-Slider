const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  sliderImage.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  sliderImage.src = images[currentIndex];
});



let autoPlayInterval = null;
const autoPlayBtn = document.getElementById("autoPlayBtn");

autoPlayBtn.addEventListener("click", () => {
  if (autoPlayInterval === null) {
    // شغّل Auto Play
    autoPlayInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      sliderImage.src = images[currentIndex];
    }, 3000);

    autoPlayBtn.textContent = "Pause";
  } else {
    // وقف Auto Play
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    autoPlayBtn.textContent = "Play";
  }
});
