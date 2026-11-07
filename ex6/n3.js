const aliments = [
    "Pomme",
    "Banane",
    "Carotte",
    "Brocoli",
    "Fraise",
    "Épinard",
    "Riz",
    "Avoine",
    "Mangue",
    "Quinoa"
];


const parent=document.getElementById("parent");
const cards =document.createElement("div");
parent.appendChild(cards);
const inputrecherche=document.createElement("input");
inputrecherche.type="text";
inputrecherche.placeholder="rechercher";
parent.appendChild(inputrecherche);
aliments.forEach(function(element){
    const card=document.createElement("div");
    card.textContent=element;
    cards.appendChild(card);
    // console.log(card)
})
inputrecherche.addEventListener("input",function(){
    
     const valeur=inputrecherche.value.toLocaleLowerCase();
    const result=aliments.filter(function(element){

         return element.toLocaleLowerCase().includes(valeur);
    });
    cards.innerHTML="";
   result.forEach(function(delement){
    const card=document.createElement("div");
    card.textContent=delement;
    cards.appendChild(card);
   })
    
    
})