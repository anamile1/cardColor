const inputColor = document.getElementById("input-color");
let card = document.getElementById("card");
let card2 = document.getElementById("card2");
let ancla = document.getElementById("ancla");
let icon = document.getElementById("icon");
let cont = 1;

inputColor.addEventListener("change",capturarColor);

function capturarColor(){
    card.style.background = inputColor.value;
    ancla.style.background = inputColor.value;
    icon.style.background = inputColor.value;
    console.log(inputColor.value);
}

const btn = document.getElementById("btn2");

btn.addEventListener("click",cambiarBorde);

function cambiarBorde(){
    cont+= 3;
    console.log(cont);
    console.log(typeof borde)

    card.style.borderRadius = cont+"px";
    card2.style.borderRadius = cont+"px";
}

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click",cambiarBordeMenos);

function cambiarBordeMenos(){
    cont-= 3;
    console.log(cont);

    card.style.borderRadius = cont+"px";
    card2.style.borderRadius = cont+"px";
}


