<?php
$Senha = $_GET["SENHA"];
$Email = $_GET["EMAIL"];

if($Email == "" || $Senha == ""){
    echo "Favor preencher todos os campos";
}
else{
    echo "Cadastro realizado com sucesso!";
}
?>
