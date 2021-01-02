const reverseString = function(strInput) {
    let myArray = strInput.split(''); //split the string and assign them to an array
    let finalString = ''; 
    if (strInput == '') return '';
    else{
        for(let count = myArray.length - 1; count >= 0; count--){
            finalString += myArray[count];
        }
        return finalString;
    }
}

//i could've used strInput.split('').reverse().join('') instead.

module.exports = reverseString
