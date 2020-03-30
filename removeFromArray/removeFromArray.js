const removeFromArray = function(inputArray, ...args) {
    args.forEach((arg, index) => {
        if (inputArray.indexOf(arg) != -1) {
            inputArray.splice(inputArray.indexOf(arg),1)
        }
      });

    return inputArray;
}

module.exports = removeFromArray
