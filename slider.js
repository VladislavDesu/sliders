"user strict";

const prevBtn = document.querySelector(".slider__prev");
const nextBtn = document.querySelector(".slider__next");

const sliderContainer = document.querySelector(".slider__list");
const sliderElems = document.querySelectorAll(".slider__elem");

const sliderElemWidth = sliderElems[0].clientWidth;
let counter = 0;

sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;

nextBtn.addEventListener("click", () => {
   if (!(counter >= sliderElems.length - 1)) {
      counter++;
      sliderContainer.style.transition = "transform 0.4s ease-in-out";
      sliderContainer.style.transform = `translateX(${
         -sliderElemWidth * counter
      }px)`;
   } else {
      counter = 0;
      sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
   }
});

prevBtn.addEventListener("click", () => {
   if (!(counter <= 0)) {
      counter--;
      sliderContainer.style.transition = "transform 0.4s ease-in-out";
      sliderContainer.style.transform = `translateX(${
         -sliderElemWidth * counter
      }px)`;
   } else {
      counter = sliderElems.length - 1;
      sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
   }
});

// slider - base

// nextBtn.addEventListener("click", () => {
//    if (!(counter >= sliderElems.length - 1)) {
//       counter++;
//       sliderContainer.style.transition = "transform 0.4s ease-in-out";
//       sliderContainer.style.transform = `translateX(${
//          -sliderElemWidth * counter
//       }px)`;
//    } else {
//       counter = 0;
//       sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
//    }
// });

// prevBtn.addEventListener("click", () => {
//    if (!(counter <= 0)) {
//       counter--;
//       sliderContainer.style.transition = "transform 0.4s ease-in-out";
//       sliderContainer.style.transform = `translateX(${
//          -sliderElemWidth * counter
//       }px)`;
//    } else {
//       counter = sliderElems.length - 1;
//       sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
//    }
// });

// slider - loop

// nextBtn.addEventListener("click", () => {
//    if (!(counter >= sliderElems.length - 1)) {
//       counter++;
//       sliderContainer.style.transition = "transform 0.4s ease-in-out";
//       sliderContainer.style.transform = `translateX(${
//          -sliderElemWidth * counter
//       }px)`;
//    } else {
//       counter = 0;
//       sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
//    }
// });

// prevBtn.addEventListener("click", () => {
//    if (!(counter <= 0)) {
//       counter--;
//       sliderContainer.style.transition = "transform 0.4s ease-in-out";
//       sliderContainer.style.transform = `translateX(${
//          -sliderElemWidth * counter
//       }px)`;
//    } else {
//       counter = sliderElems.length - 1;
//       sliderContainer.style.transform = `translateX(${-sliderElemWidth * counter}px)`;
//    }
// });

