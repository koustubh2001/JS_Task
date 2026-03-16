let employees = [
 {name:"Ravi", salary:25000},
 {name:"Meena", salary:60000},
 {name:"Arun", salary:45000},
 {name:"Priya", salary:80000},
 {name:"John", salary:30000}
];
// Salary > 40000
let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);
// First salary > 70000
let firstHigh = employees.find(emp => emp.salary > 70000);
console.log(firstHigh);
// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);
// Any salary < 20000
let anyLow = employees.some(emp => emp.salary < 20000);
console.log(anyLow);
// All salary > 20000
let allAbove = employees.every(emp => emp.salary > 20000);
console.log(allAbove);

//-------------------------------------------------------------------------------------

let products = ["laptop","mobile","tablet","smartwatch","mobile"];

console.log(products.includes("tablet"));
console.log(products.indexOf("mobile"));
console.log(products.lastIndexOf("mobile"));
console.log(products.includes("camera"));

//-------------------------------------------------------------------------------------

let username = "   naveenkumar   ";

let clean = username.trim();
console.log(clean);

console.log(clean.toUpperCase());
console.log(clean.toLowerCase());

console.log(clean.slice(0,6));

//-------------------------------------------------------------------------------------

let games = ["cricket","football","hockey","tennis"];
// forEach
games.forEach(game => console.log(game));
// map
let newGames = games.map(game => "Game : " + game);
console.log(newGames);

//--------------------------------------------------------------------------------------

let marks = [45,90,23,67,88,12];

let asc = [...marks].sort((a,b)=>a-b);
console.log(asc);
let desc = [...marks].sort((a,b)=>b-a);
console.log(desc);
console.log([...marks].reverse());

//--------------------------------------------------------------------------------------

let salaries = [10000,20000,30000,40000];

let total = salaries.reduce((sum,val)=>sum+val,0);
console.log("Total:", total);

let avg = total / salaries.length;
console.log("Average:", avg);

//--------------------------------------------------------------------------------------

let url = "www-stackly-com";

let result = url.split("-");
console.log(result);

//  --------------------------------------------------------------------------------------
let role = "python developer";

let newRole = role.replace("python","javascript");
console.log(newRole);

console.log(role.startsWith("python"));
console.log(role.endsWith("developer"));

//--------------------------------------------------------------------------------------

let data = [1,2,[3,4,[5,6]]];

let flatData = data.flat(2);
console.log(flatData);

//  --------------------------------------------------------------------------------------

let sports = ["cricket","football","tennis","hockey","golf"];

console.log(sports.slice(1,3));
console.log(sports.slice(0,3));