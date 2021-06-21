let arrowTopper = document.getElementById("arrowUp");

let faqFirstTitle = document.getElementById("ques1");
let faqOneAnswer = document.getElementById("firstQuest");
let firstDiv = document.getElementById("firstAnsDiv");
let toggleContainer1 = document.getElementById("toggleOne");
let horiLine1 = document.getElementById("horizontalOne");

let toggleContainer2 = document.getElementById("toggleTwo");
let horiLine2 = document.getElementById("horizontalTwo");

faqFirstTitle.addEventListener('click', () => {
  if (firstDiv.style.minHeight == "" || firstDiv.style.minHeight == "0px") {
    firstDiv.style.minHeight = "330px";
    faqOneAnswer.style.fontSize = "25px";
    faqOneAnswer.style.padding = "10px";
    faqFirstTitle.style.animationName = "rgbb";
    faqFirstTitle.style.animationIterationCount = "infinite";
    faqFirstTitle.style.animationDuration = "3s";
    firstDiv.style.padding = "15px";
    toggleContainer1.style.transform = "rotate(90deg)";
    horiLine1.style.opacity = "0";
  } else {
    firstDiv.style.minHeight = "0px";
    faqOneAnswer.style.fontSize = "0px";
    faqFirstTitle.style.animationName = "";
    faqFirstTitle.style.animationIterationCount = "";
    faqFirstTitle.style.animationDuration = "";
    firstDiv.style.padding = "";
    toggleContainer1.style.transform = "rotate(0deg)";
    horiLine1.style.opacity = "1";
  }
});

let faqSecondTitle = document.getElementById("ques2");
let faqTwoAnswer = document.getElementById("secondQuest");
let secondDiv = document.getElementById("secondAnsDiv");

faqSecondTitle.addEventListener('click', () => {
  if (secondDiv.style.minHeight == "" || secondDiv.style.minHeight == "0px") {
    secondDiv.style.minHeight = "150px";
    faqTwoAnswer.style.fontSize = "25px";
    faqTwoAnswer.style.padding = "10px";
    faqSecondTitle.style.animationName = "rgbb";
    faqSecondTitle.style.animationIterationCount = "infinite";
    faqSecondTitle.style.animationDuration = "3s";
    secondDiv.style.padding = "15px";
    toggleContainer2.style.transform = "rotate(90deg)";
    horiLine2.style.opacity = "0";
  } else {
    secondDiv.style.minHeight = "0px";
    faqTwoAnswer.style.fontSize = "0px";
    faqSecondTitle.style.animationName = "";
    faqSecondTitle.style.animationIterationCount = "";
    faqSecondTitle.style.animationDuration = "";
    secondDiv.style.padding = "";
    toggleContainer2.style.transform = "rotate(0deg)";
    horiLine2.style.opacity = "1";
  }
});




























// SCROLL TOP BUTTON

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

arrowTopper.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
