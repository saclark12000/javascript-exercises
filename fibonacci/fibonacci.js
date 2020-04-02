const fibonacci = function(tarNum) {
    let [prev, curr, next] = [0,1,1]
    if(tarNum<=0) return "OOPS"
    for(i=1; i<tarNum; i++){
        next = prev + curr;
        console.log(i, prev, curr, next)
        prev = curr;
        curr = next;
    }
    return next;
}

module.exports = fibonacci
