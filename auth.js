function openLogin(){
document.getElementById("loginModal").style.display="flex"
}

function closeLogin(){
document.getElementById("loginModal").style.display="none"
}

function openSignup(){
document.getElementById("signupModal").style.display="flex"
}

function closeSignup(){
document.getElementById("signupModal").style.display="none"
}

function signupUser(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPass").value

if(!email || !pass){
alert("Fill all fields")
return
}

localStorage.setItem("user_"+email,pass)

alert("Account created")

closeSignup()

}

function loginUser(){

let email=document.getElementById("loginEmail").value
let pass=document.getElementById("loginPass").value

let savedPass=localStorage.getItem("user_"+email)

if(savedPass===pass){

localStorage.setItem("loggedUser",email)

alert("Login successful")

closeLogin()

}

else{

alert("Invalid credentials")

}

}

function openDashboard(){

let user=localStorage.getItem("loggedUser")

if(!user){

alert("Please login first")

openLogin()

return
}

window.location.href="dashboard.html"

}