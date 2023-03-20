// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof [1, 2, 3]);

// function a(a, b) {
// 	return a + b;
// }

// console.log(typeof a);
// console.log(typeof null);

// function example() {
// 	var x = 1;
// 	console.log(x); // 1
// }
// example();
// // console.log(x); // ReferenceError: x is not defined

// const arr = [1, 2, 3];
// const arr2 = [];
// arr.forEach((element, index) => {
// 	return arr2.push(element * 5);
// });

// console.log(arr2);
// // Element 0 is: 1
// // Element 1 is: 2
// // Element 2 is: 3

// let a = "abc";
// let x = [a];

// console.log(x);
// console.log(a.split(""));

// let n = ["x", "y", "z"];
// console.log(n.join(""));

// let arr = [3, 4, 5, 6, 7, 3, 4, 6, 4, 5, 6, 6, 6];

// console.log(arr.join("").match(/6/g));

const str = "3,141X59XXXX";
const num = parseFloat(str);

console.log(num); // Output: 3.14159
console.log(typeof num); // Output: "number"
