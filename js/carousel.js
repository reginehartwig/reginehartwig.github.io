const prevButton = document.getElementById("carousel-prev");
const nextButton = document.getElementById("carousel-next");
const carousel = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");

let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

nextButton.addEventListener("click", () => {
  index = (index + 1) % items.length;
  console.log(index);
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  console.log(index);
  updateCarousel();
});