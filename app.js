// Chapter 21 - 25
// Chapter 21 - 25
// Chapter 21 - 25

// Task 1

// var firstName = prompt("Enter Your First Name ");
// var lastName = prompt("Enter Your Last Name ");
// var fullName = (firstName + " " + lastName);

// document.write(fullName);


// Task 2

// var mobile = prompt("What is your favorite Mobile Phone model");
// var len = mobile.length;

// document.write("My favorite phone is: " + mobile + "<br>");
// document.write("Length of string:  " + len);


// Task 3 

// var word = "Pakistani";
// var find = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + find);


// Task 4

// var word2 = "Hello World";
// var find2 = word2.lastIndexOf("l");

// document.write("String: " + word2 + "<br>");
// document.write("Last index of 'l': " + find2);


// Task 5


// var word3 = "Pakistani";
// var find3 = word3.charAt(3);

// document.write("String: " + word3 + "<br>");
// document.write("Charater at index 3: " + find3);




// Task 6


// var firstName = prompt("Enter Your First Name ");
// var lastName = prompt("Enter Your Last Name ");
// var fullName = firstName.concat(" " + lastName);

// document.write(fullName);



// Task 7

// var city = "Hyderabad";
// var replace = city.replace("Hyder",  "Islam");

// document.write("City: " + city  + "<br>");
// document.write("After replacement: " + replace);


// Task 8

// var message = "Ali <b>and</b> Sami are best friends. They play cricket <b>and</b> football together." ;
// var replaceAll = message.replace(/and/g, "&");

// document.write("Message with and" + "<br>" + message  + "<br>");
// document.write("Message with &" + "<br>" + replaceAll);


// Task 9

// var num = "472";
// var num2  = parseInt(num);

// document.write("Value: " + num + "<br>");
// document.write("Type: " + "String" + "<br>");
// document.write("Value: " + num2 + "<br>");
// document.write("Type: " + "Number" + "<br>");


// Task 10

// var input1 = prompt("Enter any word in Lowercase to convert in Uppercase");
// var convert1 = input1.toUpperCase();

// document.write("User input: " + input1 + "<br>");
// document.write("Upper case: " + convert1);


// Task 11

// var input2 = prompt("Enter any word in Lowercase to convert in title case");
// var firstChar = input2.slice(0, 1);
// var otherChar = input2.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();

// document.write("User input: " + input2 + "<br>");
// document.write("Title Case: " + firstChar + otherChar );


// Task 12

// var num = 35.36 ;
// var numString = num.toString();
// var replace = numString.replace(".",  "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + replace);



// Task 13

// var char = prompt("Please Enter Your Username");

// for (let i = 0; i <= char.length; i++) {
//     var ch = char.charCodeAt(i);
//     if (ch==33 || ch==44 || ch==46 || ch==64) {
//         document.write ("Please enter a valid username.");
//         var matchfound = 1; 
//         break
   
//     }
// }
//                if(matchfound !== 1) {
//                     document.write ("Your username is valid, thanks");
//                }


// Task 14


// var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?", 'cookie');
// user = user.toLowerCase();

// var bake = ["cake", "apple pie", "cookie", "chips", "patties"];
// var check = bake.indexOf(user);
// // document.write (check);

// for (let i = check; i <= bake.length; i++) {
//     if (bake[i] === user) {
//         document.write (user + " is <b>avaiable</b> at index " + check + " in our bakery" + "<br>");
//         break;
//     } 
//     else {
//         document.write ("We are sorry." + user + " is <b> not avaiable</b> in our bakery");
//         break;
//     }
// }


// Task 15

// var pass = prompt("Please Enter Your password" );
// var ch = pass.charCodeAt(0);

// document.write("Entered password:" + pass + "<br>");

//     if (ch>=48 && ch<=57){
//     document.write("Password can not start with a number. <br> Please Enter a valid password" );
// }

//     else if ( pass.length<=6 ){
//     document.write("Password must be at least 6 characters long.<br> Please Enter a valid password" );
// }


//     else if (ch>=90 || ch<=122 && (ch>=48 && ch<=57)){
// 	document.write("Your password is valid.");
// }


//     else {
//     document.write ("Please Enter a valid password <br> Your password should contain number after letters");
// }



// Task 16 

// var university = "University of Karachi";

// var ar = university.split('');
// for (let i = 0; i < ar.length; i++) {
//     document.write (ar[i] + "<br>");
    
// }


// Task 17

// var user = prompt("Please Enter any word");
// var lastChar = user.charAt(user.length-1);

// document.write("User input: " + user + "<br>");
// document.write("Last character of input: " + lastChar);



// Task 18

// var para = "The quick brown fox jumps over the lazy dog";
// convert = para.toLowerCase();
// var count = (convert.match(/the/g) || []).length;

// document.write(para + "<br>")
// document.write("The are " + count + " occurrence(s) of word 'the'");


// Chapter 26-30
// Chapter 26-30
// Chapter 26-30

// Task 1

// var num = 3.45214;
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write('number: ' + num + "<br>");
// document.write('round off value: ' + round + "<br>");
// document.write('floor value: ' + floor + "<br>");
// document.write('ceil value: ' + ceil + "<br>");


// Task 2

// var num1 = -2.673;
// var round1 = Math.round(num1);
// var floor1 = Math.floor(num1);
// var ceil1 = Math.ceil(num1);

// document.write('number: ' + num1 + "<br>");
// document.write('round off value: ' + round1 + "<br>");
// document.write('floor value: ' + floor1 + "<br>");
// document.write('ceil value: ' + ceil1 + "<br>");


// Task 3

// var num2 = -4;
// var abs = Math.abs(num2);

// document.write("The absolute value of " + num2 + " is " + abs);


// Task 4

// var dice = Math.random();
// var random = (dice * 6) + 1;
// var num = Math.floor(random);


// document.write ("random dice value: " + num);


// Task 5

// var toss = Math.random();
// var win = (toss * 2) + 1;
// var result = Math.floor(win);

// if (result === 2) {
//     document.write(result + "<br> random coin value: Heads");
// }
// else {
//     document.write(result + "<br> random coin value: Tails");
    
// }


// Task 6

// var gen = Math.random();
// var random2 = (gen * 100) ;
// var num2 = Math.floor(random2);


// document.write ("random number between 1 to 100: " + num2);


// Task 7

// var user1 = prompt("Enter your weight in kilograms");
// var result1 = parseFloat(user1);

// document.write("The weight of user is " + result1 + " kilograms");


// Task 8

// var user2 = prompt("Enter a number between 1 to 10");
// var result2 = parseInt(user2);
// var gen1 = Math.random();
// var random3 = (gen1 * 10) + 1;
// var num3 = Math.floor(random3);

// if (result2 === num3) {
//     alert("Congratulation! Your number is same");
// }

// else {
//     alert("Try again!");
    
// }

// document.write("User input no. is: " + result2 + "<br>");
// document.write("Random no. is: " + num3);


// Chapter No. 31-34
// Chapter No. 31-34
// Chapter No. 31-34


// Task 1 

// var date = new Date();

// document.write("Current date and time " + "<br>" + date);


// Task 2

// var month = ["January", "February", "March", "April", "May", "June","July", "August","September", "October", "November", "December"];

// var date2 = new Date();
// document.write("Current month: " + month[date2.getMonth()]);


// Task 3

// var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
// document.write("Today is " + weekday);


// Task 4
// var today = new Date();
// var result = (today.getDay());
// if (result == [0] || result == [6]) {
//     document.write("It's Fun Day");

// }
// else {
//     document.write ("Today is another day");
// }



// Task 5

// var today = new Date();
// var result = (today.getDate());
// if (result <=15) {
//     document.write("First fifteen days of the month");

// }
// else {
//     document.write ("Last days of the month");
// }


// Task 6

// var today = new Date();
// var previous = today.getTime();
// // var toPerv = today - previous;

// document.write ("Current Date: " + today + "<br>");
// document.write ("Elapsed milliseconds since January 1 1970: " + previous + "<br>");
// document.write ("Elapsed minutes since January 1 1970: " + ( previous/ (1000*60*60)));


// Task 7

// var d = new Date();
// var time = d.getHours();
// document.write (time);
// if (time>=0 && time<=12) {
//     document.write ("It's AM");
// } 
// else if(time>12 && time<=23){
//     document.write ("It's PM");
// }


// Task 8

// var laterDate = new Date("Dec 31, 2020 00:00:00");

// document.write("Later date: " + laterDate);


// Task 9

// var ramazan = new Date("June 18, 2015");
// var time1 = ramazan.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - time1;
// var passed = Math.floor(diff/(1000*60*60*24))
// document.write(passed + " days have passed since 1st Ramadan, 2015");


// Task 10 

// var first =new Date("Dec 05, 2015 22:50:16");
// var firstmili = first.getTime();
// var second =new Date("Jan 01, 2015");
// var secondmili = second.getTime();
// var diff = firstmili - secondmili;
// var passed = Math.floor(diff/(1000*60));

// document.write("On reference date " + first + "<br>")
// document.write(passed + " seconds had passed since beginning of 2015");


// Task 11

// var currentTime = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);


// document.write("current date: " + currentTime + "<br>");
// document.write("1 hour ago, it was  " + time);


// Task 12

// var currentTime = new Date();
// var time = new Date();
// var extract = time.setFullYear(time.getFullYear() - 100);


// document.write("current date: " + currentTime + "<br>");
// document.write("100 years back, it was  " + time);



// Task 13

// var userAge = +prompt("Enter Your Age", "21" );
// var date = new Date();
// var birthYr = date.getFullYear() - userAge;

// document.write("Your age is " + userAge + "<br>");
// document.write("Your birth year is " + birthYr + "<br>");


// Task 14

// var customer = prompt("Enter Customer Name", "ABC Customer");
// var month = ["January", "February", "March", "April", "May", "June","July", "August","September", "October", "November", "December"];
// var date2 = new Date();
// var unit = +prompt("Enter Unit Numbers");
// var chrUnit = +prompt("Enter Unit Charges");
// var late = 350;

// document.write ("<h1>K-Electric Bill </h1>")
// document.write ("Customer Name: " + `<b> ${customer} </b>` + "<br>");
// document.write("Month: " + "<b>" + month[date2.getMonth()] + "</b>" + "<br>");
// document.write ("Number of units: " + `<b> ${unit} </b>` + "<br>");
// document.write ("Charges per unit: " + `<b> ${chrUnit} </b>` + "<br><br>");

// document.write ("Net Amount Payable (within Due Date): " + `<b> ${unit*chrUnit} </b>` + "<br>");
// document.write ("Late payment surcharge: " + `<b> ${late} </b>` + "<br>");
// document.write ("Gross Amount Payable (after Due Date): " + `<b> ${unit*chrUnit+late} </b>` + "<br>");


// Chapter No. 35-38
// Chapter No. 35-38
// Chapter No. 35-38

// Task 1

// function time() {
//     var date = new Date();
//     document.write (date);
// }

// time();



// Task 2 


// function fullname() {
//     var firstName = prompt ("Enter your first name");
//     var lastName = prompt ("Enter your Last name");
//     document.write("Welcome " + firstName + " " + lastName)
// }

// fullname();


// Task 3

// function num(a,b) {
//     return a + b
// }

// var num1 = +prompt("Enter first number", '2');
// var num2 = +prompt("Enter second number", '3');

// document.write (num(num1,num2));


// Task 4

// function calc(num1,oper,num2) {
//     if (oper === "+") {
//         return num1 + num2
//     } 
//     else if (oper === "-") {
//         return num1 - num2
//     } 
//     else if (oper === "*") {
//         return num1 * num2
//     } 
//     else if (oper === "/") {
//         return num1 / num2
//     } 
//     else {
//         return "Incorrect Operator!"
//     }
// }

// var num1 = +prompt("Enter first Number" );
// var num2 = +prompt("Enter second Number" );
// var oper = prompt("Enter operator" );

// document.write (calc(num1,oper,num2));



// Task 5

// function square()
// {
// var n = +prompt ("Enter the limit 'n' to generate the table of numbers from 1 to n:");
// var msg = "";
// var res = "0";
 
// for (var x= 1; x<=n; x++)
// {
// res = x * x;
// msg = msg + " " + x + " * "+ x + " = " + res + "<br>";
// }
 
// document.write (msg);
// }

// square();


// Task 6


// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = +prompt("Enter any number");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

// Task 7


// function sum() {
//     var FirstNumber = 1;
//     var SecondNumber = prompt("Enter second number");

//     var result = 0;

//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//       result += i;  
//     }

//     document.write(result);
// }

// sum(); // if input is 4 (1+2+3+4 = 10) output = 10


// Task 8