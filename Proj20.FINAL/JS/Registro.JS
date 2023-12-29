    function Registrar() {
        var EMAIL = $('#EMAIL').val(); /*entrada email*/
        var SENHA = $('#SENHA').val(); /*entrada senha*/
        var CEMAIL = $('#CEMAIL').val(); /*entrada Confirmar email*/
        var CSENHA = $('#CSENHA').val(); /*entrada confirmar senha*/

        function validarEmail(EMAIL) {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*valida email*/
            return regex.test(EMAIL); /*retorna email apos teste*/
        }
        function validarSenha(SENHA){ 
            return SENHA !== ""; /*testa a senha*/
        }
        if (validarEmail(EMAIL) && EMAIL === CEMAIL) /*condiçao1*/
        {
            if(validarSenha(SENHA) && SENHA === CSENHA) /*condição2*/
            {
                $.ajax({ /*Ajax inicio*/
                    method: 'get',
                    url: 'Registro.php',
                    data: { 'EMAIL': EMAIL, 'SENHA': SENHA }, 
                
                    beforesend: function(){
                        $('#Aguardo').html("Aguarde......");
                    }
                })

                .done (function(RETORNOPHP){
                    $('#Aguardo').html(RETORNOPHP);
                })
                
                .fail (function(){
                    $('#Aguardo').html("Erro, Tente novamente mais tarde");
                })
            }
            else
            {
                $('#Aguardo').html("Insira uma senha valida"); /*Se senha não for valida*/
            }
        } 
        else 
        {
            $('#Aguardo').html("Insira um email valido"); /*Se email não for valido*/
        }
    }
/*Feito por Kaic Lima*/