<?php

include_once('conexion.php');

if($_POST){




$nombre = $_POST['nombre'];
$cedula = $_POST['cedula'];
$sociedad = $_POST['sociedad'];
$nit = $_POST['nit'];
$expedida = $_POST['expedida'];
$fecha = date('Y-m-d H:i:s');





$sql = sqlsrv_query($conexion, "INSERT INTO autTtoDatos (nombre, cedula, expedida, sociedad, nit, fecha) 
VALUES ('$nombre','$cedula','$expedida','$sociedad','$nit','$fecha')");

}else{
    header('location:./');


}


?>