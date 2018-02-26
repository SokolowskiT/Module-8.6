var a = prompt('Enter first number'),
	b = prompt('Enter second number'),
	value = (a * a) - (2 * a *b) - (b * b);

if (value > 0) {
	console.log(value +' Positive number');
} else if (value < 0) {
	console.log(value +' Negative number');
} else {
	console.log(value +' Number is 0');
}