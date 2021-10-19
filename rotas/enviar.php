<?php
require("../DB/Links.php");
include '../DB/autoload.php';
  $linkDB = new \DB\Links();
  function novoLink($nome, $link, $foto){
      $produtos = fetch_pdt();

      $product = ['id'=>$id,'produto'=>$pdt,'preco'=>$preco,'foto'=>$foto,'descricao'=>$descricao];
      $produtos[]= $product;
      $data = json_encode($produtos);
      if($data){file_put_contents('dados/data.json', $data);}
  }

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
  //verifica se o nome foi preenchido
  if (empty($nome)) {
    $nomeOK = false;
  }
  //verifica se uma imagem foi enviada
    if ($foto['error']==0){
      $valid=["image/jpeg","image/png","image/jpg"];
      if (array_search($foto['type'], $valid) === false){exit;}
    } else {
      $fotoOK = false;}

      if ($nomeOK and $linkOK and $fotoOK){

          $photo = $nome . ".".pathinfo($foto['name'], PATHINFO_EXTENSION);
          move_uploaded_file($foto['tmp_name'], '../img/' . $photo);
          echo $photo;
          $linkDB->salvar($nome,$link,$photo);
          // header('location: index.php');
      }
  }
  /////////////////////////////////////////////////
 ?>
