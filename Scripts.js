let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos

// Inicializa mostrando la primera diapositiva
showSlide(currentSlide);



// Crear el mapa centrado en la ubicación principal
const map = L.map('map').setView([39.1031, -84.5120], 10); 

// Agregar capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir un radio de cobertura (en metros)
const radioCobertura = 20000; // 12 km de cobertura, ajusta según necesites

// Agregar círculos para cada ciudad que representen la cobertura
L.circle([39.1031, -84.5120], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Cincinnati, OH - Zona de Cobertura");

L.circle([39.3604, -84.3031], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Mason, OH - Zona de Cobertura");

L.circle([39.3162, -84.3973], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("West Chester, OH - Zona de Cobertura");

L.circle([39.3989, -84.4365], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Liberty Township, OH - Zona de Cobertura");

L.circle([39.3457, -84.5601], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Fairfield, OH - Zona de Cobertura");

L.circle([39.1836, -84.5528], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Hamilton, OH - Zona de Cobertura");

L.circle([39.2228, -84.3792], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Blue Ash, OH - Zona de Cobertura");

L.circle([39.1550, -84.3578], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Kenwood, OH - Zona de Cobertura");

L.circle([39.2123, -84.3589], {
    color: 'blue',
    fillColor: '#0000FF',
    fillOpacity: 0.3,
    radius: radioCobertura
}).addTo(map).bindPopup("Montgomery, OH - Zona de Cobertura");

// Agregar marcadores con etiquetas
const markerCincinnati = L.marker([39.1031, -84.5120]).addTo(map)
    .bindPopup("<b>Cincinnati, OH</b><br>Ubicación principal.")
    .openPopup();

const markerMason = L.marker([39.3604, -84.3031]).addTo(map)
    .bindPopup("<b>Mason, OH</b><br>Área de servicio.");

const markerWestChester = L.marker([39.3162, -84.3973]).addTo(map)
    .bindPopup("<b>West Chester, OH</b><br>Área de servicio.");

const markerLibertyTownship = L.marker([39.3989, -84.4365]).addTo(map)
    .bindPopup("<b>Liberty Township, OH</b><br>Área de servicio.");

const markerFairfield = L.marker([39.3457, -84.5601]).addTo(map)
    .bindPopup("<b>Fairfield, OH</b><br>Área de servicio.");

const markerHamilton = L.marker([39.1836, -84.5528]).addTo(map)
    .bindPopup("<b>Hamilton, OH</b><br>Área de servicio.");

const markerBlueAsh = L.marker([39.2228, -84.3792]).addTo(map)
    .bindPopup("<b>Blue Ash, OH</b><br>Área de servicio.");

const markerKenwood = L.marker([39.1550, -84.3578]).addTo(map)
    .bindPopup("<b>Kenwood, OH</b><br>Área de servicio.");

const markerMontgomery = L.marker([39.2123, -84.3589]).addTo(map)
    .bindPopup("<b>Montgomery, OH</b><br>Área de servicio.");





    