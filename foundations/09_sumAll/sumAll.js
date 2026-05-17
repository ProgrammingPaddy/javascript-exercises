const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let high = Math.max(num1, num2);
    let low = Math.min(num1, num2);
    let newNum = 0;
    for (let i = low; i <= high; i++){
        newNum += i;
    }
    return newNum;
};

// Do not edit below this line
module.exports = sumAll;
