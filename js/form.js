// CAMPOS
// invocação de campos do html e variáveis
let form = document.getElementById('form'); // formulário para criar link
let adicionarLink = document.getElementById('adicionarLink'); // divisória/botão para adicionar link
let fecharForm = document.getElementById('fecharForm');// botão para fechar formulário
let link = document.getElementById('link'); // campo do título do link
let erroLink = document.getElementById('erroLink'); // mensagem de erro do link

let url = document.getElementById('url'); // campo com a url do link
let erroUrl = document.getElementById('erroUrl'); //  mensagem de erro da url

let foto = document.getElementById("foto"); // campo foto para envio de arquivos ao back end
let cover = document.getElementById("cover"); // campo visual para enviar imagens
let erroFoto = document.getElementById('erroFoto'); // mensagem de erro da foto
let tempImage = document.getElementById("tempImage"); // imagem temporária para preview no input
let redondo = document.getElementById('redondo'); // campo para adicionar bordas no ícone (front/back-end)

let previewLink = document.getElementById("previewLink"); // container em exibição para preview de link
let previewFoto = document.getElementById("previewFoto"); // ícone em exibição para preview de link gerado
let previewTitulo = document.getElementById("previewTitulo"); // título em exibição para preview de link

// DECLARAÇÃO DE FUNÇÕES
let arredondado = false; // variável para verificar se o ícone será arredondado
let fotoOK = false; // variável para verificar se uma foto foi enviada
let formOpen = false; // variável para verificar se o formulário está visível
// função para colocar/tirar as bordar na preview do ícone
const toggleBorder = () => {

  if (arredondado) {
    cover.style.borderRadius = "0";
    tempImage.style.borderRadius = "0";
    previewFoto.style.borderRadius = "0";
    arredondado = false;
  } else {
    cover.style.borderRadius = "45%";
    tempImage.style.borderRadius = "50%";
    previewFoto.style.borderRadius = "50%";
    arredondado = true;
  }

}

//carrega a imagem enviada para a preview e verifica se a imagem foi enviada, e coloca bordas na preview do ícone caso haja
const imagemPreview = (e) => {
      const reader = new FileReader();
      reader.onload = function (e) {
      tempImage.src = e.target.result;
      previewFoto.src = e.target.result;
      fotoOK = true;
      cover.style.backgroundColor = "rgba(0,0,0,0)";
      cover.innerHTML = "";
      erroFoto.innerHTML = "";
      if (arredondado) {
        tempImage.style.borderRadius = "50%";
      }
    };
    reader.readAsDataURL(e.target.files[0]);
}
// função para mostrar e esconder o formulário de criação de links
const toggleForm = () => {
    if (formOpen) {
      adicionarLink.style.display = "flex";
      form.style.display = "none";
      previewLink.style.display = "none";
      formOpen = false;
    } else {
      adicionarLink.style.display = "none";
      form.style.display = "flex";
      previewLink.style.display = "flex";
      formOpen = true;
    }
}

// funcão para validar se campos foram preenchidos e a imagem enviada
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

// muda o texto interno da preview para o título inserido
const mostrarPreviewTitulo = () => {
  if (link.value.length == 0) {
    previewTitulo.innerHTML = "Preview";
  } else {
    previewTitulo.innerHTML = link.value;
  }
}

// muda o local de destino do link da preview para a url inserida
const mostrarPreviewLink = () => {
  if (url.value.length == 0) {
    previewLink.href = "#";
  } else {
    previewLink.href = url.value;
  }
}

// INVOCAÇÃO DE EVENTOS
// invocação de funções por eventos
// prevenção de submit e invocação de função de validação de formulário
form.onsubmit = function (e) {
  e.preventDefault();
  validarCampos();
}

//faz o título aparecer na preview
link.onkeyup = function () { mostrarPreviewTitulo();}

//coloca o endereço destino na preview
url.onkeyup = function () { mostrarPreviewLink();}

// adiciona bordas ao ícone na preview
redondo.onclick = function () { toggleBorder(); }

// abre o formulário para criação de links
adicionarLink.onclick = function () { toggleForm(); }

// fecha o formulário para ciração de links
fecharForm.onclick = function () { toggleForm(); }

// mudança de preview de imagem
foto.onchange = function (e)  { imagemPreview(e); };

// função para botão visual funcionar
cover.onclick = function () { foto.click(); }
