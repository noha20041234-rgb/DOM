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
for(let i=0 ; i < cards.length ; i++){
    const card = cards[i];
    const name=card.querySelector(".card-title");
    const email=card.querySelector(".card-email");
    const role=card.querySelector(".card-role");
    name.textContent =utilisateurs[i].nom;
    email.textContent=utilisateurs[i].email;
    role.textContent=utilisateurs[i].role;
    


}
