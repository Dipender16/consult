/* Code Snippet for sending data to db */

let nameVal = document.getElementById("name");
let telVal = document.getElementById("tel");
let emailVal = document.getElementById("email");
let ageVal = document.getElementById("age");
let countryVal = document.getElementById("country");
let submitBtn = document.getElementById("submit");
let head = document.getElementById('head')

submitBtn.addEventListener("click", function () {
  fetch("https://form-production-0430.up.railway.app", {
    method: "POST",
    body: JSON.stringify({
      name: nameVal.value,
      email: emailVal.value,
      tel: telVal.value,
      age: ageVal.value,
      country: countryVal.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
submitBtn.addEventListener('click', () =>{
    head.innerHTML = "Submitted"
})
/* Code Snippet for sending data to db */
