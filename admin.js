// ADMIN LOGIN + ADMIN PANEL ACCESS

function openAdmin(){

let pass=prompt("Admin password")

if(pass!=="admin123" && pass!=="shivadmin"){

alert("Access denied")
return

}

// ask admin which mode to use

let mode=prompt("Enter mode:\n1 = Quick Add Property\n2 = Open Admin Panel")

if(mode==="1"){

quickAddProperty()

}

else if(mode==="2"){

window.location.href="admin.html"

}

}



// QUICK PROPERTY ADD (OLD SYSTEM)

function quickAddProperty(){

let title=prompt("Property Title")
let location=prompt("Location")
let price=parseInt(prompt("Price")) || 5000000
let beds=parseInt(prompt("Bedrooms")) || 3
let sqft=parseInt(prompt("Square Feet")) || 1500
let type=prompt("Type (rent / buy / sale)") || "sale"

let img=prompt("Image URL") ||
"https://images.unsplash.com/photo-1564013799919-ab600027ffc6"



let newProperty={

id:properties.length+1,

title:title,

location:location,

price:price,

beds:beds,

sqft:sqft,

type:type,

coords:{lat:28.6139,lng:77.2090},

images:[img]

}

properties.push(newProperty)

if(typeof displayProperties==="function"){
displayProperties(properties)
}

alert("Property added successfully")

}



// ADMIN PANEL FORM ADD PROPERTY

function addProperty(){

let title=document.getElementById("title").value
let location=document.getElementById("location").value
let price=parseInt(document.getElementById("price").value)
let beds=parseInt(document.getElementById("beds").value)
let sqft=parseInt(document.getElementById("sqft").value)
let type=document.getElementById("type").value
let lat=parseFloat(document.getElementById("lat").value)
let lng=parseFloat(document.getElementById("lng").value)

let img1=document.getElementById("img1").value
let img2=document.getElementById("img2").value
let img3=document.getElementById("img3").value


let newProperty={

id:properties.length+1,

title:title,

location:location,

price:price,

beds:beds,

sqft:sqft,

type:type,

coords:{lat:lat,lng:lng},

images:[img1,img2,img3]

}

properties.push(newProperty)

alert("Property Added Successfully")

document.getElementById("propertyForm").reset()

}