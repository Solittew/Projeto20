function Login() {
    function validaremail(email){
        var email = $("#EMAIL").val();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }
    function validarsenha(senha){
        var senha = $("#SENHA").val();
        var senhavalida = false;

        if(senha == ""){
            return senhavalida= false;
        }
        else{
            return senhavalida = true;
        }
    }
    var email = $("#EMAIL").val();
    var senha = $("#SENHA").val();

    if(validaremail(email)){
        alert("Email valido");
    }
    else{
        alert("Email invalido");
    }
    if(validarsenha(senhavalida = true)){
        alert("Senha valida")
    }
    else{
        alert("Senha invalida")
    }

}