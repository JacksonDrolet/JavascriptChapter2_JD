/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Jackson Drolet
      Date: 5/1/2026

      Filename: project02-04.js
 */

var CHICKEN_PRICE= 10.95
var HALIBUT_PRICE= 13.95
var BURGER_PRICE= 9.95
var SALMON_PRICE= 18.95
var SALAD_PRICE= 7.95
var SALES_TAX= 0.07


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 function calcTotal() {
   var itemTotal = 0;
   var item1 = document.getElementById("chicken");
   var item2 = document.getElementById("halibut");
   var item3 = document.getElementById("burger");
   var item4 = document.getElementById("salmon");
   var item5 = document.getElementById("salad");

   (item1.checked) ? (itemTotal += 8) : (itemTotal += 0);
   (item2.checked) ? (itemTotal += 9) : (itemTotal += 0);
   (item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
   (item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
   (item5.checked) ? (itemTotal += 6) : (itemTotal += 0);

   var orderTotal = itemTotal + (itemTotal * salesTaxRate);

   alert("Your order total is $" + orderTotal);
   }
   document.getElementById("submit").addEventListener("click", calcTotal, false);
