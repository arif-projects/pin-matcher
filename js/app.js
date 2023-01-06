function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("displayPin").value = pin;
}

//key pad
document.getElementById("keypad").addEventListener("click", function (event) {
  const CurrentNumber = event.target.innerText;
  let CalculatorInput = document.getElementById("inputfield");
  if (isNaN(CurrentNumber)) {
    if (CurrentNumber == "C") {
      CalculatorInput.value = "";
    }
  } else {
    const PreviousNumber = CalculatorInput.value;
    const NewNumber = PreviousNumber + CurrentNumber;
    CalculatorInput.value = NewNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("displayPin").value;
  const typedNumber = document.getElementById("inputfield").value;
  const success = document.getElementById("success");
  const fail = document.getElementById("fail");
  if (pin == typedNumber) {
    success.style.display = "block";
    fail.style.display = "none";
  } else {
    fail.style.display = "block";
    success.style.display = "none";
  }
}
