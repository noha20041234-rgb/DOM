const parent = document.querySelector(".container");

const btnsParene = parent.querySelectorAll(".btn-message");

btnsParene.forEach(function(bouton) {

    bouton.addEventListener("click", function(event) {

        event.target.textContent = "C'est cliqué !";

    });

});