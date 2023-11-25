<?php
$ID = $_GET["ID"];
$Senha = $_GET["Senha"];
$ValorValido = false;

if($ID == "" || $Senha == ""){
    $ValorValido = false;
}
else{
    $ValorValido = true;
}


return $ValorValido;