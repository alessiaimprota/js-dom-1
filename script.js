/*const button= document.getElementById("btn");
const lightElement= document.getElementById("lamp-on");
const wrapper= document.querySelector(".wrapper")
//console.log(wrapper)
//console.log(button)

/*
//ho semplicemente cambiato la source dell'immagine lightElement
button.addEventListener("click", ()=>{ 
    lightElement.src="img/yellow_lamp.png"
    //cambio innerText di btn
    button.innerText="Spegni"
    //ho dato un div esterno a cui dare un background
    wrapper.style.backgroundColor="white"
})*/


const button= document.getElementById("btn");
const lightOn= document.querySelector(".lamp-on");
const lightOff= document.querySelector(".lamp-off")
const wrapper= document.querySelector(".wrapper-second-try")

button.addEventListener("click", ()=>{ 
    lightOn.style.display="block";
    lightOff.style.display="none"
    button.innerText="Spegni"
    wrapper.style.backgroundColor="white"
console.log("cliccato")})