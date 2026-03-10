let map

function initMap(){

map = new google.maps.Map(
document.getElementById("map"),
{
center:{lat:20.5937,lng:78.9629},
zoom:5
})

loadPropertyMarkers()

}

function loadPropertyMarkers(){

properties.forEach(property=>{

const marker = new google.maps.Marker({

position:property.coords,
map:map,
title:property.title

})

const info = new google.maps.InfoWindow({

content:`

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

`

})

marker.addListener("click",()=>{

info.open(map,marker)

})

})

}