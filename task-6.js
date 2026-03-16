console.log("===== SMART CONSOLE CALCULATOR =====");

function startCalculator() {

    let choice = prompt(
        "Choose Operation:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Modulus\n" +
        "6. Power\n" +
        "7. Square Root\n" +
        "8. Exit"
    );

    if (choice === "8") {
        alert("Calculator Closed");
        console.log("Calculator Closed");
        return;
    }

    if (choice === "7") {
        let num = Number(prompt("Enter a number"));

        if (isNaN(num)) {
            alert("Invalid number");
        } 
        else if (num < 0) {
            alert("Cannot calculate square root of negative number");
        } 
        else {
            alert("Result: " + Math.sqrt(num));
            console.log("Square Root Result:", Math.sqrt(num));
        }

        startCalculator();
        return;
    }

    let num1 = Number(prompt("Enter first number"));
    let num2 = Number(prompt("Enter second number"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid number input");
        startCalculator();
        return;
    }

    let result;

    switch (choice) {

        case "1":
            result = num1 + num2;
            break;

        case "2":
            result = num1 - num2;
            break;

        case "3":
            result = num1 * num2;
            break;

        case "4":
            if (num2 === 0) {
                alert("Division by zero not allowed");
                startCalculator();
                return;
            }
            result = num1 / num2;
            break;

        case "5":
            result = num1 % num2;
            break;

        case "6":
            result = Math.pow(num1, num2);
            break;

        default:
            alert("Invalid choice");
            startCalculator();
            return;
    }

    alert("Result: " + result);
    console.log("Result:", result);

    startCalculator();
}

startCalculator();