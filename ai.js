function recommendProperties(property){

let recommendations = properties.filter(p =>

p.id !== property.id &&
(
p.location === property.location ||
Math.abs(p.price - property.price) <= 3000000 ||
p.beds === property.beds
)

)

.slice(0,3)

showRecommendations(recommendations)

}

function showRecommendations(list){

const container=document.getElementById("recommendations")

if(!container) return

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`

<div class="bg-white shadow rounded p-3">

<img src="${p.images[0]}"
class="w-full h-28 object-cover rounded">

<h4 class="font-semibold mt-2">${p.title}</h4>

<p class="text-sm">${p.location}</p>

<p class="text-indigo-600">₹${p.price}</p>

<button onclick="openProperty(${p.id})"
class="bg-indigo-600 text-white px-2 py-1 mt-2 rounded text-sm">

View

</button>

</div>

`

})

}