/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jackson Drolet
      Date: 4/2/2026

      Filename: project02-01.js
 */

function CelsiusToFahrenheit() {
    Cn=document.getElementById("cValue");
    F = fN.value * 1.8 + 32;
    Cn.value=F;
    //return F;   
}

fN=document.getElementById("fValue");
fN.addEventListener("change", CelsiusToFahrenheit);
 
function FahrenheitToCelsius() {
    Fn=document.getElementById("fValue");
    C = (cN.value - 32) / 1.8;
    Fn.value=C;
    //return C;   
}

cN=document.getElementById("cValue");
cN.addEventListener("change", FahrenheitToCelsius);