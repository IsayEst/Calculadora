// Get the display element
let display = document.getElementById("display");

// cuando yo presione C limpio el display
function clearDisplay() {
    display.value = ""; 
}
// cuando yo presione un numero o un operador lo agrego al display
function appendToDisplay(value) {
    display.value += value;
}
// cuando yo presione un operador lo agrego al display
function appendToOperator(operator) {
    if (display.value !== "") {
        display.value += " " + operator + " ";
    }
}
// cuando yo presione el boton de igual calculo el resultado
function calculateResult() {
    try {
        let resul = eval(display.value)
        if (!isFinite(resul)) {
            throw new Error("Resultado con error");
        }
        display.value = resul;
    } catch (error) {
        display.value = "Error";
    }
}

// Funciona para manejar eventos con el teclado
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if(!isNaN(key)) {
        appendToDisplay(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        appendToOperator(key);
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }else if (key === "c" || key === "C") {
        clearDisplay();
    }else if (key === "."){
        appendToDisplay(".");
    }
})