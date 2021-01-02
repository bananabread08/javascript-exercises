let repeatString = function(word, repeats) {
    if(repeats < 0) return 'ERROR';
    let string = '';
    for(let count = 0; count < repeats; count++){
        string += word;
    }
    return string;
}

module.exports = repeatString
