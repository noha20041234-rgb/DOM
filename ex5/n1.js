const parent=document.createElement("div");
document.body.appendChild(parent);
const inputText=document.createElement("input")
inputText.type="text";
inputText.placeholder="ecrivez quelque chose";
parent.appendChild(inputText);
const btnValide=document.createElement("button");
btnValide.innerHTML="valider";
parent.appendChild(btnValide);
const text=document.createElement("h3");
parent.appendChild(text);


inputText.addEventListener("input",function(value){
    let valeur=inputText.value;
    btnValide.addEventListener("click",function(){
        text.textContent= valeur
    })
})