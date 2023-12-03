// Essas funcoes poluem o codigo...
// Foi substituida por href nos botoes. 

function RedirecionarSite(url){
    window.location.href = "4.Padaria.html";
}
function RedirecionarSite1(url){
    window.location.href = "2.Refeições.html";
}
function RedirecionarSite2(url){
    window.location.href = "2.Refeições.html";
}
function RedirecionarSite3(url){
    window.location.href = "4.Padaria.html";
}
function RedirecionarSite4(url){
    window.location.href = "2.Refeições.html";
}
function RedirecionarSite5(url){
    window.location.href = "4.Padaria.html";
}
function Registrar(url){
    window.location.href = "Cad.html";
}

function AdicionarCarrinho(event) {
    event.preventDefault(); /*evita que o site recarregue*/
    var Items = $('[name^="CheckBoxGroup"]:checked'); /* Pega as checkboxes */
    var meuArray = []; /*cria uma lista*/

    function VerificarItems() { /* Função para verificar se algum item foi selecionado */
        valido = $('[name^="CheckBoxGroup"]:checked'); /*precisei pegar duas vezes o checkbox pois se eu deixasse 1 ele ia converter em booleano*/
        return valido.length > 0; /* Verifica a quantidade vai retornar valido ou verdadeiro ou falso */
    }

    var valido = VerificarItems(); /* Retorno do valido */

    if (valido) {
        Items.each(function(index, element) { /*adiciona itens no array*/
            meuArray.push($(element).val());
        });

        console.log(meuArray);
    } else {
        alert("Coloque alguma coisa no carrinho pobre!");
    }
    $('#Carrinho').html(meuArray.join('' + "<br>"));
}