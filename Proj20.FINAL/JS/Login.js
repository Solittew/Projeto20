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
                $('#Aguardo').html("Usuario incorreto");
            }
        })
    
        .fail(function(){
            $('#Aguardo').html("Erro tente novamente");
        })
    }
    else{
        $('#Aguardo').html("Insira um email ou senha");
    }

    return false;
}
/*fim login*/
/*Feito por Kaic Lima*/
