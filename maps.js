let map;

function initMap(){

map=L.map('map').setView([20.5937,78.9629],5);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{maxZoom:19}
).addTo(map);

properties.forEach(p=>{

L.marker([p.coords.lat,p.coords.lng])
.addTo(map)
.bindPopup(`<b>${p.title}</b><br>${p.location}`)

})

}

document.addEventListener("DOMContentLoaded",initMap);