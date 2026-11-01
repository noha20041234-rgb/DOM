const tab =[
"JavaScript",
"Python",
"Rust",
"Go",
"TypeScript"
]
const liste = document.getElementById("list");

const title = document.createElement("h1");

title.innerHTML = "Langages de programmation";

liste.appendChild(title);


tab.forEach(function(Langages){
    const listElement=document.createElement("li");
    listElement.textContent = Langages;
    liste.appendChild(listElement);
})
