function sayHello() {
  alert("Hi Iam alive");
}

function saveData() {
  let inputRef = document.querySelector("#name");
  let name = inputRef.value;

  let passwordRef = document.querySelector("#password");
  let password = passwordRef.value;

  console.log(name);
  console.log(password);

  const statusRef = document.querySelector("#status");
  console.log(statusRef);

  //   Writing to HTML Tag a data from js
  statusRef.innerHTML = "Processing...";
}

let ref = document.querySelector(".name_container");
console.log(ref.innerHTML);

