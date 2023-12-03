<?php

$EMAIL = $_GET["EMAIL"];
$SENHA = $_GET["SENHA"];

if($EMAIL != "" && $SENHA != ""){

    $Conta = array(
        'EMAIL' => 'SEUEMAIL@GMAIL.COM',
        'SENHA' => 'SENHA123');

    $RetornoJson = json_encode($Conta);
    echo $RetornoJson;

}
?>
