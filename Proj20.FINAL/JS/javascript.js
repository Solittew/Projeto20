function RedirecionarSite(url){
    window.location.href = "4.Padaria.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite1(url){
    window.location.href = "2.Refeições.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite2(url){
    window.location.href = "2.Refeições.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite3(url){
    window.location.href = "4.Padaria.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite4(url){
    window.location.href = "2.Refeições.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite5(url){
    window.location.href = "4.Padaria.html"; /*redirecionar para outra pagina*/
}
function RedirecionarSite6(url){
    window.location.href = "5.Compras.html"; /*redirecionar para outra pagina*/
}
function Registrar(url){
    window.location.href = "Cad.html"; /*redirecionar para outra pagina*/
}

function AdicionarCarrinho(event) {
    event.preventDefault(); /*evita que o site recarregue*/
    var Items = $('[name^="CheckBoxGroup"]:checked'); /* Pega as checkboxes */
    var meuArray = []; /*cria uma lista*/
    var selectElement = document.getElementById("Padarias");
    var valorSelecionado = selectElement.value;


    function VerificarItems() { /* Função para verificar se algum item foi selecionado */
        valido = $('[name^="CheckBoxGroup"]:checked'); /*precisei pegar duas vezes o checkbox pois se eu deixasse 1 ele ia converter em booleano*/
        return valido.length > 0; /* Verifica a quantidade vai retornar valido ou verdadeiro ou falso */
    }

    var valido = VerificarItems(); /* Retorno do valido */

    if (valido) {
        if(valorSelecionado == 2){
            Items.each(function(index, element) { /*adiciona itens no array*/
            var nome = $(element).val();
            var preco = $(element).data('price');/* Pega o preço do atributo data-price */
            juros = (preco * 50)/100;
            preco = preco + juros; 
            meuArray.push(nome + ', Preço: ' + preco + "R$");
            frete = "20R$";
            $('#frete2').html("Frete: " + frete);
        })
        }
        else{
            Items.each(function(index, element) { /*adiciona itens no array*/
            var nome = $(element).val();
            var preco = $(element).data('price'); /* Pega o preço do atributo data-price */
            meuArray.push(nome + ', Preço: ' + preco + 'R$');
            frete = "15R$";
            $('#frete2').html("Frete: " + frete);
        });
        }
        console.log(meuArray); /*Para eu saber se esta entrando dados na lista */
    } else {
        alert("Coloque alguma coisa no carrinho pobre!"); /*Se valor não for valido*/
    }
    $('#Carrinho').html(meuArray.join('<br>')); /*Adiciona a div id Carrinho*/
}

function EnviarCV(event){
    event.preventDefault(); /*Evita que a pagina recarregue*/
    var Nome = $('#NOME').val(); /*Pega o nome*/
    var Email = $('#EMAIL').val(); /*Pega o Email*/

    function validarEmail(EMAIL) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*valida email*/
        return regex.test(Email); /*retorna email apos teste*/
    }
    if(Nome == ""){
        alert("Insira seu nome"); /*Se Nome estiver vazio*/
    }
    else{
        if(validarEmail(Email)){ /* Inicio ajax*/
            $.ajax({
                method: 'get',
                url: 'curriculo.php',
                data: {'NOME': Nome, 'EMAIL': Email},

                beforeSend: function () {
                    $('#Aguardo').html("Aguarde..."); 
                }
            })
            .done (function(RETORNOPHP){
                $('#Aguardo').html(RETORNOPHP);
            })

            .fail (function(){
                $('#Aguardo').html("Erro, tente novamente mais tarde");
            })
        }
        else{
            alert("EMAIL INVALIDO"); /*Se email não for valido*/
        }
    }
}
/*Feito por Kaic Lima*/
