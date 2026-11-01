const  nameUser = document.getElementById("nom");
const email=document.getElementById("emil");
const btnValide=document.getElementById("validation");
const form=document.getElementById("forma");





form.addEventListener("submit",function(event){
    event.preventDefault();
    const name =nameUser.value;
    const Email = email.value;
    const user={
        userName: name,
        email : Email,
    }
    console.log(user)
})