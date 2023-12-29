function refeicoes() {

    var FiléFrango;
    var ContraFilé;
    var FiléMignon;
    var Salmão;

    var FPeixe;
    var Feijoada;
    var Strogonof;
    var CostelaS;
    var PicanhaAss;
    var Churrasco;

    var ESPAGUETE;
    var NHOQUE;
    var PANQUECAS;

    var CARNE;
    var QUEIJO;
    var PIZZA;
    var PALMITO;

    var ARROZ; 
    var BATATAA;
    var FAROFA;
    var FEIJÃO;
    var BATATAF;
    var POLENTA;
   

    FiléFrango = document.getElementById("FiléFrango").value;
    ContraFilé = document.getElementById("ContraFilé").value;
    FiléMignon = document.getElementById("FiléMignon").value;
    Salmão = document.getElementById("Salmão").value;

    FPeixe = document.getElementById("FPeixe").value;
    Feijoada = document.getElementById("Feijoada").value;
    Strogonof = document.getElementById("Strogonof").value;
    CostelaS = document.getElementById("CostelaS").value;
    PicanhaAss = document.getElementById("PicanhaAss").value;
    Churrasco = document.getElementById("Churrasco").value;


    ESPAGUETE = document.getElementById("ESPAGUETE").value;
    NHOQUE = document.getElementById("NHOQUE").value;
    PANQUECAS = document.getElementById("PANQUECAS").value;

    CARNE = document.getElementById("CARNE").value;
    QUEIJO = document.getElementById("QUEIJO").value;
    PIZZA = document.getElementById("PIZZA").value;
    PALMITO = document.getElementById("PALMITO").value;

    ARROZ = document.getElementById("ARROZ").value;
    BATATAA = document.getElementById("BATATAA").value;
    FAROFA = document.getElementById("FAROFA").value;
    FEIJÃO = document.getElementById("FEIJÃO").value;
    BATATAF = document.getElementById("BATATAF").value;
    POLENTA = document.getElementById("POLENTA").value;

    if (document.getElementById("FiléFrango").checked) 
            {
                document.write("FiléFrango" + FiléFrango);
            }
            
                else if (document.getElementById("ContraFilé").checked) 
                {
                    document.write(" ContraFilé R$:" + ContraFilé);
                }    
                else if (document.getElementById("FiléMignon").checked) 
                {
                    document.write(" FiléMignon R$:" + FiléMignon);
                } 
                else if (document.getElementById("Salmão").checked) 
                {
                    document.write(" Salmão R$:" + Salmão);
                } 
                else if (document.getElementById("FPeixe").checked) 
                {
                    document.write(" FPeixe R$:" + FPeixe);
                } 
                else if (document.getElementById("Feijoada").checked) 
                {
                    document.write(" Feijoada R$:" + Feijoada);
                } 
                else if (document.getElementById("Strogonof").checked) 
                {
                    document.write(" Strogonof R$:" + Strogonof);
                } 
                else if (document.getElementById("CostelaS").checked) 
                {
                    document.write(" CostelaS R$:" + CostelaS);
                } 
                else if (document.getElementById("PicanhaAss").checked) 
                {
                    document.write(" PicanhaAss R$:" + PicanhaAss);
                } 
                else if (document.getElementById("Churrasco").checked) 
                {
                    document.write(" Churrasco R$:" + Churrasco);
                } 
                else if (document.getElementById("ESPAGUETE").checked) 
                {
                    document.write(" ESPAGUETE R$:" + ESPAGUETE);
                } 
                else if (document.getElementById("NHOQUE").checked) 
                {
                    document.write(" NHOQUE R$:" + NHOQUE);
                } 
                else if (document.getElementById("PANQUECAS").checked) 
                {
                    document.write(" PANQUECAS R$:" + PANQUECAS);
                } 
                else if (document.getElementById("CARNE").checked) 
                {
                    document.write(" CARNE R$:" + CARNE);
                } 
                else if (document.getElementById("QUEIJO").checked) 
                {
                    document.write(" QUEIJO R$:" + QUEIJO);
                } 
                else if (document.getElementById("PIZZA").checked) 
                {
                    document.write(" PIZZA R$:" + PIZZA);
                } 

                else if (document.getElementById("PALMITO").checked) 
                {
                    document.write(" PALMITO R$:" + PALMITO);
                } 

                else if (document.getElementById("ARROZ").checked) 
                {
                    document.write(" ARROZ R$:" + ARROZ);
                } 
                else if (document.getElementById("BATATAA").checked) 
                {
                    document.write(" BATATAA R$:" + BATATAA);
                } 
                else if (document.getElementById("FAROFA").checked) 
                {
                    document.write(" FAROFA R$:" + FAROFA);
                } 
                else if (document.getElementById("FEIJÃO").checked) 
                {
                    document.write(" FEIJÃO R$:" + FEIJÃO);
                } 
                else if (document.getElementById("BATATAF").checked) 
                {
                    document.write(" BATATAF R$:" + BATATAF);
                } 
                else if (document.getElementById("POLENTA").checked) 
                {
                    document.write(" POLENTA R$:" + POLENTA);
                } 

        else {
                    alert("Escolha Um")
                }        

}

function selecao(sel)
{
    document.getElementById("FiléFrango").checked = false;
    document.getElementById("ContraFilé").checked = false;
    document.getElementById("FiléMignon").checked = false;
    document.getElementById("Salmão").checked = false;

    document.getElementById("FPeixe").checked = false;
    document.getElementById("Feijoada").checked = false;
    document.getElementById("Strogonof").checked = false;
    document.getElementById("CostelaS").checked = false;
    document.getElementById("PicanhaAss").checked = false;
    document.getElementById("Churrasco").checked = false;

    document.getElementById("ESPAGUETE").checked = false;
    document.getElementById("NHOQUE").checked = false;
    document.getElementById("PANQUECAS").checked = false;

    document.getElementById("CARNE").checked = false;
    document.getElementById("QUEIJO").checked = false;
    document.getElementById("PIZZA").checked = false;
    document.getElementById("PALMITO").checked = false;

    document.getElementById("ARROZ").checked = false;
    document.getElementById("BATATAA").checked = false;
    document.getElementById("FAROFA").checked = false;
    document.getElementById("FEIJÃO").checked = false;
    document.getElementById("BATATAF").checked = false;
    document.getElementById("POLENTA").checked = false;
    
    document.getElementById(sel).checked = true;
}

