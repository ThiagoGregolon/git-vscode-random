// TODO: Raffle many values

const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');
const btnResult = document.getElementById('raffle');
const currentResult = document.getElementById('result');

// function that creates random numbers
function funcRaffle() {
    let valueMin = parseInt(inputMin.value);
    let valueMax = parseInt(inputMax.value);

    if (isNaN(valueMin)) {
        valueMin = 1;
        document.getElementById('min').value = valueMin;
    }

    if (isNaN(valueMax)) {
        valueMax = 100;
        document.getElementById('max').value = valueMax;
    }

    if (valueMin >= valueMax) {
        valueMax = valueMin + 1;
        document.getElementById('max').value = valueMax;
    }

    valueMax = valueMax + 1;
    const resultCalc = Math.floor(Math.random() * (valueMax - valueMin)) + valueMin; // Generating a random integer between two values
    // Math.random() = generates a random numeric less than the multiply number
    // Math.floor() = to change the number to a integer

    currentResult.textContent = resultCalc;
}

btnResult.addEventListener('click', funcRaffle);

