// TODO: Add a number of possible raffle;

const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');
const qtRaffle = document.getElementById('quantity_raffle');
const btnResult = document.getElementById('raffle');
const currentResult = document.getElementById('result');

// function that creates random numbers
function funcRaffle() {
    let valueMin = parseInt(inputMin.value);
    let valueMax = parseInt(inputMax.value);
    let qtRaffleNum = parseInt(qtRaffle.value);

    if (qtRaffleNum > 100000) {
        qtRaffleNum = 100000;
        document.getElementById('quantity_raffle').value = qtRaffleNum;
        return alert('O valor máximo números sorteados permitido é 100000!');
    }

    if (valueMax > 99999) {
        valueMax = 99999;
        document.getElementById('max').value = valueMax;
        return alert('O valor máximo permitido é 99999!');
    }

    if (valueMin > 99998) {
        valueMin = 99998;
        document.getElementById('min').value = valueMin;
        return alert('O valor mínimo não pode ser maior que 99998!');
    }    

    if (isNaN(valueMin)) {
        valueMin = 1;
        document.getElementById('min').value = valueMin;
    }

    if (isNaN(valueMax)) {
        valueMax = 100;
        document.getElementById('max').value = valueMax;
    }

    if (isNaN(qtRaffleNum) || qtRaffleNum <= 0) {
        qtRaffleNum = 1;
        document.getElementById('quantity_raffle').value = qtRaffleNum;
    }

    if (valueMin >= valueMax) {
        valueMax = valueMin + 1;
        document.getElementById('max').value = valueMax;
    }

    valueMax = valueMax + 1;
    let outputResult = "";
    for (i = 0; i < qtRaffleNum; i++) {
        const resultCalc = Math.floor(Math.random() * (valueMax - valueMin)) + valueMin; // Generating a random integer between two values
        // Math.random() = generates a random numeric less than the multiply number
        // Math.floor() = to change the number to a integer
        outputResult = outputResult + ' ' + resultCalc;

    }
    currentResult.textContent = outputResult;
}

btnResult.addEventListener('click', funcRaffle);
