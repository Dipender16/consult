let arrow1 = document.getElementById('arrow1')
let arrow2 = document.getElementById('arrow2')
let svg = document.getElementById('svg')
let svg2 = document.getElementById('svg2')
const statForm = document.getElementById('statForm')
const mainForm = document.getElementById('mainForm')
let cut = document.getElementById('cut');
let blur = document.getElementById("blur")
let submit = document.getElementById("submit")

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
