function ejecutarJavascript() {
    var inputjs=document.getElementById("codJS");
    var veces=document.getElementById("inputVeces").value;

    eval("for(var i_95=0;i_95<"+veces+";i_95++){"+inputjs.value+"}");
}

function parseo(){
    var cadena=document.getElementById("esca").value;

    var yaPars=escape(cadena);
    document.getElementById("resul").innerHTML="<p>"+yaPars+"</p>";
}
function codificarASCII(){
    var inputjs=document.getElementById("esca");
    var enc=encodeURI(inputjs.value);
    var dec=decodeURI(enc);
    document.getElementById("resul").innerHTML="<p>"+enc+"<br/>"+dec+"</p>";
}