const palindromes = function(inputStr) {
    inputStr = inputStr.toLowerCase().replace(/[^\w]|_/g, "");    // Regex => replace anything that's not a letter/digit or is an _ with nothing.
    inputStrL = inputStr.length;
    let reverseStr = "";

    for(i=inputStrL-1; i>=0; i--){
        reverseStr += inputStr[i]
    }

    console.log("test : ", inputStr, reverseStr);

    for(i=0; i<inputStrL; i++){
        if(reverseStr[i]!=inputStr[i]) return false;
    }
    return true;
}

module.exports = palindromes
