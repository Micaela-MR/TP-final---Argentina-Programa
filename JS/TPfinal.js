//Validacion de datos de email
$(document).ready(function(){
    $("#submit").click(function(){
        let email = $('#email').val();
        if (!esValido(email)) {
            alert("Email no válido")
        }
    });
});

function esValido (email){
    let patronAValidar = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    return patronAValidar.test(email);
} //funciona 