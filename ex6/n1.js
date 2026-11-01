const parent = document.createElement("div");
document.body.appendChild(parent);

const list = document.createElement("ul");
parent.appendChild(list);


const element = document.createElement("li");
element.textContent = "Apprendre le DOM";
list.appendChild(element);

const dElement = document.createElement("li");
dElement.textContent = "Apprendre JavaScript";
list.appendChild(dElement);


element.addEventListener("click", function() {
    element.classList.add("terminee");
});

dElement.addEventListener("click", function() {
    dElement.classList.add("terminee");
});

// Input
const input = document.createElement("input");
input.placeholder = "Nouvelle tâche";
parent.appendChild(input);

const btn = document.createElement("button");
btn.textContent = "Ajouter";
parent.appendChild(btn);


btn.addEventListener("click", function() {

    const li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
});
