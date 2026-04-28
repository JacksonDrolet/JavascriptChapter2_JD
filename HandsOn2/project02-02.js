/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Jackson Drolet
      Date: 4/9/2026

      Filename: project02-02.js
 */
 
function verifyForm(){
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      (document.getElementById("name").value !=="" && document.getElementById("email").value !=="" && document.getElementById("phone").value !=="") ? window.alert("Thank you!") : window.alert("Please fill in all of the fields.")
}

//Event listener
document.getElementById("submit").onclick = verifyForm;