function padaria() {

      
    if (document.getElementById("paofranc").checked)
    {
        document.write("PÃO FRANCES R$: " + document.getElementById("paofranc").value);
    }
    else if (document.getElementById("paofor").checked)
    {
        document.write("PÃO DE FORMA R$: " + document.getElementById("paofor").value);
    }
    else if (document.getElementById("paonachapa").checked)
    {
        document.write("PÃO NA CHAPA R$: " + document.getElementById("paonachapa").value);
    }
    else if (document.getElementById("paocommanteiga").checked)
    {
        document.write("PÃO COM MANTEIGA R$: " + document.getElementById("paocommanteiga").value);
    }
    else if (document.getElementById("queijomuss").checked)
    {
        document.write("QUEIJO MUSSARELA R$: " + document.getElementById("queijomuss").value);
    }
    else if (document.getElementById("queijopr").checked)
    {
        document.write("QUEIJO PRATO R$: " + document.getElementById("queijopr").value);
    }
    else if (document.getElementById("presunto").checked)
    {
        document.write("Presunto R$: " + document.getElementById("presunto").value);
    }
    else if (document.getElementById("cheddar").checked)
    {
        document.write("Cheddar R$: " + document.getElementById("cheddar").value);
    }
    else if (document.getElementById("peitoperu").checked)
    {
        document.write("Peito de peru R$: " + document.getElementById("peitoperu").value);
    }
    else if (document.getElementById("mortadela").checked)
    {
        document.write("Mortadela R$: " + document.getElementById("mortadela").value);
    }
    else if (document.getElementById("bolochoc").checked)
    {
        document.write("Bolo de chocolate R$: " + document.getElementById("bolochoc").value);
    }
    else if (document.getElementById("bololar").checked)
    {
        document.write("Bolo de Laranja R$: " + document.getElementById("bololar").value);
    }
    else if (document.getElementById("tortachoc").checked)
    {
        document.write("Torta Chocolate R$: " + document.getElementById("tortachoc").value);
    }
    else if (document.getElementById("brigadeiro").checked)
    {
        document.write("Brigadeiro R$: " + document.getElementById("brigadeiro").value);
    }
    else if (document.getElementById("beijinho").checked)
    {
        document.write("Beijinho R$:" + document.getElementById("beijinho").value);
    }

    else if (document.getElementById("cupcake").checked)
    {
        document.write("Cupcake R$: " + document.getElementById("cupcake").value);
    }

    else if (document.getElementById("bolqueijo").checked)
    {
        document.write("Bolinho de queijo R$: " + document.getElementById("bolqueijo").value);
    }
    else if (document.getElementById("coxinha").checked)
    {
        document.write("Coxinha R$: " + document.getElementById("coxinha").value);
    }
    else if (document.getElementById("empada").checked)
    {
        document.write("Empada R$:" + document.getElementById("empada").value);
    }
    else if (document.getElementById("esfirra").checked)
    {
        document.write("Esfirra R$:" + document.getElementById("esfirra").value);
    }

    else 
    {
        alert("Escolha um")
    }


}

function selecao(sel)
{

    document.getElementById("paofranc").checked = false;
    document.getElementById("paofor").checked = false;
    document.getElementById("paonachapa").checked = false;
    document.getElementById("paocommanteiga").checked = false;
    document.getElementById("queijomuss").checked = false;
    document.getElementById("queijopr").checked = false;
    document.getElementById("presunto").checked = false;
    document.getElementById("cheddar").checked = false;
    document.getElementById("peitoperu").checked = false;
    document.getElementById("mortadela").checked = false;
    document.getElementById("bolochoc").checked = false;
    document.getElementById("bololar").checked = false;
    document.getElementById("tortachoc").checked = false;
    document.getElementById("brigadeiro").checked = false;
    document.getElementById("beijinho").checked = false;
    document.getElementById("cupcake").checked = false;
    document.getElementById("bolqueijo").checked = false;
    document.getElementById("coxinha").checked = false;
    document.getElementById("empada").checked = false;
    document.getElementById("esfirra").checked = false;
    
    document.getElementById(sel).checked = true;
}
      