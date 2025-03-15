function calculateAge() {
  const inputRef = document.querySelector("#dob");
  const userDOB = inputRef.value;

  const currentYear = 2025;

  const userAge = currentYear - userDOB;
  const resultDivRef = document.querySelector(".result");
  resultDivRef.innerHTML="You are " + userAge + " Old"
}

// DOB to AGe
// Age to DOB

// City to Weather
