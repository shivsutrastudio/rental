let sliderImages=[]
let currentIndex=0
let currentProperty=null

let saved=JSON.parse(localStorage.getItem("saved_properties"))||[]

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

if(!grid) return

grid.innerHTML=""

list.forEach(p=>{

grid.innerHTML+=`

<div class="bg-white rounded shadow overflow-hidden relative">

<span class="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm">
₹${p.price}
</span>

<button onclick="saveProperty(${p.id})"
class="absolute top-2 right-2 text-white text-xl">
❤
</button>

<img src="${p.images[0]}"
class="h-48 w-full object-cover cursor-pointer"
onclick="openProperty(${p.id})">

<div class="p-3">

<h3 class="font-bold">${p.title}</h3>

<p class="text-gray-500">${p.location}</p>

<p class="text-sm">
${p.beds} Beds • ${p.sqft} sqft
</p>

<button onclick="openProperty(${p.id})"
class="bg-indigo-600 text-white px-3 py-1 mt-2 rounded">

View

</button>

</div>

</div>

`

})

}

function openProperty(id){

const p=properties.find(x=>x.id===id)

if(!p) return

currentProperty=id
sliderImages=p.images
currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price
document.getElementById("modalInfo").innerText=p.beds+" Beds • "+p.sqft+" sqft

document.getElementById("modalImage").src=sliderImages[0]

document.getElementById("whatsappBtn").href=
"https://wa.me/?text=Interested in "+p.title

document.getElementById("propertyModal").style.display="flex"

if(typeof recommendProperties==="function"){
recommendProperties(p)
}

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

function saveProperty(id){

if(!saved.includes(id)){

saved.push(id)

localStorage.setItem("saved_properties",JSON.stringify(saved))

alert("Saved to favorites")

}

}

function filterProperties(){

let city=document.getElementById("city").value.toLowerCase()
let price=parseInt(document.getElementById("price").value)
let beds=document.getElementById("beds").value
let type=document.getElementById("type").value

let filtered=properties.filter(p=>{

return(
(!city || p.location.toLowerCase().includes(city)) &&
(!price || p.price<=price) &&
(!beds || p.beds>=beds) &&
(!type || p.type===type)
)

})

displayProperties(filtered)

}

function openDashboard(){

window.location.href="dashboard.html"

}

document.addEventListener("DOMContentLoaded",()=>{

displayProperties(properties)

})