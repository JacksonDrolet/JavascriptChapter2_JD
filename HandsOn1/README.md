Project 2.1 
	In this project you will create an application to convert temperature readings between Fahrenheit and Celsius and between Celsius and Fahrenheit. The formula to convert a Fahrenheit temperature to the Celsius scale is Celsius=(fahrenheit-32)/1.8 and the formula to convert a Celsius temperature to the Fahrenheit scale is Fahrenheit=Celsius x 1.8 + 32. Users will enter a value in a Celsuis or Fahrenheit input box, press the Tab key and have the other input box automatically show the temperature reading in the other scale. A preview of the completed page is shown in figure 2-30.

1. Use your code editor to open the project02-01_txt.html and project02-01_txt.js files from the js02 project01 folder. Enter your name and the date in the comment section of each file and save them as project02-01.html and project02-01.js respectively. 
2. Go to the project02-01.html file in your code editor and in the head section add a script element to load the project02-01.js file. Include the defer attribute to defer loading the external script file until the entire page is loaded. Study the contents of the HTML file and then save your changes.
3. Go to the project02-01.js file in your code editor. Create a function named FahrenheitToCelcius() containing a single parameter named degree. Insert a statement that returns the value of degree minus 32 and then divided by 1.8.
4. Create a function named CelciusToFahrenheit() containing a single parameter named degree. Insert a statement that returns the value of degree multiplied by 1.8 plus 32. 
5. Add an on change event handler to the element with the id “cValue”. Attach an anonymous function to the event handler and within the anonymous function do the following:
   
a. Declare a variable named cDegree equal to the value of the element with the id “cValue”.

b. Set the value of the element with the id “fValue” to the value returned by the CelciusToFairenheit() function by using cDegree as the parameter value.

7. Add an onchange event handler to the element with the id “fValue”. Attach an anonymous
	function to the event handler and within the anonymous function to do the following:

  a. Declare a variable named fDegree equal to the value of the element with the “fValue”.
  
  b. Set the value of the element with the id “cValue” to the value returned by the FahrenheitToCelcius() function using the fDegree as the parameter value.
  
9. Save your changes to the file. 
10. Open project02-01.html in your web browser. Verify that when you enter 45 in the Temp in the C box and press Tab a value of 113 appears in the Temp F box. Verify that when you enter 59 in the Temp in F box and press Tab a value of 15 appears in the Temp in C box. 

