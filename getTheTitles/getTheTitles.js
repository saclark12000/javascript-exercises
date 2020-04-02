const getTheTitles = function(target) {
    let returnArr = [];
    target.forEach(book => {
        returnArr.push(book.title)
    })
    return returnArr;
}

module.exports = getTheTitles;
