let valo = document.getElementById("valo_hide");
let container = document.getElementById("img_prev");
let mine = document.getElementById("mine_hide");
let dota = document.getElementById("dota_hide");
let cs = document.getElementById("cs_hide");
let gt = document.getElementById("gt_hide");
let previeW = document.getElementById("preview_button");
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


function entersite() {
  location.href = "xml_table.html";
}

valo.addEventListener('mouseover', () => {
  container.style.backgroundImage = "url('img/valorant.jpg')";
  container.style.backgroundSize = "contain";
  container.style.animation = "shake 0.5s";
  container.style.animationIterationCount = "infinite";
});

valo.addEventListener('mouseout', () => {
  container.style.backgroundImage = "";
  container.style.backgroundSize = "";
  container.style.animation = "";
});

mine.addEventListener('mouseover', () => {
  container.style.backgroundImage = "url('img/mineraft5.png')";
  container.style.backgroundSize = "contain";
  container.style.animation = "shake 0.5s";
  container.style.animationIterationCount = "infinite";
});

mine.addEventListener('mouseout', () => {
  container.style.backgroundImage = "";
  container.style.backgroundSize = "contain";
  container.style.animation = "";
  container.style.animationIterationCount = "infinite";
});

dota.addEventListener('mouseover', () => {
  container.style.backgroundImage = "url('img/dota2.jpg')";
  container.style.backgroundSize = "contain";
  container.style.animation = "shake 0.5s";
  container.style.animationIterationCount = "infinite";
});

dota.addEventListener('mouseout', () => {
  container.style.backgroundImage = "";
  container.style.backgroundSize = "contain";
  container.style.animation = "";
  container.style.animationIterationCount = "infinite";
});

cs.addEventListener('mouseover', () => {
  container.style.backgroundImage = "url('img/csgo4.png')";
  container.style.backgroundSize = "contain";
  container.style.animation = "shake 0.5s";
  container.style.animationIterationCount = "infinite";
});

cs.addEventListener('mouseout', () => {
  container.style.backgroundImage = "";
  container.style.backgroundSize = "contain";
  container.style.animation = "";
  container.style.animationIterationCount = "infinite";
});

gt.addEventListener('mouseover', () => {
  container.style.backgroundImage = "url('img/growtopia3.jpg')";
  container.style.backgroundSize = "contain";
  container.style.animation = "shake 0.5s";
  container.style.animationIterationCount = "infinite";
});

gt.addEventListener('mouseout', () => {
  container.style.backgroundImage = "";
  container.style.backgroundSize = "contain";
  container.style.animation = "";
  container.style.animationIterationCount = "infinite";
});
