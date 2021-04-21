var minInput = document.querySelector('.randomizer__input-min');
var maxInput = document.querySelector('.randomizer__input-max');
var text = document.querySelector('.randomizer__text');
var btnGenerate = document.querySelector('.randomizer__btn-generate');
var btnReset = document.querySelector('.randomizer__btn-reset');
var array = [];


function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function randomizer() {
    var min = +(minInput.value);
    var max = +(maxInput.value);
    if(max < min || min % 1 !== 0 || max % 1 !== 0) {
        text.innerHTML = 'Generate number: Error incorrect number';
        return;
    }
    // min = 5, max = 10, 5,6,7,8,9,10
    if(array.length === max - min + 1) {
        text.innerHTML = 'Generate number: Elements are over';
        btnGenerate.disabled = true;
        return;
    } 
    var random = getRandom(min, max);
    while(array.indexOf(random) !== - 1) {
        random = getRandom(min, max);
    }
    array.push(random);
    text.innerHTML = 'Generate number: ' + random;
}

function reset() {
    minInput.value = '';
    maxInput.value = '';
    btnGenerate.disabled = false;
    text.innerHTML = 'Generate number: ';
    array = [];
}

document.querySelector('.randomizer__btn-generate').addEventListener('click', randomizer);
document.querySelector('.randomizer__btn-reset').addEventListener('click', reset);


