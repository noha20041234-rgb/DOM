const btnAffiche=document.getElementById("afficher");
const text=document.getElementById("message");
btnAffiche.addEventListener("click",function(){
    if(text.style.display==="none"){
        text.style.display = "block"
    }else{
        text.style.display = "none"
    }
})
