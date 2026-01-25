// leaflet.js created by ada for leaflet map functionality
// leaflet map initialization
// resource: https://leafletjs.com/examples/quick-start/
var map = L.map('map').setView([1.3521, 103.8198], 12);
//singapore coordinates
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);