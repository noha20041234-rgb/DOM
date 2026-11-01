const parent = document.createElement("div");
document.body.appendChild(parent);

const inputText = document.createElement("input");
inputText.type = "text";
inputText.placeholder = "Tapez quelque chose";
parent.appendChild(inputText);

const text = document.createElement("p");
text.textContent = "Aperçu : ";
parent.appendChild(text);

inputText.addEventListener("input", function() {
    preview.textContent = "Aperçu : " + inputText.value;
});