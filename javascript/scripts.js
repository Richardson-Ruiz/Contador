var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

let incrementar = document.getElementById("increment");
let decrementar = document.getElementById("decrement");

incrementar.addEventListener('click', increment);
decrementar.addEventListener('click', decrement);


