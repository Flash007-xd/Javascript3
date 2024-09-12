// var num =1;
// num = num ++
// console.log(num)




// var a=2;
// var b=3;
// var exp =a++ + a-- +  ++b + --b + a++ - a-- - b++ + a;
// console.log(exp);



// var firstName = prompt("Enter your FirstName");
// var lastName = prompt("Enter your LastName");

// console.log(firstName,lastName)


// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your Second Number");

// console.log(num1 + num2);


// var num1 = Number(prompt("Enter your first number"));
// var num2 = Number(prompt("Enter your Second Number"));

// console.log(num1 + num2);


// var num1 = parseInt(prompt("Enter your first number"));
// var num2 = parseInt(prompt("Enter your Second Number"));

// console.log(num1 + num2);



// __________________________________________CHAPTER (5 - 9)___________________________________________

// __________________________________________CHAPTER 5___________________________________________

// TASK 1 
var num1 = 3 
var num2 = 5
var result = num1 + num2
document.write("The sum of 3 and 5 is " + result+"<br>");


document.write("<hr>  ")

// TASK 2
var num1 = 3 
var num2 = 5
var SUB = num1 - num2
var MUL = num1 * num2 
var DIV = num1 / num2
var MOD = num1 % num2
document.write("The SUB of 3 and 5 is " + SUB+"<br>");
document.write("The MUL of 3 and 5 is " + MUL + "<br>")
document.write("The DIV of 3 and 5 is " + DIV + "<br>")
document.write("The MOD of 3 and 5 is " + MOD + "<br>")


document.write("<hr>  ")

// TASK 3
// a

var something = "HEllO";

// b

document.write("The Value after variable declaration is:"+something+ "<br>");

// C

var num1 = 5

// D


document.write("Initial Value :5 <br>")

// E
num2 = num1++

// F
document.write("Value after increment is:"+ num1+ "<br>")

// G
var numadd = num1 + 7

// H
document.write("Value after addition is:" + numadd+ "<br>")

// I
var numdec = --numadd

// J
document.write("Value after decrement is:" + numdec+ "<br>")

// K
var REM = numdec % 3
document.write("The Remainder is :"+ REM+"<br><br><br>")
document.write("<hr>  ")


// TASK 4
var m_ticket = 600 
fiveTickets = m_ticket*5

document.write("Total Cost to buy 5 tickets to a movie is "+fiveTickets+'PKR'+"<br>")

document.write("<hr>  ")


// TASK 5

var number = 5;

// Display a heading for the table
document.write("<h1>Multiplication Table of " + number + "</h1>");

// Loop through numbers 1 to 10 to generate the multiplication table
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br><br><br>")

document.write("<hr>  ")


// TASK 6
document.write("<h1>The Temperature Converter:</h1>");
var celsius = 25;

// FROM FAHRENHEIT TO CELSIUS
var fahrenheitFromCelsius = (celsius* 9/5) + 32;

document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

// FROM CELCIUS TO FAHRENHEIT
var fahrenheit = 86;

var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C"+"<br><br>");

document.write("<hr>")


// TASK 9




// __________________________________________CHAPTER 6___________________________________________

// TASK1
document.write("Result:<br>")
var number1 = 10
document.write("The value of a is:"+number1+"<br><br><br>");
const hr = document.createElement("hr");

num_1 = ++number1

document.write("The value of ++a is:"+ num_1+"<br>");
document.write("Now the Value of a is:" +num_1+"<br><br>");
 number2 = ++number1
document.write("The Value of a++ is:"+ num_1+"<br>")
document.write("")

number3 = number2++
document.write("Now the value of a is:"+ number3+"<br><br><br>");
num_3 = --number3

document.write("The value of --a is:"+ number3+"<br>");
document.write("Now the value of a is:"+ number3+"<br><br><br>");

document.write("The value of a--is:"+ number3+"<br>");
num_4 = number3--

document.write("Now the value of a is:"+ number3+"<br><br><br>");



