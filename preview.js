let valoClick = document.getElementById("valo_img");
let csClick = document.getElementById("cs_img");
let dotaClick = document.getElementById("dota_img");
let gtClick = document.getElementById("gt_img");
let mcClick = document.getElementById("mc_img");
let xIcon = document.getElementById("x_ico");
let overlayContainer = document.getElementById("overlay_container");
let imgDisplay = document.getElementById("overlay_displayer");
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

valoClick.addEventListener('click', () => {
  overlayContainer.style.display = "block";
  imgDisplay.style.backgroundImage = "url('img/valorant.jpg')";
});

csClick.addEventListener('click', () => {
  overlayContainer.style.display = "block";
  imgDisplay.style.backgroundImage = "url('img/csgo4.png')";
});

dotaClick.addEventListener('click', () => {
  overlayContainer.style.display = "block";
  imgDisplay.style.backgroundImage = "url('img/dota2.jpg')";
});

gtClick.addEventListener('click', () => {
  overlayContainer.style.display = "block";
  imgDisplay.style.backgroundImage = "url('img/growtopia3.jpg')";
});

mcClick.addEventListener('click', () => {
  overlayContainer.style.display = "block";
  imgDisplay.style.backgroundImage = "url('img/mineraft5.png')";
});

xIcon.addEventListener('click', () => {
  overlayContainer.style.display = "none";
  imgDisplay.style.backgroundImage = "";
});
