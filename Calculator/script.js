const buttonValue = document.querySelectorAll("button");
const screenValue = document.querySelector("#number");
let isOperator;
let isdot;
let isNumber;
screenValue.value = "0";
function toggleHistory() {
  var x = document.getElementById("history");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("toggle").innerHTML = "Show History";
  } else {
    x.style.display = "block";
    document.getElementById("toggle").innerHTML = "Hide History";
  }
}
function clearHistory() {
  document.getElementById("history").value="";
}
function refreshCalculator() {
  isOperator = true;
  isdot = false;
  isNumber = true;
  screenValue.value = "0";
}
refreshCalculator();
buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "C") {
      refreshCalculator();
    } else if (buttonText === "." && !isdot) {
      screenValue.value += buttonText;
      isdot = true;
    } else if (buttonText === "+" && isOperator) {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      } else {
        screenValue.value = buttonText;
      }
      isOperator = false;
      isNumber = true;
      isdot = false;
    } else if (buttonText === "-" && isOperator) {
      if (screenValue.value != "0") {
        screenValue.value += buttonText;
      } else {
        screenValue.value = buttonText;
      }
      isOperator = false;
      isNumber = true;
      isdot = false;
    } else if (buttonText === "x" && isOperator) {
      if (screenValue.value != "0") {
        screenValue.value += "*";
        isOperator = false;
        isNumber = true;
        isdot = false;
      }
    } else if (buttonText === "÷" && isOperator) {
      if (screenValue.value != "0") {
        screenValue.value += "÷";
        isOperator = false;
        isNumber = true;
        isdot = false;
      }
    }  else if (buttonText === "<" ) {
      if (screenValue.value != "0") {
        let x = screenValue.value;
        x = x.slice(0, -1);
        screenValue.value = x;
        isOperator = true;
        isNumber = true;
        isdot = false;
      }
    } else if (buttonText >= "0" && buttonText <= 9 && isNumber) {
      if (buttonText === "0" && screenValue.value === "0") {
        isNumber = true;
      } else if (screenValue.value === "0") {
        screenValue.value = buttonText;
      } else {
        screenValue.value += buttonText;
      }
      isOperator = true;
    } else if (buttonText >= "0" && buttonText <= 9 && !isNumber) {
        isNumber = true;
        screenValue.value = buttonText;
      isOperator = true;
    } else if (buttonText === "=") {
      let x = screenValue.value;
      screenValue.value = eval(screenValue.value.replaceAll("÷","/"));      
      document.getElementById("history").value += "\n"+x+"\n"+screenValue.value+"\n";
      isNumber = false;
    }
  });
});