let sliderImages=[]
let currentIndex=0

let favorites=JSON.parse(localStorage.getItem("favorites"))||[]
let compareList=[]

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

const fav=favorites.includes(p.id)

grid.innerHTML+=`

<div class="bg-white shadow rounded overflow-hidden">

<img src="${p.images[0]}" class="h-48 w-full object-cover">

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

<button onclick="toggleFavorite(${p.id})">

<i class="fa-${fav?'solid':'regular'} fa-heart text-red-500"></i>

</button>

<button onclick="addCompare(${p.id})"
class="text-sm text-gray-600">

Compare

</button>

</div>

</div>

</div>

`

})

}

function openProperty(id){

const p=properties.find(x=>x.id===id)

sliderImages=p.images
currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price
document.getElementById("modalInfo").innerText=p.beds+" Beds • "+p.sqft+" sqft"

document.getElementById("modalImage").src=sliderImages[0]

document.getElementById("mapFrame").src=
"https://maps.google.com/maps?q="+p.location+"&output=embed"

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

function toggleFavorite(id){

if(favorites.includes(id))
favorites=favorites.filter(x=>x!==id)
else
favorites.push(id)

localStorage.setItem("favorites",JSON.stringify(favorites))

displayProperties(properties)

}

function addCompare(id){

if(!compareList.includes(id))
compareList.push(id)

if(compareList.length==2){

const p1=properties.find(p=>p.id===compareList[0])
const p2=properties.find(p=>p.id===compareList[1])

alert(

"Property Comparison\n\n"+

p1.title+" ₹"+p1.price+"\n"+
p2.title+" ₹"+p2.price

)

compareList=[]

}

}

function filterProperties(){

let city=document.getElementById("city").value.toLowerCase()
let price=document.getElementById("price").value
let beds=document.getElementById("beds").value
let type=document.getElementById("type").value

let filtered=properties.filter(p=>{

return(
(!city||p.location.toLowerCase().includes(city)) &&
(!price||p.price<=price) &&
(!beds||p.beds>=beds) &&
(!type||p.type===type)

)

})

displayProperties(filtered)

}

function recommendProperties(property){

const rec=properties.filter(p=>

p.location===property.location &&
p.id!==property.id

).slice(0,3)

console.log("Recommended:",rec)

}

displayProperties(properties)