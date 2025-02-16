let greetRef = document.querySelector(".greeting");

greetRef.innerHTML = "Hello World";

let countRef = document.querySelector(".count");
countRef.innerHTML = 0;

document.querySelector(".btn-increment").addEventListener("click", () => {
  countRef.innerHTML = Number(countRef.innerHTML) + 1;
});
document.querySelector(".btn-decrement").addEventListener("click", () => {
  countRef.innerHTML = Number(countRef.innerHTML) - 1;
});

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}
function subtraction(num1, num2) {
  let result = num1 - num2;
  return result;
}
function mul(num1, num2) {
  let result = num1 * num2;
  return result;
}
function divide(num1, num2) {
  let result = num1 / num2;
  return result;
}

let num1InputRef = document.querySelector("#num1");
let num2InputRef = document.querySelector("#num2");

document.querySelector(".btn-add").addEventListener("click", () => {
  let num1Value = Number(num1InputRef.value);
  let num2Value = Number(num2InputRef.value);

  let result = addition(num1Value, num2Value);

  alert(result);
});
document.querySelector(".btn-sub").addEventListener("click", () => {
  let num1Value = Number(num1InputRef.value);
  let num2Value = Number(num2InputRef.value);

  let result = subtraction(num1Value, num2Value);

  alert(result);
});
document.querySelector(".btn-mul").addEventListener("click", () => {
  let num1Value = Number(num1InputRef.value);
  let num2Value = Number(num2InputRef.value);

  let result = mul(num1Value, num2Value);

  alert(result);
});
document.querySelector(".btn-div").addEventListener("click", () => {
  let num1Value = Number(num1InputRef.value);
  let num2Value = Number(num2InputRef.value);

  let result = divide(num1Value, num2Value);

  alert(result);
});

// Let vs Var vs Const

// let

// let age

// Block Scoped

if (15 > 5) {
  const age = 30;
  console.log(age);
}

// Let Vs Var Vs Const

const animals = ["Cat", "Dog", "Leopard", "Crocodile"];

function addAnimalsToList() {
  const listRef = document.querySelector("#animals");

  for (let i = 0; i <= animals.length - 1; i++) {
    const liItem = document.createElement("li");
    liItem.innerHTML = animals[i];

    listRef.appendChild(liItem);
  }
}

addAnimalsToList();

document.querySelector(".btn-toggle").addEventListener("click", () => {
  const divRef = document.querySelector(".text");

  if (divRef.style.display == "none") {
    divRef.style.display = "block";
  } else {
    divRef.style.display = "none";
  }
});
