
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const images = [
  "denis.jpg",
  "denis2.jpg",
  "denis3.jpg",
  "denis4.jpg",
];

const imgElement = document.querySelector(".footer-content img");
let index = 0;

function changeImage() {
  imgElement.src = images[index];
  index++;

  if (index >= images.length) {
    index = 0;
  }
}

setInterval(changeImage, 5000);