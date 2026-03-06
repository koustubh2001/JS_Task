// //Task-1 Arithmatic Operations
// //Section 1
// let a = 25;
// let b = 4;
// console.log("Addition: " + (a + b));//29
// console.log("Subtraction: " + (a - b));//21
// console.log("Multiplication: " + (a * b));//100
// console.log("Division: " + (a / b));6.25

// console.log(100 % 30);//10
// console.log(7 ** 2);//49
// console.log(2 ** 5);//32

// let num = 50;
// console.log(num / 5);//10
// console.log(45 % 6);//3
// console.log(0.5 * 8);//4
// console.log(75 - 200);//-125
// console.log(10 + 20 + 30);//60
// console.log(9 % 2);//1

// ----------------------------------------------------------------------

// Section 2
// let a = 5
// console.log(a++)//5
// console.log(a)//6

// let a = 5
// console.log(++a)//6
// console.log(a)//6

// let a = 10
// let b = a++
// console.log(a, b)//11 10

// let a = 10
// let b = ++a
// console.log(a, b)//11 11

// let a = 1
// let b = a++ + a++
// console.log(a, b)//3 4

// let a = 1
// let b = ++a + ++a
// console.log(a, b)//3 8

// let a = 3
// a = a++
// console.log(a)//3

// let a = 3
// a = ++a
// console.log(a)//4

// let x = 5
// let y = --x
// console.log(x, y)//4 4

// let x = 5
// let y = x--
// console.log(x, y)//4 5

// let a = 2
// let b = a++ + ++a + a++
// console.log(a, b)//5 12

// let a = 4
// let b = --a + a-- + --a
// console.log(a, b)//2 10

// let a = 1
// let b = ++a + a++ + ++a
// console.log(a, b)//5 12

// let a = 5
// let b = a++ + a++ + a++
// console.log(a, b)//8 18

// let a = 10
// a += a++
// console.log(a)//21

// ---------------------------------------------------------------------

// Section 3
// let a = 10;
// a += 5;
// console.log(a);//15

// let a = 20;
// a -= 8;
// console.log(a);//12

// let a = 20;
// a -= 8;
// console.log(a);//12

// let a = 40;
// a /= 5;
// console.log(a);//8

// let a = 25;
// a %= 4;
// console.log(a);//1

// let a = 5
// a += 3
// a *= 2
// console.log(a)//16

// let a = 10
// a -= 2
// a /= 4
// console.log(a)//2

// let a = 8
// a %= 3
// console.log(a)//2

// let a = 6
// a += a
// console.log(a)//12

// let a = 2
// a *= a += 3
// console.log(a)//50

// --------------------------------------------------------------------

// Section 4

// console.log(5 == "5");//true
// console.log(5 == "5");//true
// console.log(0 == false);//true
// console.log(0 === false);//false
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log("10" > 5);//true
// console.log("2" > "10");//true
// console.log(true == 1);//true
// console.log(true === 1);//false

// ---------------------------------------------------------------------

// Section 5

// console.log(true && false);//false
// console.log(true && false);//false
// console.log(true || false);//true
// console.log(false || false); //false
// console.log(!true);//false
// console.log(!(5 > 2));//false
// console.log(5 > 3 && 10 > 5); //true
// console.log(5 > 3 && 10 < 5); //false
// console.log(5 < 3 || 10 < 5); //false
// console.log(5 < 3 || 10 > 5); //true

// ----------------------------------------------------------------------

// Section 6

// let age = 20;
// console.log(age >= 18 ? "Adult" : "Minor");//Adult

// let marks = 45;
// console.log(marks >= 50 ? "Pass" : "Fail");//Fail

// let number = 7;
// console.log(number % 2 == 0 ? "Even" : "Odd");//Odd

// let marks = 82;
// let grade = marks >= 90 ? "A" :
//             marks >= 75 ? "B" :
//             marks >= 50 ? "C" :
//             "Fail";
// console.log(grade);//A

// let num = -10;
// console.log(num >= 0 ? "Positive" : "Negative");//Negative

// ----------------------------------------------------------------------

// Section 7

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + str2);//HelloWorld

// let firstName = "Koustubh";
// let lastName = "Rayamane";
// console.log(firstName + " " + lastName);//Koustubh Rayamane

// let firstName = "Koustubh";
// let lastName = "Rayamane";
// console.log(`${firstName} ${lastName}`);//Koustubh Rayamane

// console.log("10" + 5);//105
// console.log(5 + "10");//510

// --------------------------------------------------------------

// Section 8

// console.log("5" + 2);//52
// console.log("5" + 2);//52
// console.log("5" - 2);//3
// console.log("5" * 2);//10
// console.log(true + 1);//2

// --------------------------------------------------------------

// Section 9
// console.log(Number("123"));//123
// console.log(Number("abc"));//NaN
// console.log(Number(true));//1
// console.log(Boolean(""));//false
// console.log(Boolean(""));//false

// --------------------------------------------------------------

// Section 10
// 1.Explain difference between == and ===
// == (Loose Equality)
// Compares values only
// Performs type conversion (coercion)

// === (Strict Equality)
// Compares value AND type
// No type conversion

// 2.Explain difference between a++ and ++a
// a++ (Post-increment)
// Use value first
// Then increase

// a++ (Post-increment)
// Use value first
// Then increase

// 3. List all falsy values
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// 4. Explain why "5" - 2 works but "5" + 2 behaves differently
// "5" - 2
// - forces numeric conversion
// "5" becomes 5
// Result: 3

// "5" + 2
// + operator is special
// If one operand is string →concatenation happens
// Result: "52"


// 5. Explain why null == undefined is true
// When using ==:
// null and undefined are considered equal
// But they are NOT equal to anything else















