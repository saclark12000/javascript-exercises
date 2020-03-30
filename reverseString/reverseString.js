const reverseString = function(targetWord) {
    var targetLength = targetWord.length;
    var reverseWord =""; 
    for (i = targetLength; i >=0; i--) {
        reverseWord = reverseWord ? reverseWord + targetWord[i] : targetWord[i];
    }

    return reverseWord;
}

module.exports = reverseString
