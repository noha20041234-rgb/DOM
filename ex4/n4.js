const products = [
    {
        nom: "Laptop",
        price: 7500,
        photo: "laptop.png"
    },
    {
        nom: "Smartphone",
        price: 3500,
        photo: "smartphone.png"
    },
    {
        nom: "Casque",
        price: 450,
        photo: "casque.png"
    }

];
const parent=document.querySelector(".container");
products.forEach(function(produit){
    const cart=document.createElement("div");
    cart.classList.add("product-card");
    parent.appendChild(cart);
    const image=document.createElement("img");
     image.classList.add("product-image");
    image.src="image/"+ produit.photo;
    image.alt="laptop";
    cart.appendChild(image);
    const name=document.createElement("p");
     name.textContent = produit.nom;
    name.innerHTML=produit.nom;
    cart.appendChild(name);
    const prix=document.createElement("p");
    prix.classList.add("product-price");
    prix.innerHTML=produit.price + " DH"
    cart.appendChild(prix);


})