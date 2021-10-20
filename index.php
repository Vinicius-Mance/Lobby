<?php
  require("./DB/Links.php");
  include './DB/autoload.php';
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Lobby</title>
    <link rel="icon" href="./img/icon.png" >
    <link rel="stylesheet" href="./css/index.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
  </head>
  <body>
    <main>

  <?php
    $linkDB = new \DB\Links();
    $todoslinks = $linkDB->todos();
        foreach ($todoslinks as $links => $link): ?>
            <a class="iconeLink <?php if ($link['redondo']) { echo "redondo"; } ?>" href="<?php echo $link['link'] ?>" target="_blank">
              <img src="./img/<?php echo $link['foto'] ?> " alt="<?php echo $link['nome'] ?>">
              <?php echo $link['nome'] ?>
            </a>
  <?php endforeach; ?>
<!--
    <a id="jsontojava" href="https://json2csharp.com">
      <img src="./img/jsontojava.png" alt="">
    </a>
 -->
     <a class="iconeLink" id="previewLink" href="#" target="_blank">
       <img id="previewFoto" src="./img/icons/placeholder.png" alt="placeholder">
        <span id="previewTitulo">Preview</span>
     </a>

      <form id="form" action="./rotas/enviar.php" method="post" enctype="multipart/form-data">
          <div id="cover">
              Enviar Ícone +
          </div>
          <span class="erro" id="erroFoto"></span>
          <img id="tempImage" src="./img/icons/placeholder.png" alt="placeholder">
          <div id="linkInput">
            <input id="link" type="text" name="nome" placeholder="Título do site">
            <label for="redondo">
              <input id="redondo" type="checkbox" name="redondo" value="true">
                Ícone redondo
            </label>
            <span class="erro" id="erroLink"></span>
            <input id="url" type="text" name="link" placeholder="URL">
            <span class="erro" id="erroUrl"></span>
          </div>
          <input id="foto" type="file" name="foto">
          <button id="enviar" type="submit">Criar Link</button>
      </form>

      </main>

      <div id="player">
        <img src="./img/icons/note.png" alt="">
      </div>
        <audio loop id="music">
          <source src="./audio/music.ogg" type="audio/mpeg">
        </audio>
      <div id="muted">\</div>
    <script type="text/javascript" src="./js/form.js"></script>
    <script type="text/javascript" src="./js/music.js"></script>
  </body>
</html>
