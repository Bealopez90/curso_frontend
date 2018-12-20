function isEmpty(foo){
    if(foo.value==""){
        foo.style.borderColor="#FF4040";
        document.getElementById("info").innerHTML="Faltan los campos rodeados en rojo.";
        return true;
    }
    else{
        return false;
    }
}
function isTheSame(bar,baz){
    if(bar.value!=baz.value){
        bar.style.borderColor="#FFA500";
        baz.style.borderColor="#FFA500";
        document.getElementById("info").innerHTML="Estos campos no son iguales entre sí.";
        return true;
    }
    else{
        bar.style.borderColor="#008000";
        baz.style.borderColor="#008000";
        return false;
    }
}
function main(){
    var eml=document.getElementById("email");
    var emlvld=document.getElementById("email_rep");

    var pss=document.getElementById("password");
    var pssrep=document.getElementById("password_rep");

    if(isEmpty(eml)==false&&isEmpty(emlvld)==false&&isEmpty(pss)==false&&isEmpty(pssrep)==false&&isTheSame(eml,emlvld)==false&&isTheSame(pss,pssrep)==false){
        document.getElementById("info").innerHTML="";
        document.getElementById("mensaje").value="Registrado con éxito.";
        document.getElementsByName("table")[0].style.backgroundColor="#B1FB17";
    }
}