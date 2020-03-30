const ftoc = function(temp) {
  //[°C] = ([°F] − 32) × ​5⁄9
  return Math.round( ((temp-32) * (5/9) *10)) / 10;
}

const ctof = function(temp) {
  //[°F] = [°C] × ​9⁄5 + 32
  return Math.round( ((temp * (9/5)) + 32) * 10 ) / 10;
}

console.log(ftoc(32));

console.log(ctof(0));

module.exports = {
  ftoc,
  ctof
}
