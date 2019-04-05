/* jshint esversion:6 */
let number = 0;
const stamps = [
  "images/circles.svg",
  "images/heart.svg",
  "images/moon.svg",
  "images/rainbow.svg",
  "images/shooting-star.svg",
  "images/waves.svg"
];

const stampsTag = document.querySelector("div.stamps");

const addStamp = function(x, y) {
  // <img src="circles.svg">
  const img = document.createElement("img");
  img.setAttribute("src", stamps[number]);

  // remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px";
  img.style.top = y + "px";

  stampsTag.appendChild(img);

  number = number + 1;
  if (number > stamps.length - 1) {
    number = 0;
  }
};

document.addEventListener("click", function(event) {
  addStamp(event.pageX, event.pageY);
});