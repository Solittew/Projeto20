function Login() {
    var senha = $('#SENHA').val();
    var email = $('#EMAIL').val();

    function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function validarSenha(senha) {
        return senha !== "";
    }

    if(validarEmail(email) && validarSenha(senha)){
        $.ajax({
            method: 'get',
            url:'Login.php',
            data: { 'EMAIL': email, 'SENHA': senha }, // Corrigido aqui
    
            beforeSend: function () { // Corrigido aqui
                $('#Aguardo').html("Aguarde...");
            }
        })
    
        .done (function(RETORNOPHP){

            var Conta = JSON.parse(RETORNOPHP);

            if(Conta.EMAIL == email && Conta.SENHA == senha){
                $('#Aguardo').html("Login efetuado com sucesso!");
                window.location.href = "index.html"
            }
            else{
                alert("USuario incorreto");
            }




        })
    
        .fail(function(){
            $('#Aguardo').html("Erro tente novamente");
        })
    }
    else{
        alert("Email ou senha invalidos")
    }

    return false;
}
/*    
    function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarSenha(senha) {
        return senha !== "";
    }

    var email = $("#EMAIL").val();
    var senha = $("#SENHA").val();

    if (validarEmail(email) && validarSenha(senha)) {
        window.location.href = '5.Compras.html';
    } else {
        alert("Email ou senha inválidos");
    }
    
    
    

    */