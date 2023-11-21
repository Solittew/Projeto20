function RedirecionarSite(url){
    window.location.href = "marcos1.html";
}
function RedirecionarSite1(url){
    window.location.href = "marcos1.html";
}
function RedirecionarSite2(url){
    window.location.href = "marcos1.html";
}
function RedirecionarSite3(url){
    window.location.href = "marcos1.html";
}
function RedirecionarSite4(url){
    window.location.href = "marcos1.html";
}
function RedirecionarSite5(url){
    window.location.href = "marcos1.html";
}


function Entrar (){
    var ID = $('ID').serialize();
    var Senha = $('Senha').serialize();

    $.ajax({
        method: 'get',
        url: 'Funcionario.php',
        data: ID,Senha,

        beforeSend: function() {
            $('#Resposta').html("Por Favor, aguarde...");
        }
    })

    .done (function(ValorValido) {
        $('#Resposta').html(ValorValido)
    })

    .fail (function(ValorValido) {
        alert("Falha na comunicação.")
    })
}
