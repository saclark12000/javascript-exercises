const caesar = function(cipherStr, code) {
    var cipherArr = [];
    
    cipherStr.split("").forEach(element => {
        var target;
        if (element.search(/[^\w]|_/g) == -1){
            target = element.charCodeAt(0);
            if (target >= 65 && target <= 90){
                var low = 65;
                var high = 90;
            } else if (target >= 97 && target <= 122){
                var low = 97;
                var high = 122;
            }
            target += code%26;
            if (target < low){
                target = (high + 1) - (low - target);
            } else if (target > high) {
                target = (low - 1) + (target-high);
            }
            cipherArr.push(target);
        } else {
            var target = element.charCodeAt(0);
            cipherArr.push(target);
        }
    });
    let returnStr = "";
    cipherArr.forEach(num => {
        returnStr += String.fromCharCode(num);
    })
    return returnStr;
}

module.exports = caesar
