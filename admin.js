function openAdmin(){

let pass=prompt("Admin password")

if(pass!=="shivadmin"){
alert("Access denied")
return
}

window.location.href="admin.html"

}

function addProperty(){

let title=document.getElementById("title").value
let location=document.getElementById("location").value
let img1=document.getElementById("img1").value

if(!title || !location || !img1){

alert("Title, Location and Image required")

return

}

let newProperty={

id:properties.length+1,

title:title,
location:location,
price:5000000,
beds:3,
sqft:1500,
type:"sale",

coords:{lat:31.1048,lng:77.1734},

images:[img1]

}

properties.push(newProperty)

alert("Property added")

}