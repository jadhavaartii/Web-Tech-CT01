function show(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    var x = document.getElementById("result");

    try {
        x.value = eval(x.value);
    }
    catch {
        x.value = "Error";
    }
}
