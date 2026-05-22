// =========================
// FILE: script.js
// =========================

// DATE & TIME

function updateDateTime(){

const now = new Date();

document.getElementById("datetime").innerHTML =
now.toLocaleString();

}

setInterval(updateDateTime,1000);


// LOGIN FORM POPUP

function loginPopup(){

alert("Login Successfully Submitted!");

}