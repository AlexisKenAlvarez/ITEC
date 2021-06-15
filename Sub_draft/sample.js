let arrowTopper = document.getElementById("arrowUp");


window.addEventListener('scroll', () => {
  console.log(pageYOffset);
  const arrowTop = document.getElementById("arrowUp");
  if (pageYOffset > 50) {
    arrowTop.style.opacity = "1";
    arrowTop.style.transform = "rotate(-90deg)";
    arrowTop.style.cursor = "pointer";
  } else {
    arrowTop.style.opacity = "0";
    arrowTop.style.transform = "rotate(180deg)";
    arrowTop.style.cursor = "";
  }
});
