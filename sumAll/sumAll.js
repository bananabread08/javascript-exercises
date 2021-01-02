const sumAll = function(min, max) {
    let summation = 0;
    let temp = 0;
    if(min < 0 || max <0) return 'ERROR';
    if(Number.isInteger(min) === false || Number.isInteger(max) === false) return 'ERROR';

    if(min > max){
        temp = min;
        min = max;
        max = temp;
    }
    
    for(let i = min; i <= max; i++){
        summation += i;
    }
    return summation;
}

module.exports = sumAll
