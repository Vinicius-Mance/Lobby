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


let cover = document.getElementById("cover");
let foto = document.getElementById("foto");
let tempImage = document.getElementById("tempImage");
cover.onclick = function () { foto.click(); }
let fotoOK = false;
foto.onchange = (evt) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      tempImage.src = e.target.result;
      fotoOK = true;
      cover.style.backgroundColor = "rgba(0,0,0,0)";
      cover.style.color = "rgba(0,0,0,0)";
      erroFoto.innerHTML = "";
      if (arredondado) {
        tempImage.style.borderRadius = "50%";
      }
    };
    reader.readAsDataURL(evt.target.files[0]);
};

let redondo = document.getElementById('redondo');

redondo.onclick = function () {
  toggleBorder();
}

let arredondado = false;
const toggleBorder = () => {

  if (arredondado) {
    cover.style.borderRadius = "0";
    tempImage.style.borderRadius = "0";
    arredondado = false;
  } else {
    cover.style.borderRadius = "45%";
    tempImage.style.borderRadius = "50%";
    arredondado = true;
  }

}
