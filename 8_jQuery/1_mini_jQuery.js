var listaPersonas;
jQuery(document).ready(function(){
    listaPersonas=new Array();
    jQuery(".form-control").css("border-color", "red");
});

function addPersona() {
    var nuevaPersona=new Object();
    var dataNom=$("#inputNombre").val();
    var dataApell=$("#inputApell").val();
    var dataEdad=parseInt($("#inputEdad").val());
    var dataEmail=$("#inputEmail").val();
    if(dataNom==""||dataApell==""||dataEdad==""||dataEmail==""){
        alert("Fallo al guardar usuario. Faltan datos.");
    }
    else{
        nuevaPersona.nombre=dataNom;
        nuevaPersona.apellido=dataApell;
        nuevaPersona.edad=dataEdad;
        nuevaPersona.email=dataEmail;

        listaPersonas[listaPersonas.length]=nuevaPersona;
    }

    //alert("persona creada:\n"+nuevaPersona.nombre+"\n"+nuevaPersona.edad+"\n"+nuevaPersona.email);
}
function viewPersonas(){
    $("#listado").html("<h2>Lista de personas</h2>");
    for(var i=0;i<listaPersonas.length;i++){
        var unaPersona=listaPersonas[i];
        $("#listado").html($("#listado").html()+"<p><span>Nombre: "+unaPersona.nombre+", Apellidos: "+unaPersona.apellido+", Edad: "+unaPersona.edad+", &lt;"+unaPersona.email+"&gt;</span></p>");
    }
}