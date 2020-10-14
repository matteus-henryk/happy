// CRIAR MAPA
const map = L.map('mapid').setView([-23.3281339,-51.1693468], 15);


// CRIANDO ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// CRIAR ICONE
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

//CRIAR POPUP OVERLAY
const popup =L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,

}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// CRIAR E ADD MATKER
L.marker([-23.3281339,-51.1693468], { icon })
    .addTo(map)
    .bindPopup(popup);