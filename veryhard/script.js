




// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

function calculator() {
    var num1 = prompt("number please");
    var num2 = prompt("anotha number please");  
    var op = prompt("operator please");

    if (op == "+"){
       console.log("${num1} ${op} ${num2} ${add(num1, num2)} "); 
    }

    if (op == "-"){
       console.log("${num1} ${op} ${num2} ${subtract(num1, num2)} "); 
    }

    if (op == "*"){
       console.log("${num1} ${op} ${num2} ${multiply(num1, num2)} "); 
    }

    if (op == "/"){
       console.log("${num1} ${op} ${num2} ${divide(num1, num2)} "); 
    }
    
}
