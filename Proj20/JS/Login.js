function Login() {
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
}
