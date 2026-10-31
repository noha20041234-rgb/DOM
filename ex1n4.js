const utilisateurs = [
    {
        nom: "Mohamed",
        email: "mohamed@gmail.com",
        role: "Developer"
    },
    {
        nom: "Sara",
        email: "sara@gmail.com",
        role: "Designer"
    },
    {
        nom: "Youssef",
        email: "youssef@gmail.com",
        role: "Student"
    },
    {
        nom: "Amine",
        email: "amine@gmail.com",
        role: "Manager"
    }
];
const parent = document.querySelector(".container");
const cards = parent.querySelectorAll(".card");
// const name = cards.querySelector(".card-title");
cards.forEach(function(card,index){
    
    const name=card.querySelector(".card-title");
    const email=card.querySelector(".card-email");
    const role=card.querySelector(".card-role");
    name.textContent =utilisateurs[index].nom;
    email.textContent=utilisateurs[index].email;
    role.textContent=utilisateurs[index].role;
    


})
