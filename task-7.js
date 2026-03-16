// //1 Digital Clock (Real-Time)
// setInterval(() => {
//     let now = new Date();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now.getSeconds();
//     console.log(`${h}:${m}:${s}`);
// }, 1000);

// //2 Age Calculator
// let birthYear = prompt("Enter your birth year:");
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log("Your age is", age);

// //3 Website Loading Simulation
// console.log("Website Loading...");
// setTimeout(() => {
//     console.log("Website Loaded Successfully");
// }, 3000);

// //4 Automatic Notification System
// let reminder = setInterval(() => {
//     console.log("Take a short break");
// }, 5000);
// setTimeout(() => {
//     clearInterval(reminder);
//     console.log("Reminder stopped");
// }, 20000);

// //5 Automatic Notification System
// let reminder = setInterval(() => {
//     console.log("Take a short break");
// }, 5000);
// setTimeout(() => {
//     clearInterval(reminder);
//     console.log("Reminder stopped");
// }, 20000);

// //6 API Data Viewer
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(res => res.json())
// .then(data => {
//     data.forEach(todo => {
//         console.log(todo.title);
//     });
// });

// //7 API Data Viewer
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(res => res.json())
// .then(data => {
//     data.forEach(todo => {
//         console.log(todo.title);
//     });
// });

// //8 Completed Task Filter
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(res => res.json())
// .then(data => {
//     let completed = data.filter(todo => todo.completed === true);
//     completed.forEach(todo => {
//         console.log(todo.title);
//     });
// });

// //9 Meeting Countdown Timer
// let time = 10;
// let timer = setInterval(() => {

//     console.log(time);
//     time--;
//     if(time < 0){
//         clearInterval(timer);
//         console.log("Meeting Started");
//     }
// }, 1000);

// //10 Meeting Countdown Timer
// let time = 10;
// let timer = setInterval(() => {
//     console.log(time);
//     time--;
//     if(time < 0){
//         clearInterval(timer);
//         console.log("Meeting Started");
//     }
// }, 1000);