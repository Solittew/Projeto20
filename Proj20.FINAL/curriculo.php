<?php
$NOME = $_GET["NOME"];
$EMAIL = $_GET["EMAIL"];

if($NOME == "" && $EMAIL == ""){
    echo "Preencha todos os campos";
}
else{
    echo "Currículo enviado com sucesso";
}
?>