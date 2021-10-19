let cover = document.getElementById("cover");
let foto = document.getElementById("foto");
let tempImage = document.getElementById("tempImage");
cover.onclick = function () { foto.click(); }

document.getElementById("foto").onchange = (evt) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("tempImage").src = e.target.result;
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
