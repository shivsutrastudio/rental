// IMPORT FIREBASE MODULES

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyAkG5_0MAesDRi6paXsefDpw6WCyyIcXVs",
  authDomain: "retail-cb7b9.firebaseapp.com",
  projectId: "retail-cb7b9",
  storageBucket: "retail-cb7b9.firebasestorage.app",
  messagingSenderId: "1070740472515",
  appId: "1:1070740472515:web:37a239305afa6acf5dd876",
  measurementId: "G-GGY6GEX0XM"
};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// SIGNUP

window.signupUser = function(){

let email = document.getElementById("signupEmail")?.value;
let pass = document.getElementById("signupPass")?.value;

if(!email || !pass){
alert("Please enter email and password");
return;
}

createUserWithEmailAndPassword(auth,email,pass)

.then(()=>{

alert("Account created successfully");

window.location.href="login.html";

})

.catch(err=>alert(err.message));

};


// LOGIN

window.loginUser = function(){

let email = document.getElementById("loginEmail")?.value;
let pass = document.getElementById("loginPass")?.value;

if(!email || !pass){
alert("Please enter email and password");
return;
}

signInWithEmailAndPassword(auth,email,pass)

.then(()=>{

alert("Login successful");

window.location.href="index.html";

})

.catch(err=>alert(err.message));

};


// LOGOUT

window.logoutUser = function(){

signOut(auth)

.then(()=>{

alert("Logged out");

window.location.href="login.html";

})

.catch(err=>alert(err.message));

};


// AUTH STATE CHECK

onAuthStateChanged(auth,(user)=>{

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userEmail = document.getElementById("userEmail");

if(user){

console.log("Logged in:",user.email);

if(loginBtn) loginBtn.style.display="none";
if(logoutBtn) logoutBtn.style.display="inline-block";
if(userEmail) userEmail.innerText=user.email;

}

else{

if(loginBtn) loginBtn.style.display="inline-block";
if(logoutBtn) logoutBtn.style.display="none";
if(userEmail) userEmail.innerText="";

}

});