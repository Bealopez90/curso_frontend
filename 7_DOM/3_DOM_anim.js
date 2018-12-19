var arret=document.getElementsByClassName("circulo");
for(var i=0;i<arret.length;i++){
    arret[i].style.webkitAnimationPlayState="paused";
}
var divmarco=document.getElementsByClassName("marco")[0];
var boton=divmarco.appendChild(document.createElement("input"));
boton.setAttribute("type","button");
boton.setAttribute("value","¡Pero anímate!");

function cuandoSePulsa(){
    for(var j=0;j<arret.length;j++){
        if(arret[j].style.webkitAnimationPlayState=="running"){
            arret[j].style.webkitAnimationPlayState="paused";
        }
        else if(arret[j].style.webkitAnimationPlayState="paused"){
            arret[j].style.webkitAnimationPlayState="running";
        }
    }
}
boton.setAttribute("onclick","cuandoSePulsa();");