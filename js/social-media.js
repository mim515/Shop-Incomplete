// Social media starts
// Social media starts
let selectField = document.getElementById("selectField");
let options = document.getElementsByClassName("options");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowDown = document.querySelector(".arrowDown");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowDown.classList.toggle("rotate");
};

for (let option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
  };
}
// Social media ends
// Social media ends

// progress  starts
// progress  starts
let number = document.getElementById("number");
let number2 = document.getElementById("number-2");
let number3 = document.getElementById("number-3");
let number4 = document.getElementById("number-4");
function runCounter(numberId, targetId) {
  let count = 0;
  let counter = setInterval(() => {
    if (count >= targetId) {
      clearInterval(counter);
    } else {
      count++;
      document.getElementById(numberId).textContent = count + "%";
    }
  }, 25);
}
runCounter("number", 65);
runCounter("number-2", 60);
runCounter("number-3", 80);
runCounter("number-4", 75);
// progress  ends
