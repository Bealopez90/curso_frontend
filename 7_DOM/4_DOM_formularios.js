function frstMayus(text){
    var first=text.charAt(0);
    var other=text.substring(1);
    return first + other;
}
function validate(){
    var inputname=document.getElementById("nombre");
    var name=inputname.value;
    validarInput(inputname,name);
    var inputfirname=document.getElementById("primer_apellido");
    var firname=inputfirname.value;
    validarInput(inputfirname,firname);
    var inputlasname=document.getElementById("segundo_apellido");
    var lasname=inputlasname.value;
    validarInput(inputlasname,lasname);

    /*if(name == ""){
        inputname.style.borderColor = "#F04040";

    }
    else{
        inputname.style.borderColor = "#FFFFFF";
    }

    if(firname == ""){
        inputfirname.style.borderColor = "#F04040";

    }
    else{
        inputfirname.style.borderColor = "#FFFFFF";
    }

    if(lasname == ""){
        inputlasname.style.borderColor = "#F04040";

    }
    else{
        inputlasname.style.borderColor = "#FFFFFF";
    }*/

    /*var arreti=document.getElementsByClassName("verify");
    for(var i=0;i<arreti.length;i++){
        if(arreti[i].value==""){
            arreti[i].style.borderColor="#F04040";
        }
        else{
            arreti[i].style.borderColor="#FFFFFF";
        }
    }*/
    function validarInput(a,b){
        if(b == ""){
            a.style.borderColor="#F04040";
        }
        else{
            a.style.borderColor="#FFFFFF";
        }
    }

}