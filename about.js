let wrapper = document.getElementById("aboutWrapper");
let left = document.getElementById("leftSide");
let right = document.getElementById("rightSide");
let arrowTopper = document.getElementById("arrowUp");


window.addEventListener('scroll', () => {
  console.log(pageYOffset);
  const arrowTop = document.getElementById("arrowUp");
  if (pageYOffset > 50) {
    arrowTop.style.opacity = "1";
    arrowTop.style.transform = "rotate(-90deg)";
  } else {
    arrowTop.style.opacity = "0";
    arrowTop.style.transform = "rotate(180deg)";
  }
});

arrowTopper.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

left.addEventListener("mouseover", () => {
  wrapper.style.backgroundImage = "url('img/leftAbout.jpg')";
});

right.addEventListener("mouseover", () => {
  wrapper.style.backgroundImage = "url('img/rightAbout.jpg')";
});

left.addEventListener("mouseout", () => {
  wrapper.style.backgroundImage = "url('img/aboutStare.jpg')";
});

right.addEventListener("mouseout", () => {
  wrapper.style.backgroundImage = "url('img/aboutStare.jpg')";
});
