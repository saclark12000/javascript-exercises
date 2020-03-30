const sumAll = function(a, b) {

    if (a<0 || b<0 ||typeof a != "number" || typeof b != "number") return 'ERROR';

    var largeVal = a > b ? a : b;
    var smallVal = a <= b ? a : b;
    var returnVal = 0

    for ( i = smallVal; i <= largeVal; i++ ) {
        returnVal += i;
    }

    return returnVal;
}

module.exports = sumAll
