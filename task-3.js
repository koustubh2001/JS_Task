// // //Section-1  – If / If Else
// // // 1. Create a variable num = 15. If number is greater than 10 print 'Number is big'
// // let num = 15;
// // if (num > 10) {
// //     console.log("Number is big");
// // }
// // else{
// //     console.log("Number is small");
// // }

// // // 2. Create a variable age = 20. Check if the person is eligible to vote.
// // let age = 20;
// // if (age >= 18) {
// //     console.log("Eligible to vote");
// // } else {
// //     console.log("Not eligible to vote");
// // }

// // // 3. Create a variable temperature. If temperature > 30 print 'Hot' else print 'Cool'.
// // let temperature = 35;
// // if (temperature > 30) {
// //     console.log("Hot");
// // } else {
// //     console.log("Cool");
// // }

// // // 4. Check if a number is positive or negative.
// // let number = -5;
// // if (number >= 0) {
// //     console.log("Positive number");
// // } else {
// //     console.log("Negative number");
// // }

// // // 5. Check if a number is even or odd using if else
// // let num2 = 8;
// // if (num2 % 2 === 0) {
// //     console.log("Even number");
// // } else {
// //     console.log("Odd number");
// // }

// // //-----------------------------------------------------------------------------------------------

// // // Section-2 – Else If
// // //1. Create a variable marks. 90+ Grade A, 70+ Grade B, 50+ Grade C, Below 50 Fail
// // let marks = 85;
// // if (marks >= 90) {
// //     console.log("Grade A");
// // } else if (marks >= 70) {
// //     console.log("Grade B");
// // } else if (marks >= 50) {
// //     console.log("Grade C");
// // } else {
// //     console.log("Fail");
// // }

// // //2. Create variable hour. Print Morning / Afternoon / Evening / Night message.
// // let hour = 16;
// // if (hour < 12) {
// //     console.log("Morning");
// // } else if (hour < 17) {
// //     console.log("Afternoon");
// // } else if (hour < 20) {
// //     console.log("Evening");
// // } else {
// //     console.log("Night");
// // }

// // //3.Check if a number is 0, positive, or negative.
// // let number = -3;
// // if (number > 0) {
// //     console.log("Positive Number");
// // } else if (number < 0) {
// //     console.log("Negative Number");
// // } else {
// //     console.log("Number is Zero");
// // }

// // //4. Create variable score. If score ≥ 100 Winner, 50–99 Good, Below 50 Try again.
// // let score = 75;
// // if (score >= 100) {
// //     console.log("Winner");
// // } else if (score >= 50) {
// //     console.log("Good");
// // } else {
// //     console.log("Try again");
// // }

// // //5. Create a program to check largest among 3 numbers.
// // let a = 10;
// // let b = 25;
// // let c = 15;
// // if (a > b && a > c) {
// //     console.log("A is largest");
// // } else if (b > a && b > c) {
// //     console.log("B is largest");
// // } else {
// //     console.log("C is largest");
// // }

// // //----------------------------------------------------------------------------------------------

// // // Section-3 –  Switch Statement
// // //1.Create variable day = 1. Print day name using switch
// // let day = 1;
// // switch (day) {
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     case 7:
// //         console.log("Sunday");
// //         break;
// //     default:
// //         console.log("Invalid day");
// // }

// // //2. Create variable trafficLight. Red Stop, Yellow Ready, Green Go.
// // let trafficLight = "Red";
// // switch (trafficLight) {
// //     case "Red":
// //         console.log("Stop");
// //         break;
// //     case "Yellow":
// //         console.log("Ready");
// //         break;
// //     case "Green":
// //         console.log("Go");
// //         break;
// //     default:
// //         console.log("Invalid signal");
// // }

// // //3. Create variable month. Print season name using switch.
// // let month = 12;
// // switch (month) {
// //     case 12:
// //     case 1:
// //     case 2:
// //         console.log("Winter");
// //         break;

// //     case 3:
// //     case 4:
// //     case 5:
// //         console.log("Summer");
// //         break;

// //     case 6:
// //     case 7:
// //     case 8:
// //     case 9:
// //         console.log("Monsoon");
// //         break;

// //     case 10:
// //     case 11:
// //         console.log("Autumn");
// //         break;

// //     default:
// //         console.log("Invalid month");
// // }

// // //4.  Create variable role. Admin / User / Guest message.
// // let role = "Admin";
// // switch (role) {
// //     case "Admin":
// //         console.log("Welcome Admin");
// //         break;
// //     case "User":
// //         console.log("Welcome User");
// //         break;
// //     case "Guest":
// //         console.log("Welcome Guest");
// //         break;
// //     default:
// //         console.log("Unknown role");
// // }

// // //5. Create variable grade. Print performance message using switch.
// // let grade = "A";
// // switch (grade) {
// //     case "A":
// //         console.log("Excellent Performance");
// //         break;
// //     case "B":
// //         console.log("Good Performance");
// //         break;
// //     case "C":
// //         console.log("Average Performance");
// //         break;
// //     case "D":
// //         console.log("Needs Improvement");
// //         break;
// //     default:
// //         console.log("Invalid Grade");
// // }

// // //----------------------------------------------------------------------------------------------

// // // Section-4 – For Loop
// // //1. Print numbers 1 to 10.
// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// // }

// // //2Print numbers 10 to 1.
// // for (let i = 10; i >= 1; i--) {
// //     console.log(i);
// // }

// // //3. Print even numbers from 1 to 20.
// // for (let i = 1; i <= 20; i++) {
// //     if (i % 2 === 0) {
// //         console.log(i);
// //     }
// // }

// // //4. Print odd numbers from 1 to 20.
// // for (let i = 1; i <= 20; i++) {
// //     if (i % 2 !== 0) {
// //         console.log(i);
// //     }
// // }

// // //5. Print multiplication table of 5.
// // let number = 5;
// // for (let i = 1; i <= 10; i++) {
// //     console.log(number + " x " + i + " = " + (number * i));
// // }

// // //----------------------------------------------------------------------------------------------

// // // Section-5 – While Loop
// // //1.Print numbers 1 to 5 using while
// // let i = 1;
// // while (i <= 5) {
// //     console.log(i);
// //     i++;
// // }

// // //2. Print numbers 5 to 1 using while.
// // let j = 5;
// // while (j >= 1) {
// //     console.log(j);
// //     j--;
// // }

// // //3. Print even numbers from 1 to 10 using while.
// // let k = 1;
// // while (k <= 10) {
// //     if (k % 2 === 0) {
// //         console.log(k);
// //     }   
// //     k++;
// // }

// // //4. Print sum of numbers from 1 to 10.
// // let sum = 0;
// // let m = 1;
// // while (m <= 10) {
// //     sum += m;
// //     m++;
// // }
// // console.log("Sum of numbers from 1 to 10 is:", sum);

// // //5.Print square of numbers 1 to 5.
// // let n = 1;
// // while (n <= 5) {
// //     console.log("Square of " + n + " is: " + (n * n));
// //     n++;
// // }

// // //----------------------------------------------------------------------------------------------

// // // Section-6 – Do While Loop
// // //1. Print numbers 1 to 5 using do while.
// // let p = 1;
// // do {
// //     console.log(p);
// //     p++;
// // } while (p <= 5);

// // //2. Print numbers 5 to 1 using do while
// // let q = 5;
// // do {
// //     console.log(q);
// //     q--;
// // } while (q >= 1);

// // //3. Print multiples of 3 up to 30.
// // let r = 1;
// // do {
// //     if (r % 3 === 0) {
// //         console.log(r);
// //     }   
// //     r++;
// // } while (r <= 30);

// // //4. Print numbers divisible by 4 from 1 to 20.
// // let s = 1;
// // do {
// //     if (s % 4 === 0) {
// //         console.log(s);
// //     }   
// //     s++;
// // } while (s <= 20);

// // //5.Print numbers until value reaches 10
// // let t = 1;
// // do {
// //     console.log(t);
// //     t++;
// // } while (t <= 10);

// // //----------------------------------------------------------------------------------------------

// // // Section-7 – For Of
// // //1.Create string 'javascript' and print each character.
// // let str = "javascript";
// // for (let char of str) {
// //     console.log(char);
// // }

// // //2.Create array ['apple','banana','orange'] and print each fruit.
// // let fruits = ['apple', 'banana', 'orange'];
// // for (let fruit of fruits) {
// //     console.log(fruit);
// // }

// // //3. Count number of characters in string using for of.
// // let myString = "hello world";
// // let count = 0;
// // for (let char of myString) {
// //     count++;
// // }
// // console.log("Number of characters in string:", count);

// // //4. Print only vowels from a string.
// // let myStr = "hello world";
// // console.log("Vowels in the string:");
// // for (let char of myStr) {
// //     if ("aeiouAEIOU".includes(char)) {
// //         console.log(char);
// //     }   
// // }

// // //5. Print sum of numbers from an array [10,20,30]
// // let numbers = [10, 20, 30];
// // let total = 0;
// // for (let num of numbers) {
// //     total += num;
// // }
// // console.log("Sum of numbers in array:", total);

// // //----------------------------------------------------------------------------------------------

// <<<<<<< HEAD
// // // Section-8 – For In  (Object)
// // //1. Create object student with name, age, department. Print all values.
// // let student = {
// //     name: "John",
// //     age: 22,
// //     department: "Computer Science"
// // };
// // for (let key in student) {
// //     console.log(student[key]);
// // }
// =======
// // Section-8 – For In  (Object)
// //1. Create object student with name, age, department. Print all values.
// let student = {
//     name: "Koustubh",
//     age: 22,
//     department: "Computer Science"
// };
// for (let key in student) {
//     console.log(student[key]);
// }
// >>>>>>> 73942771e393929c1bc696f07db79cb8014ebbb0

// // //2.Print all keys of an object using for in
// // let employee = {
// //     id: 101,
// //     name: "Alice",      
// //     position: "Manager"
// // };
// // console.log("Keys of employee object:");
// // for (let key in employee) {
// //     console.log(key);
// // }

// // //3. Print key and value together
// // let car = {
// //     make: "Toyota",
// //     model: "Camry",
// //     year: 2020
// // };
// // console.log("Car details:");
// // for (let key in car) {
// //     console.log(key + ": " + car[key]);
// // }   

// // //----------------------------------------------------------------------------------------------

// // // Section-9 –  Functions
// // //1.Create function add(a,b) and return addition.
// // function add(a, b) {
// //     return a + b;
// // }
// // console.log("Addition of 5 and 3 is:", add(5, 3));

// // //2. Create function square(num) and return square of number.
// // function square(num) {
// //     return num * num;
// // }
// // console.log("Square of 4 is:", square(4));


