//1. Functions
//1 Create a function greetUser(name) that prints 'Welcome to Stackly, {name}'.
// function greetUser(name) {
//     console.log("Welcome to Stackly, " + name);
// }
// greetUser("Koustubh");

//2 Create a function calculateSalary(basic, bonus) and return the total salary.
// function calculateSalary(basic, bonus) {
//     return basic + bonus;
// }
// let totalSalary = calculateSalary(70000, 15000);
// console.log("Total Salary is :- ", totalSalary);

//3 Create a function checkEvenOdd(num) that returns 'Even' or 'Odd'.
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// let result = checkEvenOdd(10);
// console.log("The number is :- ", result);

//4 Create a function findMax(a,b,c) that returns the largest number.
// function findMax(a, b, c) {
//     return Math.max(a, b, c);
// }
// let maxNumber = findMax(10, 20, 15);
// console.log("The largest number is :- ", maxNumber);

//5 Create a function calculateGST(price) that returns price + 18% GST.
// function calculateGST(price) {
//     return price + (price * 0.18);
// }
// let finalPrice = calculateGST(1000);
// console.log("Price after adding GST is :- ", finalPrice);

//6 Create a function login(username,password) that checks if username = 'admin' and password ='1234'
// function login(username, password) {
//     if (username === 'admin' && password === '1234') {
//         return "Login successful!";
//     } else {
//         return "Invalid credentials!";
//     }
// }
// let loginResult = login("admin", "1234");
// console.log(loginResult);

//------------------------------------------------------------------------------------------------------------


//2. Default Parameters

//1 Create a function createEmployee(name, role='Trainee') and print employee details.
// function createEmployee(name, role = 'Trainee') {
//     console.log("Employee Name: " + name);
//     console.log("Employee Role: " + role);
// }
// createEmployee("Koustubh");
// createEmployee("Koustubh","Software Engineer");

//2 Create a function calculateDiscount(price, discount=10).
// function calculateDiscount(price, discount = 10) {
//     let discountedPrice = price - (price * (discount / 100));
//     return discountedPrice;
// }
// let finalPrice = calculateDiscount(1000);
// console.log("Price after discount is :- ", finalPrice);
// let finalPriceWithCustomDiscount = calculateDiscount(1000, 20);
// console.log("Price after custom discount is :- ", finalPriceWithCustomDiscount);

//3 Create a function orderFood(item, quantity=1).
// function orderFood(item, quantity = 1) {
//     console.log("Ordered " + quantity + " " + item);
// }
// orderFood("Pizza");
// orderFood("Burger", 2);

//-------------------------------------------------------------------------------------------------------------

//3. Scope 

//1 Create a variable company = 'Stackly' outside a function and access it inside a function.
// let company = 'Stackly';
// function displayCompany() {
//     console.log("Company Name: " + company);
// }
// displayCompany();

//2 Create a block using if(true) and test var, let, const scope behavior.
// if (true) {
//     var varVariable = "I am a var variable";
//     let letVariable = "I am a let variable";
//     const constVariable = "I am a const variable";
// }
// console.log(varVariable); // Accessible outside the block
// console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
// console.log(constVariable); // Uncaught ReferenceError: constVariable is not defined

//3 Create a function where a variable inside the function cannot be accessed outside.
// function testScope() {
//     let localVariable = "I am a local variable";
//     console.log(localVariable); // Accessible inside the function
// }
// testScope();
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

//-------------------------------------------------------------------------------------------------------------

//4. Hoisting

//1 Print a variable before declaring using var and observe output.
// console.log(hoistedVar); // Output: undefined
// var hoistedVar = "I am hoisted";

//2 Try printing let variable before declaration and check error.
// console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
// let hoistedLet = "I am not hoisted";

 //3 Create a function call before function declaration and observe behavior.
// greet(); // Output: "Hello, World!"
// function greet() {
//     console.log("Hello, World!");
// }

//-------------------------------------------------------------------------------------------------------------

//5.Function Types

//1 Write a named function that prints 'Named Function Example'
// function namedFunction() {
//     console.log("Named Function Example");
// }
// namedFunction();

//2 Write an anonymous function stored in a variable to multiply two numbers.
// let multiply = function(a, b) {
//     return a * b;
// };
// let result = multiply(5, 3);
// console.log("Multiplication Result: " + result);

//3 Write an arrow function that returns square of a number.
// let square = (num) => num * num;
// let result = square(4);
// console.log("Square of the number is: " + result);

//-------------------------------------------------------------------------------------------------------------

//6. Callback & Higher Order Functions

//1 Create a function processData(callback) and call the callback.
// function processData(callback) {
//     console.log("Processing data...");
//     callback();
// }
// processData(function() {
//     console.log("Callback function executed!");
// });

//2 Create a function calculate(a,b,operation) where operation is callback for add/sub.
// function calculate(a, b, operation) {
//     return operation(a, b);
// }
// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// let sum = calculate(10, 5, add);
// console.log("Sum: " + sum);
// let difference = calculate(10, 5, subtract);
// console.log("Difference: " + difference);

//3 Create a callback function that prints 'Task Completed' after a calculation.
// function performTask(callback) {
//     console.log("Performing task...");
//     setTimeout(callback, 2000); // Simulating a delay for the task
// }
// performTask(function() {
//     console.log("Task Completed");
// });

//4 Create a function that accepts a callback and prints user data.
// function getUserData(callback) {
//     let userData = {
//         name: "Koustubh",
//         age: 25,
//         city: "Bangalore"
//     };
//     callback(userData);
// }
// getUserData(function(data) {
//     console.log("User Data:", data);
// });

//--------------------------------------------------------------------------------------------------------------

//7. Currying 

//1 Create a curried function add(a)(b)(c) that returns sum.
// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     }; };
// let result = add(2)(3)(4);   
// console.log("Sum: " + result);


//2 Create a curried function multiply(a)(b)(c).
// function multiply(a) {
//     return function(b) {
//         return function(c) {
//             return a * b * c;
//         };
//     };
// }
// let result = multiply(2)(3)(4);
// console.log("Product: " + result);

//--------------------------------------------------------------------------------------------------------------

//8. IIFE
//1 Write an IIFE that prints 'Website Loaded'.
// (function() {
//     console.log("Website Loaded");
// })();

//2 Create an IIFE that calculates discount price of a product
// let discountedPrice = (function(price, discount) {
//     return price - (price * (discount / 100));
// })(1000, 20);
// console.log("Discounted Price: " + discountedPrice);

//--------------------------------------------------------------------------------------------------------------

//9. Generator Functions 
//1 Create a generator that yields 3 random discount coupons.
// function* generateCoupons() {
//     yield "DISCOUNT10";
//     yield "DISCOUNT20";
//     yield "DISCOUNT30";
// }
// let couponGenerator = generateCoupons();
// console.log(couponGenerator.next().value); // Output: DISCOUNT10
// console.log(couponGenerator.next().value); // Output: DISCOUNT20
// console.log(couponGenerator.next().value); // Output: DISCOUNT30

//2 Create a generator that yields 3 motivational messages for developers.
// function* motivationalMessages() {
//     yield "Keep coding, keep growing!";
//     yield "Every bug is an opportunity to learn!";
//     yield "Code is like humor. When you have to explain it, it’s bad.";
// }
// let messageGenerator = motivationalMessages();
// console.log(messageGenerator.next().value); // Output: Keep coding, keep growing!
// console.log(messageGenerator.next().value); // Output: Every bug is an opportunity to learn!
// console.log(messageGenerator.next().value); // Output: Code is like humor. When you have to explain it, it’s bad.

//--------------------------------------------------------------------------------------------------------------

//10. Spread Operator
//1 Merge two arrays [1,2,3] and [4,5,6] using spread.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [...array1, ...array2];
// console.log("Merged Array: " + mergedArray);

//2 Clone an array [10,20,30] using spread operator.
// let originalArray = [10, 20, 30];
// let clonedArray = [...originalArray];
// console.log("Cloned Array: " + clonedArray);

//3 Merge two objects: {name:'John'} and {role:'Developer'}.
// let object1 = { name: 'John' };
// let object2 = { role: 'Developer' };
// let mergedObject = { ...object1, ...object2 };
// console.log("Merged Object: ", mergedObject);

//--------------------------------------------------------------------------------------------------------------

//11. Rest Operator
//1 Create a function sumAll(...numbers) that returns total sum
// function sumAll(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// let totalSum = sumAll(1, 2, 3, 4);
// console.log("Total Sum: " + totalSum);

//2 Create a function that prints first argument and rest arguments separately
// function printFirstAndRest(first, ...rest) {
//     console.log("First Argument: " + first);
//     console.log("Rest Arguments: " + rest);
// }
// printFirstAndRest("Hello", "World", "JavaScript", "Programming");

//3 Create a function that accepts multiple product prices and returns total bill.
// function calculateTotalBill(...prices) {
//     return prices.reduce((total, price) => total + price, 0);
// }
// let totalBill = calculateTotalBill(100, 200, 300);
// console.log("Total Bill: " + totalBill);

//--------------------------------------------------------------------------------------------------------------

//12. Destructuring
//1 Destructure array [10,20,30,40] into variables.
// let numbers = [10, 20, 30, 40];
// let [a, b, c, d] = numbers;
// console.log("Destructured Values: ", a, b, c, d);

//2 Destructure object {name:'Naveen', role:'Developer', salary:40000}.
// let employee = { name: 'Naveen', role: 'Developer', salary: 40000 };
// let { name, role, salary } = employee;
// console.log("Destructured Object: ", name, role, salary);

//3 Extract first and last element from array using destructuring.
// let arr = [1, 2, 3, 4, 5];
// let [first, , , , last] = arr;
// console.log("First Element: " + first);

//4 Destructure nested array [1,2,[3,4]].
// let nestedArray = [1, 2, [3, 4]];
// let [x, y, [z1, z2]] = nestedArray;
// console.log("Destructured Nested Array: ", x, y, z1, z2);

//---------------------------------------------------------------------------------------------------------------

//13. Array Manipulation
//1 Create an array [1,2,3,4,5] and perform push, pop, shift, unshift
// let arr = [1, 2, 3, 4, 5];
// arr.push(6); // [1, 2, 3, 4, 5, 6]
// arr.pop(); // [1, 2, 3, 4, 5]
// arr.shift(); // [2, 3, 4, 5]
// arr.unshift(0); // [0, 2, 3, 4, 5]
// console.log("Modified Array: ", arr);

//2 Use splice() to replace 40,50 with 4,5 in [1,2,3,40,50,6].
// let arr = [1, 2, 3, 40, 50, 6];
// arr.splice(3, 2, 4, 5);  
// console.log("Modified Array: ", arr);






