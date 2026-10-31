const utilisateur = {
    nom: "Mohamed",
    email: "mohamed@gmail.com",
    role: "Developer"
};
const parent=document.querySelector("div");

const name=parent.querySelector(".card-title");
const email=parent.querySelector(".card-email");
const role=parent.querySelector(".card-role");
name.textContent = utilisateur.nom;
email.textContent=utilisateur.email;
role.textContent=utilisateur.role;