let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let svg = document.getElementById('svg')
let svg2 = document.getElementById('svg2')
const statForm = document.getElementById('statForm')
const mainForm = document.getElementById('mainForm')
let cut = document.getElementById('cut');
let blur = document.getElementById("blur");
let submit = document.getElementById("submit");

arrow1.addEventListener('click', () => {
    svg.style.display = "none";
    svg2.style.display = "none";
    arrow1.style.display = "none";
    arrow2.style.display = "block";
})

setTimeout(()=>{
    statForm.style.display = "flex";
    mainForm.style.display = "flex";
    blur.style.display = "block"

},2000)
 
arrow2.addEventListener("click", ()=>{
    svg.style.display = "block";
    svg2.style.display = "block";
    arrow1.style.display = "block";
    arrow2.style.display = "none";
})
if(statForm.style.display = "flex"){
    document.body.style.overflow = "hidden";
}

cut.addEventListener("click", () =>{
    statForm.style.display = "none"
    blur.style.display = "none"
    document.body.style.overflow = "visible";

});
submit.addEventListener("click", () =>{
    statForm.style.display = "none"
    blur.style.display = "none"
    document.body.style.overflow = "visible";

});


/* Code Snippet for sending data to db */

let nameVal2 = document.getElementById("name2");
let telVal2 = document.getElementById("tel2");
let emailVal2 = document.getElementById("email2");
let ageVal2 = document.getElementById("age2");
let countryVal2 = document.getElementById("country2");
let submitBtn2 = document.getElementById("submit2");
let head2 = document.getElementById("head2")

submitBtn2.addEventListener("click", function () {
  fetch("https://form-production-0430.up.railway.app", {
    method: "POST",
    body: JSON.stringify({
      name: nameVal2.value,
      email: emailVal2.value,
      tel: telVal2.value,
      age: ageVal2.value,
      country: countryVal2.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
submitBtn2.addEventListener('click', () =>{
    head2.innerHTML = "Submitted"
})
/* Code Snippet for sending data to db */

