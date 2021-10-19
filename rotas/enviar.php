<?php
require("../DB/Links.php");
include '../DB/autoload.php';
  $linkDB = new \DB\Links();
  // //////////////////////////////////////////////
  $nomeOK = true;
  $linkOK = true;
  $fotoOK = true;
  $enviarOK = true;

  $nome = '';
  $link = '';

  //verifica se um dos campos foi preenchido
  if($_POST or $_FILES){
  $nome = $_POST['nome'];
  $link = $_POST['link'];
  $foto = $_FILES['foto'];
  if (empty($_POST['redondo'])) {
    $redondo = false;
  } else {
    $redondo = true;
  }
  //verifica se o nome foi preenchido
  if (empty($nome)) {
    $nomeOK = false;
  }

  if (empty($link)) {
    $linkOK = false;
  }

  echo $foto["type"];
  //verifica se uma imagem foi enviada
    if ($foto['error']==0){
      $valid=["image/jpeg","image/png","image/jpg","image/svg+xml"];
      if (array_search($foto['type'], $valid) === false){exit;}
    } else {
      $fotoOK = false;}

      if ($nomeOK and $linkOK and $fotoOK){

          $photo = $nome . ".".pathinfo($foto['name'], PATHINFO_EXTENSION);
          move_uploaded_file($foto['tmp_name'], '../img/' . $photo);

          $linkDB->salvar($nome,$link,$photo,$redondo);
          header('location: ../index.php');
      }
  }
  /////////////////////////////////////////////////
 ?>
