function bebidas() {

    var Água;
    var Café;
    var Suco;
    var SucoL;
    var Lata;
    var R600ML;
    var R1L;
    var R2L;
    var CervejaL;
    var CervejaG;

    Água = document.getElementById("Água").value;
    Café = document.getElementById("Café").value;
    Suco = document.getElementById("Suco").value;
    SucoL = document.getElementById("SucoL").value;
    Lata = document.getElementById("Lata").value;
    R600ML = document.getElementById("R600ML").value;
    R1L = document.getElementById("R1L").value;
    R2L = document.getElementById("R2L").value;
    CervejaL = document.getElementById("CervejaL").value;
    CervejaG = document.getElementById("CervejaG").value;
    

        if (document.getElementById("Água").checked) 
            {
                document.write(" Água" + Água);
            }
            
                else if (document.getElementById("Café").checked) 
                {
                    document.write(" Café R$:" + Café);
                }
                else if (document.getElementById("Suco").checked) 
                {
                    document.write(" Suco Laranja R$:" + Suco);
                }
                else if (document.getElementById("SucoL").checked) 
                {
                    document.write(" Suco Limão R$:" + SucoL);
                }
                else if (document.getElementById("Lata").checked) 
                {
                    document.write(" Lata R$:" + Lata);
                }
                else if (document.getElementById("R600ML").checked) 
                {
                    document.write(" Refri 600ML R$:" + R600ML);
                }
                else if (document.getElementById("R1L").checked) 
                {
                    document.write(" Refri 1L R$:" + R1L);
                }
                else if (document.getElementById("R2L").checked) 
                {
                    document.write(" Refri 2L R$:" + R2L);
                }
                else if (document.getElementById("CervejaL").checked) 
                {
                    document.write(" Cerveja Lata R$:" + CervejaL);
                }
                else if (document.getElementById("CervejaG").checked) 
                {
                    document.write(" Cerveja G. R$:" + CervejaG);
                }
        

        else {
            alert("Escolha Um")
        }
    
   
}

function selecao(sel)
{
    document.getElementById("Água").checked = false;
    document.getElementById("Café").checked = false;
    document.getElementById("Suco").checked = false;
    document.getElementById("SucoL").checked = false;
    document.getElementById("Lata").checked = false;
    document.getElementById("R600ML").checked = false;
    document.getElementById("R1L").checked = false;
    document.getElementById("R2L").checked = false;
    document.getElementById("CervejaL").checked = false;
    document.getElementById("CervejaG").checked = false;
    
    document.getElementById(sel).checked = true;
}
