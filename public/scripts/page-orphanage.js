const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// CRIAR MAPA
const map = L.map("mapid", options).setView([-23.3281339, -51.1693468], 15);

// CRIANDO ADD TILELAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// CRIAR ICONE
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// CRIAR E ADD MATKER
L.marker([-23.3281339, -51.1693468], { icon }).addTo(map);

/* IMAGE GALLERY  */

function selectImage(event) {
  const button = event.currentTarget;

  // REMOVER TODAS AS CLASSES ACTIVE
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  //  SELECIONAR A IMAGEM CLICADA
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details img");

  // ATUALIZAR O CONTAINER DE IMAGEM
  imageContainer.src = image.src;

  // ADICIONAR A CLASSE ACTIVE PARA O BOTÃO CLICADO
  button.classList.add("active");
}
