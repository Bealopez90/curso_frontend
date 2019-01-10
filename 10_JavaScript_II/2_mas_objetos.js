var listaPersonas=new Array();

function addPersona() {
    var nuevaPersona=new Object();
    var dataNom=document.getElementById("inputNombre").value;
    var dataEdad=parseInt(document.getElementById("inputEdad").value);
    var dataEmail=document.getElementById("inputEmail").value;
    if(dataNom==""||dataEdad==""||dataEmail==""){
        alert("Fallo al guardar usuario. Faltan datos.")
    }
    else{
        nuevaPersona.nombre=dataNom;
        nuevaPersona.edad=dataEdad;
        nuevaPersona.email=dataEmail;

        listaPersonas[listaPersonas.length]=nuevaPersona;
    }

    //alert("persona creada:\n"+nuevaPersona.nombre+"\n"+nuevaPersona.edad+"\n"+nuevaPersona.email);
}
function viewPersonas(){
    var divListado=document.getElementById("listado");
    divListado.innerHTML="<h2>Lista de personas</h2>";
    for(var i=0;i<listaPersonas.length;i++){
        var unaPersona=listaPersonas[i];
        divListado.innerHTML+="<p><span>Nombre: "+unaPersona.nombre+", Edad: "+unaPersona.edad+", &lt;"+unaPersona.email+"&gt;</span></p>";
    }
}