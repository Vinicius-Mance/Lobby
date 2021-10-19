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
