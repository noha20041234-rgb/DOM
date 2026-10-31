const parent=document.querySelector(".container");
const text=parent.querySelector(".text-color");
const btnsColors=parent.querySelectorAll(".btn-message");
btnsColors.forEach(function(bouton){
    bouton.addEventListener("mouseenter",function(event){
        text.textContent ="Vous survolez la couleur " + event.target.textContent;

    })

})


