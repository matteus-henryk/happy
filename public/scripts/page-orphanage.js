const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// CRIAR MAPA
const map = L.map("mapid", options).setView([lat, lng], 15);

// CRIANDO ADD TILELAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// CRIAR ICONE
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// CRIAR E ADD MATKER
L.marker([lat, lng], { icon }).addTo(map);

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
