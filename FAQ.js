let arrowTopper = document.getElementById("arrowUp");

let faqFirstTitle = document.getElementById("ques1");
let faqOneAnswer = document.getElementById("firstQuest");
let firstDiv = document.getElementById("firstAnsDiv");
let toggleContainer1 = document.getElementById("toggleOne");

let toggleContainer2 = document.getElementById("toggleTwo");

let faqSecondTitle = document.getElementById("ques2");
let faqTwoAnswer = document.getElementById("secondQuest");
let secondDiv = document.getElementById("secondAnsDiv");


// FAQ FUNCTION FOR DESKTOP
function faqDesktop() {
  if (firstDiv.style.minHeight == "" || firstDiv.style.minHeight == "0px") {
    firstDiv.style.minHeight = "300px";
    faqOneAnswer.style.fontSize = "23px";
    faqOneAnswer.style.padding = "10px";
    faqFirstTitle.style.animationName = "rgbb";
    faqFirstTitle.style.animationIterationCount = "infinite";
    faqFirstTitle.style.animationDuration = "3s";
    firstDiv.style.padding = "15px";
    toggleContainer1.style.transform = "rotate(-180deg)";
  } else {
    firstDiv.style.minHeight = "0px";
    faqOneAnswer.style.fontSize = "0px";
    faqFirstTitle.style.animationName = "";
    faqFirstTitle.style.animationIterationCount = "";
    faqFirstTitle.style.animationDuration = "";
    firstDiv.style.padding = "";
    toggleContainer1.style.transform = "rotate(0deg)";
  }
}

// FAQ FUNCTION FOR PHONE
function faqPhone() {
  if (firstDiv.style.minHeight == "" || firstDiv.style.minHeight == "0px") {
    firstDiv.style.minHeight = "330px";
    faqOneAnswer.style.fontSize = "15px";
    faqOneAnswer.style.padding = "10px";
    faqFirstTitle.style.animationName = "rgbb";
    faqFirstTitle.style.animationIterationCount = "infinite";
    faqFirstTitle.style.animationDuration = "3s";
    firstDiv.style.padding = "15px";
    toggleContainer1.style.transform = "rotate(-180deg)";
  } else {
    firstDiv.style.minHeight = "0px";
    faqOneAnswer.style.fontSize = "0px";
    faqFirstTitle.style.animationName = "";
    faqFirstTitle.style.animationIterationCount = "";
    faqFirstTitle.style.animationDuration = "";
    firstDiv.style.padding = "";
    toggleContainer1.style.transform = "rotate(0deg)";
  }
}

// FAQ FUNCTION FOR DESKTOP
function faqDesktop_2() {
  if (secondDiv.style.minHeight == "" || secondDiv.style.minHeight == "0px") {
    secondDiv.style.minHeight = "150px";
    faqTwoAnswer.style.fontSize = "20px";
    faqTwoAnswer.style.padding = "10px";
    faqSecondTitle.style.animationName = "rgbb";
    faqSecondTitle.style.animationIterationCount = "infinite";
    faqSecondTitle.style.animationDuration = "3s";
    secondDiv.style.padding = "15px";
    toggleContainer2.style.transform = "rotate(-180deg)";
  } else {
    secondDiv.style.minHeight = "0px";
    faqTwoAnswer.style.fontSize = "0px";
    faqSecondTitle.style.animationName = "";
    faqSecondTitle.style.animationIterationCount = "";
    faqSecondTitle.style.animationDuration = "";
    secondDiv.style.padding = "";
    toggleContainer2.style.transform = "rotate(0deg)";
  }
}

function faqPhone_2() {
  if (secondDiv.style.minHeight == "" || secondDiv.style.minHeight == "0px") {
    secondDiv.style.minHeight = "150px";
    faqTwoAnswer.style.fontSize = "15px";
    faqTwoAnswer.style.padding = "10px";
    faqSecondTitle.style.animationName = "rgbb";
    faqSecondTitle.style.animationIterationCount = "infinite";
    faqSecondTitle.style.animationDuration = "3s";
    secondDiv.style.padding = "15px";
    toggleContainer2.style.transform = "rotate(-180deg)";
  } else {
    secondDiv.style.minHeight = "0px";
    faqTwoAnswer.style.fontSize = "0px";
    faqSecondTitle.style.animationName = "";
    faqSecondTitle.style.animationIterationCount = "";
    faqSecondTitle.style.animationDuration = "";
    secondDiv.style.padding = "";
    toggleContainer2.style.transform = "rotate(0deg)";
  }
}

faqFirstTitle.addEventListener('click', faqDesktop, true);
faqSecondTitle.addEventListener('click', faqDesktop_2, true);



const navSlide = () => {
  const burger = document.getElementById("burgerButton");
  const navList = document.getElementById("navList");

  burger.addEventListener('click', () => {
    navList.classList.toggle('nav_list-active');
  });
};

navSlide();

// =============================== MEDIA QUERY ===============================

function myMedia(x) {
  if (x.matches) {
    faqFirstTitle.removeEventListener('click', faqDesktop, true);
    faqFirstTitle.addEventListener('click', faqPhone, true);
    faqSecondTitle.removeEventListener('click', faqDesktop_2, true);
    faqSecondTitle.addEventListener('click', faqPhone_2, true);
  }
}

var x = window.matchMedia("screen and (max-width: 500px)");
myMedia(x);
x.addListener(myMedia);





























// SCROLL TOP BUTTON

window.addEventListener('scroll', () => {
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

arrowTopper.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
