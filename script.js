const billInput = document.getElementById("bill-input");
const tipButtons = document.querySelectorAll(".tip-button");
const peopleAmount = document.getElementById("people-amount");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.getElementById("tip-amoun");
const reset = document.querySelector(".reset");
document.getElementById("hide").style.display = "none";

let billValue = 0;
let buttonValue = 0;
let peopleValue = 0;
let display = 0;

billInput.addEventListener("input", (event) => {
  billValue = Number(event.target.value);
  calculation();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttonValue = parseInt(event.target.textContent);
    console.log(buttonValue);
    calculation();
  });
});

peopleAmount.addEventListener("input", (event) => {
  peopleValue = Number(event.target.value);
  console.log(peopleValue);
  calculation();
  if (peopleAmount.value == 0) {
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide").style.color = "#E17457";
    document.getElementById("people-amount").style.border = "1px solid #E17457";
  } else {
    document.getElementById("hide").style.display = "none";
  }
});

function calculation() {
  const tipResultValue = (billValue * (buttonValue / 100)) / peopleValue;
  const totalResultValue = tipResultValue + billValue / peopleValue;
  if (peopleValue != 0 && peopleValue > 0) {
    tipAmount.textContent = `$${tipResultValue.toFixed(2)}`;
    totalAmount.textContent = `$${totalResultValue.toFixed(2)}`;
  }
}

reset.addEventListener("click", () => {
  billInput.value = "";
  peopleAmount.value = "";
  billValue = 0;
  buttonValue = 0;
  peopleValue = 0;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
