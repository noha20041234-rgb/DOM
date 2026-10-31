
const utilisateur = {
    nom: "Mohamed",
    email: "mohamed@gmail.com",
    role: "Developer"
};

const name=document.getElementById("name");
const email=document.getElementById("email");
const role=document.getElementById("role");
name.textContent = utilisateur.nom;
email.textContent=utilisateur.email;
role.textContent=utilisateur.role;