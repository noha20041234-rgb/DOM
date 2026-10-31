const compteur=document.getElementById("compteur");
const addBtn=document.getElementById("add");
let c=0;
addBtn.addEventListener("click", function(){
    c++;
    compteur.textContent= c ;
})