/* jshint esversion:6 */
const sections = document.querySelectorAll("section");
const bodyTag = document.querySelector("body");

const addMovement = function() {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + (window.innerHeight / 2);

  // lets find the middle of each section
  // (section, index) => {}
  sections.forEach((section, index) => {
    const topSection = section.offsetTop;
    const midSection = topSection + (section.offsetHeight / 2);

    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection;

    // pick the tags to parallax
    // picl all images inside of the section
    const image1 = section.querySelector("#image1");
    const image2 = section.querySelector("#image2");
    const image3 = section.querySelector("#image3");
    const contentTag = section.querySelector("div");

    // weight down this distance
    let rotation = distanceToSection / 100;
    let contentDist = -1 * distanceToSection / 2;

    // for all the even sections, rotate the other way
    // is the index divisible by two
    // is the index's remainder zero?
    // the modulo operator 5 % 2 = 1, 4 % 2 = 0
    if (index % 2 == 1) {
      rotation = rotation * -1;
    }

    let rotation2 = rotation * -2;
    let rotation3 = rotation * 4;
    // apply some parallax
    image1.style.transform = `rotate(${rotation}deg)`;
    image2.style.transform = `rotate(${rotation2}deg)`;
    image3.style.transform = `rotate(${rotation3}deg)`;

    contentTag.style.top = `${contentDist}px`;
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`;

    // check the background
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background");
      bodyTag.style.backgroundColor = dataBackground;
    }
  });
};

addMovement();

document.addEventListener("scroll", function() {
  addMovement();
});

window.addEventListener("resize", function() {
  addMovement();
});