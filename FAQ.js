let arrowTopper = document.getElementById("arrowUp");

let faqFirstTitle = document.getElementById("ques1");
let faqOneAnswer = document.getElementById("firstQuest");
let firstDiv = document.getElementById("firstAnsDiv");

faqFirstTitle.addEventListener('click', () => {
  if (firstDiv.style.height == "" || firstDiv.style.height == "0px") {
    firstDiv.style.height = "250px";
    faqOneAnswer.style.fontSize = "25px";
    faqOneAnswer.style.padding = "10px";
    faqFirstTitle.style.animationName = "rgbb";
    faqFirstTitle.style.animationIterationCount = "infinite";
    faqFirstTitle.style.animationDuration = "3s";
    firstDiv.style.padding = "15px";
  } else {
    firstDiv.style.height = "0px";
    faqOneAnswer.style.fontSize = "0px";
    faqFirstTitle.style.animationName = "";
    faqFirstTitle.style.animationIterationCount = "";
    faqFirstTitle.style.animationDuration = "";
    firstDiv.style.padding = "";
  }
});

let faqSecondTitle = document.getElementById("ques2");
let faqTwoAnswer = document.getElementById("secondQuest");
let secondDiv = document.getElementById("secondAnsDiv");

faqSecondTitle.addEventListener('click', () => {
  if (secondDiv.style.height == "" || secondDiv.style.height == "0px") {
    secondDiv.style.height = "250px";
    faqTwoAnswer.style.fontSize = "25px";
    faqTwoAnswer.style.padding = "10px";
    faqSecondTitle.style.animationName = "rgbb";
    faqSecondTitle.style.animationIterationCount = "infinite";
    faqSecondTitle.style.animationDuration = "3s";
    secondDiv.style.padding = "15px";
  } else {
    secondDiv.style.height = "0px";
    faqTwoAnswer.style.fontSize = "0px";
    faqSecondTitle.style.animationName = "";
    faqSecondTitle.style.animationIterationCount = "";
    faqSecondTitle.style.animationDuration = "";
    secondDiv.style.padding = "";
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
