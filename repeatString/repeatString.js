const repeatString = function(targetStr, targetNum) {
    let returnstring = "";

    if (targetNum < 0) {
        return 'ERROR'
    } else if (targetNum === 0) {
        return '';
    } else {
        for (x=0; x<targetNum; x++){
            returnstring += targetStr;
        }
        return returnstring ? returnstring: "ERROR";
    }   
}

module.exports = repeatString
