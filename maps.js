let map;

function initMap(){

map = L.map('map').setView([20.5937,78.9629],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19,
attribution:'© OpenStreetMap'
}).addTo(map);

if(typeof properties !== "undefined"){
loadPropertyMarkers();
}

}

function loadPropertyMarkers(){

properties.forEach(property=>{

const marker = L.marker([
property.coords.lat,
property.coords.lng
]).addTo(map);

const popup = `

<div style="width:200px">

<h3>${property.title}</h3>

<img src="${property.images[0]}"
style="width:100%;height:120px;object-fit:cover">

<p>${property.location}</p>

<p>₹${property.price}</p>

<p>${property.beds} Beds • ${property.sqft} sqft</p>

<button onclick="openProperty(${property.id})"
style="background:#4f46e5;color:white;padding:5px;border:none;border-radius:4px">

View

</button>

</div>

`;

marker.bindPopup(popup);

});

}

document.addEventListener("DOMContentLoaded",initMap);