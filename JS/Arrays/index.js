// Event Listeners

// Ref
let btnRef = document.querySelector("#btn-clickme");
let resultDivRef = document.querySelector("#result");
let articleRef = document.querySelector("#article");

// Callback
//  They are nameless functions passed as a parameter of one function

btnRef.addEventListener("click", () => {
  resultDivRef.innerHTML = "processing...";
});


articleRef.addEventListener("mouseover",()=>{
    resultDivRef.innerHTML = "Finished";
})
