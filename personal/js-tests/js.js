
function add7(num) {
    return num + 7;
}

let multiply = function(x, y) {
    return x*y;
}

let capitalize = (inputString) => {
    inputString = inputString.toLowerCase();
    inputString = inputString[0].toUpperCase() + inputString.slice(1);
    return inputString;
}

let lastLetter = function(inputString) {
    let lastChar = inputString.at(-1);
    return lastChar;
}