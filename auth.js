// USER LOGIN SYSTEM

function openLogin(){

let email=prompt("Enter Email")

if(!email){
alert("Login cancelled")
return
}

localStorage.setItem("user",email)

alert("Login successful")

}



// DASHBOARD ACCESS

function openDashboard(){

let user=localStorage.getItem("user")

if(!user){

alert("Please login first")
return

}

window.location.href="dashboard.html"

}



// LOGOUT

function logout(){

localStorage.removeItem("user")

alert("Logged out")

}



// SAVE PROPERTY SYSTEM

function saveProperty(id){

let saved=JSON.parse(localStorage.getItem("saved_properties"))||[]

if(!saved.includes(id)){

saved.push(id)

}

localStorage.setItem("saved_properties",JSON.stringify(saved))

alert("Property saved")

}