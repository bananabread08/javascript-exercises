const sumAll = function(first, last) {
    let summation = 0;
    if (first > last){
        let temp = first;
        first = last;
        last = temp;
    }

    if (first < 0 || last < 0) return "ERROR";

    for(let i = first; first <= last; i++){
        summation += i;
    }
    return summation;
}

console.log(sumAll(1,5));



//module.exports = sumAll
