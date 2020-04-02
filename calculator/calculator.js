function add (...addends) {
	let ans = 0;
	addends.forEach( addend => ans += addend )
	return ans;
}

function subtract (...nums) {
	let ans;
	nums.forEach( subtrahend => {
		if (ans != undefined) {
			ans -= subtrahend;
		} else {
			ans = subtrahend
		}
	})
	return ans;
}

function sum (addends) {
	let ans = 0;
	addends.forEach( addend => ans += addend )
	return ans;
}

function multiply (nums) {
	let ans;
	nums.forEach( num => {
		if (ans != undefined) {
			ans *= num;
		} else {
			ans = num
		}
	})
	return ans;
}

function power(a,b){
	let ans;
	for(i = 0; i<b; i++){
		if (ans != undefined) {
			ans *= a;
		} else {
			ans = a;
		}
	}
	return ans;
}

function factorial(a) {
	let ans;
	for(i = a; i>0; i--){
		if (ans != undefined) {
			ans *= i;
		} else {
			ans = a;
		}
	}
	return ans ? ans : 1;	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}