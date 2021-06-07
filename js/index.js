"use strict";

const images = [
  "https://u-stena.ru/upload/iblock/9cb/9cb1acc5cefd10605ed33a4fa119894d.jpg",
  "https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/17/kartinka.jpg",
  "https://lh3.googleusercontent.com/proxy/KQu8PvszA1aBLH8RwzHgBYfQkCyk7cL-l4huQOHEAnCLm7pEGOdKEVZsTyLhnkoGvVjgtSbQs3P1rOv8gWrv43KBk_vb8ipWGoG8LLIMjFHxm6yH",
];

const imageElement = document.querySelector("img");

const [btnPrev, btnNext] = document.querySelectorAll("#sliderContainer button");
//каррирование
const btnClickHendler =
  (direction = "next") =>
  (e) => {
    slider.currentIndex =
      slider[direction === "next" ? "nextIndex" : "prevIndex"];
    imageElement.setAttribute("src", slider.currentSlide);
  };

btnPrev.addEventListener("click", btnClickHendler("prev"));

btnNext.addEventListener("click", btnClickHendler());

loadImage(images[0]);

const slider = new Slider(images);

// function btnPrevHendler(e) {
//   slider.currentIndex = slider.prevIndex;
//   imageElement.setAttribute('src', slider.currentSlide);
// }

// function btnNextHendler(e) {
//   slider.currentIndex = slider.nextIndex;
//   imageElement.setAttribute('src', slider.currentSlide);
// }

function loadImage(image) {
  imageElement.setAttribute("src", image);
}
