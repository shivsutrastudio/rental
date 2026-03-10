let sliderImages=[]
let currentIndex=0
let currentProperty=null

let saved=JSON.parse(localStorage.getItem("saved_properties"))||[]

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

grid.innerHTML+=`

<div class="bg-white shadow rounded overflow-hidden">

<img src="${p.images[0]}"
class="h-48 w-full object-cover cursor-pointer"
onclick="openProperty(${p.id})">

<div class="p-4">

<h3 class="font-bold text-lg">${p.title}</h3>

<p class="text-gray-500">${p.location}</p>

<p class="text-indigo-600 font-semibold">₹${p.price}</p>

<p>${p.beds} Beds • ${p.sqft} sqft</p>

<div class="flex gap-2 mt-3">

<button onclick="openProperty(${p.id})"
class="bg-indigo-600 text-white px-3 py-1 rounded">

View

</button>

</div>

</div>

</div>

`

})

}

function openProperty(id){

const p=properties.find(x=>x.id===id)

currentProperty=id

sliderImages=p.images
currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price
document.getElementById("modalInfo").innerText=p.beds+" Beds • "+p.sqft+" sqft"

document.getElementById("modalImage").src=sliderImages[0]

document.getElementById("whatsappBtn").href=
"https://wa.me/919999999999?text=I am interested in "+p.title

document.getElementById("propertyModal").style.display="flex"

recommendProperties(p)

}

function nextImage(){

currentIndex=(currentIndex+1)%sliderImages.length

document.getElementById("modalImage").src=sliderImages[currentIndex]

}

function prevImage(){

currentIndex=(currentIndex-1+sliderImages.length)%sliderImages.length

document.getElementById("modalImage").src=sliderImages[currentIndex]

}

function closeModal(){

document.getElementById("propertyModal").style.display="none"

}

// SAVE PROPERTY

function saveProperty(id){

if(!saved.includes(id)){

saved.push(id)

localStorage.setItem("saved_properties",JSON.stringify(saved))

alert("Property saved")

}

}

// AI RECOMMENDATIONS

function recommendProperties(property){

const container=document.getElementById("recommendations")

container.innerHTML=""

const rec=properties.filter(p=>

p.id!==property.id &&
(p.location===property.location || p.beds===property.beds)

).slice(0,3)

rec.forEach(p=>{

container.innerHTML+=`

<div class="bg-white shadow rounded p-2">

<img src="${p.images[0]}"
class="h-20 w-full object-cover">

<p class="text-sm">${p.title}</p>

<button onclick="openProperty(${p.id})"
class="text-indigo-600 text-sm">

View

</button>

</div>

`

})

}

displayProperties(properties)