function sum(a, b) {
	return a + b;
}

module.exports = sum;

// var result = 20;

// function b() {
// 	var result = 30;
// 	c();
// }

// function c() {
// 	var result = 35;
// 	console.log(result);
// 	a();
// }

// function a() {
// 	console.log(result);
// }

let result = 20;

function b() {
	let result = 30;
	c();
}

function c() {
	let result = 35;
	console.log(result);
	a();
}

function a() {
	console.log(result);
}

b();
