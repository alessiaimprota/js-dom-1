const button= document.getElementById("btn");
const lightElement= document.getElementById("light");
//console.log(button)


//ho semplicemente cambiato la source dell'immagine lightElement
button.addEventListener("click", ()=>{ 
    lightElement.src="img/yellow_lamp.png"
    button.innerText="Spegni"
})