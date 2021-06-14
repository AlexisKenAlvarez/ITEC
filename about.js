let wrapper = document.getElementById("aboutWrapper");
let left = document.getElementById("leftSide");
let right = document.getElementById("rightSide");

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
