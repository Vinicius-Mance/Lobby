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

      foreach ($todoslinks as $links => $link) { ?>
        <?php if ($link['redondo']): ?>

        <?php endif; ?>
          <a class="iconeLink <?php if ($link['redondo']) { echo "redondo"; } ?>" href="<?php echo $link['link'] ?>">
            <img src="./img/<?php echo $link['foto'] ?> " alt="<?php echo $link['nome'] ?>">
            <?php echo $link['nome'] ?>
          </a>

    <?php } ?>

      <a id="theuselessweb" href="https://theuselessweb.com">
        <img src="./img/theuselessweb.svg" alt="">
        The useless web
      </a>

      <a id="outlook" href="https://outlook.office365.com/mail/inbox/id/AAQkADlmZTdjYmZhLTcwOGUtNGVlMi1iNDUwLTdlMWIzYjU0NzZkYgAQAF5ISKAyGXGf5rl517uwRL4%3D">
        <img src="./img/outlook.svg" alt="">
          Email FIAP
      </a>

      <a id="fiap" href="https://www2.fiap.com.br">
        <img src="./img/fiap.svg" alt="">
        Portal do aluno
      </a>

      <a id="strobe" href="https://strobe.cool">
        <img src="./img/strobe.png" alt="">
        Strobe illusion
      </a>

      <a id="nightwaveplaza" href="https://plaza.one">
        <img src="./img/nightwaveplaza.png" alt="">
        Nightwave Plaza
      </a>

      <a id="azure" href="https://portal.azure.com/#home">
        <img src="./img/azure.png" alt="">
        Microsoft Azure
      </a>

      <a id="rtings" href="https://www.rtings.com/headphones/graph#814/7903/1584">
        <img src="./img/rtings.png" alt="">
        Rtings
      </a>

      <a id="htmlcolorpick" href="https://imagecolorpicker.com">
        <img src="./img/htmlcolorpick.png" alt="">
        Image Color Picker
      </a>

      <a id="spotify" href="https://open.spotify.com">
        <img src="./img/spotify.svg" alt="">
        Spotify
      </a>

      <a id="soundcloud" href="https://soundcloud.com/discover">
        <img src="./img/soundcloud.svg" alt="">
        SoundCloud
      </a>

      <a id="springinitializer" href="https://start.spring.io">
        <img src="./img/springinitializer.png" alt="">
        Spring Initializer
      </a>

      <a id="pi" href="https://www.matematica.pt/util/calculadora-equacao-2-grau.php">
        <img src="./img/pi.svg" alt="">
        (Referência) Calculadora
      </a>

      <a id="w3schools" href="https://www.w3schools.com/colors/colors_picker.asp">
        <img src="./img/w3schools.png" alt="">
        HTML Color Picker
      </a>

      <a id="github" href="https://github.com/Vinicius-Mance">
        <img src="./img/github.svg" alt="">
        My Github
      </a>

      <a id="reactnative" href="http://localhost:19002">
        <img src="./img/reactnative.png" alt="">
        Localhost - Native
      </a>

      <a id="jsontojava" href="https://json2csharp.com">
        <img src="./img/jsontojava.png" alt="">
      </a>

      <form id="form" action="./rotas/enviar.php" method="post" enctype="multipart/form-data">
          <div id="cover">
              Enviar Ícone +
          </div>
          <span class="erro" id="erroFoto"></span>
          <img id="tempImage" src="./img/placeholder.png" alt="placeholder">
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
        <img src="./img/note.png" alt="">
      </div>
        <audio loop id="music">
          <source src="./audio/music.ogg" type="audio/mpeg">
        </audio>
      <div id="muted">\</div>
    <script type="text/javascript" src="./js/form.js"></script>
    <script type="text/javascript" src="./js/music.js"></script>
    <script type="text/javascript" src="./js/input.js"></script>
  </body>
</html>
