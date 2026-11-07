
const tab=[
    "Pratiquer les événements",
    "Apprendre le DOM"
]







const list=document.getElementById("list");
// 
tab.forEach(function(item){
    const element=document.createElement("li");
    element.textContent=item;
    list.appendChild(element);

})


const inputajou=document.createElement("input");
inputajou.placeholder="ajouter element";
inputajou.type="text";
document.body.appendChild(inputajou);
 const btnajou=document.createElement("button");
 btnajou.innerHTML="ajouter";
 document.body.appendChild(btnajou);

 btnajou.addEventListener("click",function(){

    if(inputajou.value===""){
        return;
    }

    if(tab.includes(inputajou.value)){
        return;

    }
    const delement=document.createElement("li");
    delement.textContent=inputajou.value;
    list.appendChild(delement);
    tab.push(inputajou.value);

 })
 list.addEventListener("click",function(event){
    const lem =event.target.closest('li')
    if(lem){
        lem.remove();
    }
 })
 
