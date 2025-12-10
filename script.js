const button= document.getElementById("btn");
const lightElement= document.getElementById("light");
const wrapper= document.querySelector(".wrapper")
//console.log(wrapper)
//console.log(button)


//ho semplicemente cambiato la source dell'immagine lightElement
button.addEventListener("click", ()=>{ 
    lightElement.src="img/yellow_lamp.png"
    //cambio innerText di btn
    button.innerText="Spegni"
    //ho dato un div esterno a cui dare un background
    wrapper.style.backgroundColor="white"
})