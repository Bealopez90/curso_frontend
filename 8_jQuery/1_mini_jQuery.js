function elemPorId(id){
    return document.getElementById(id);
}

function cambiaAtribPorId(id, atrib, valor){

    elemPorId(id).setAttribute(atrib, valor);
    return true;
}

function adjuntarElementoPorId(id, etiqueta){
    var elem=document.createElement(etiqueta);
    var contEx=document.createTextNode("Texto prueba");//luego es prescindible
    elem.appendChild(contEx);
    elemPorId(id).appendChild(elem);
    return true;
}
//version por clase

function elemPorClase(clase){
    return document.getElementsByClassName(clase);
}

function cambiaElemPorClase(clase, atrib, valor){
    var arrEle=elemPorClase(clase);
    for(var i=0;i<arrEle.length;i++){
        arrEle[i].setAttribute(atrib, valor);
    }
}

function main(){
    elemPorId("div_form").style.backgroundColor="red";
}
function mainDos(){
    var siONo=cambiaAtribPorId("div_form", "style", "background-color: green");
    if(siONo==true){
        alert("BIEN");
    }
}
function mainTr(){
    var estaAnnad=adjuntarElementoPorId("div_form","p");
    if(estaAnnad==true){
        alert("BIEN");
    }
}