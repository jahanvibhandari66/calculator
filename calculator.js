function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteChar() {
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("screen").value += value;
}

function appendOperator(operator) {
    document.getElementById("screen").value += operator;
}

function appendFunction(func) {
    document.getElementById("screen").value += func;
}

function calculateResult() {
    let expression = document.getElementById("screen").value;
    expression = expression.replace(/√/g, "Math.sqrt");
    expression = expression.replace(/x\^y/g, "Math.pow");
    try {
        let result = eval(expression);
        document.getElementById("screen").value = result;
    } catch (error) {
        alert("Invalid Input");
    }
}