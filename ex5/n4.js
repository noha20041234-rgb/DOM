const pasword=document.getElementById("code");
pasword.addEventListener("input",function(){
    if(pasword.value.length < 8){
        pasword.classList.add("error");
        pasword.classList.remove("success");

    } else{
        pasword.classList.add("success");
        pasword.classList.remove("error")
    }
})