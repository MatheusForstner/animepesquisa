var listaFilmes = [
  "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_main.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/1c1df98707aa0f22aa54342af725e48a1491245343_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/2e596c3e38c68d6e762c91ca9a4e4cfd1659636095_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire3/01ec367b44f0a568430a957e042639af1612983064_full.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

function add() {
  var addFilme = document.getElementById("link").value;
  var elementAviso = document.getElementById("aviso");
  var adicionado = false;
  for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i] == addFilme) {
      elementAviso.innerHTML = "Este filme já foi adicionado a sua lista!";
      adicionado = true;
    }
  }

  if (adicionado == false) {
    elementAviso.innerHTML = "";
    listaFilmes.push(addFilme);
    var imgFilme = document.createElement("img");
    imgFilme.src = addFilme;
    document.body.appendChild(imgFilme);
  }
}
