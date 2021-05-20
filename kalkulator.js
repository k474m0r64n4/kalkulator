var a = prompt("unesite prvi broj");
var operator = prompt("unesite operator +, -, *, /");
var b = prompt("unesite drugi broj");

switch (operator) {
    case "+":
        alert("Rezultat je " + (parseInt(a)+parseInt(b)));
        break;
    case "-":
        alert("Rezultat je " + (parseInt(a)-parseInt(b)));
        break;
    case "*":
        alert("Rezultat je " + (parseInt(a)*parseInt(b)));
        break;
    case "/":
        alert("Rezultat je " + (parseInt(a)/parseInt(b)));
        break;
}


