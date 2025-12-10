/*const button= document.getElementById("btn");
const lightElement= document.getElementById("lamp-on");
const wrapper= document.querySelector(".wrapper")
//console.log(wrapper)
//console.log(button)

/*PRIMO METODO
//ho semplicemente cambiato la source dell'immagine lightElement
button.addEventListener("click", ()=>{ 
    lightElement.src="img/yellow_lamp.png"
    //cambio innerText di btn
    button.innerText="Spegni"
    //ho dato un div esterno a cui dare un background
    wrapper.style.backgroundColor="white"
})*/

/*SECONDO
const secondButton= document.getElementById("btn-second");
const lightOn= document.querySelector(".lamp-on");
const lightOff= document.querySelector(".lamp-off")
const wrapperSecond= document.querySelector(".wrapper-second-try")

let isOn= false;
secondButton.addEventListener("click", ()=>{ 
    if(isOn===false){
    lightOn.style.display="block";
    lightOff.style.display="none"
    secondButton.innerText="Spegni"
    secondWrapper.style.backgroundColor="white"
    isOn=true;
    }else{
    lightOn.style.display="none";
    lightOff.style.display="block"
    secondButton.innerText="Accendi"
    secondWrapper.style.backgroundColor="black"
    isOn=false}
    });*/

const thirdBtn = document.getElementById("btn-3rd");
const thirdImg = document.getElementById("lamp-img");
const thirdWrapper = document.querySelector(".wrapper-3");

thirdBtn.addEventListener("click", () => {
  thirdWrapper.style.backgroundColor = "black";
  thirdWrapper.style.height = "100vh";
  thirdBtn.innerText = "Spegni";
  thirdImg.classList.remove("img-bg-lamp-off");
  thirdImg.classList.add("img-bg-lamp-on");
});
