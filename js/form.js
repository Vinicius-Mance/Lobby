let form = document.getElementById('form');
let link = document.getElementById('link');
let url = document.getElementById('url');
let erroUrl = document.getElementById('erroUrl');
let erroFoto = document.getElementById('erroFoto');
let erroLink = document.getElementById('erroLink');

// let foto = document.getElementById('foto');
// campo foto já declarado em input.js

form.onsubmit = function (e) {
  e.preventDefault();
  validarCampos();
}

const validarCampos = () => {
erroUrl.innerHTML = "";
erroFoto.innerHTML = "";
erroLink.innerHTML = "";
let linkOK = true;
let urlOK = true;

  if (link.value.length == 0) {
    linkOK = false;
    erroLink.innerHTML = "Insira o título do site";
  }

  if (url.value.length == 0) {
    urlOK = false;
    erroUrl.innerHTML = "Insira a URL do site, ou caminho do arquivo";
  }

  if (!fotoOK) {
    erroFoto.innerHTML = "Envie um ícone";
  }

  if (linkOK && urlOK && fotoOK) {
      form.submit();
  }
}
