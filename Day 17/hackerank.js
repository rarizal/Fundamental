// function convert(arr) {
// 	let arrw = arr.map((num) => {
// 		return Number(num) + 96;
// 	});

// 	return String.fromCharCode(...arrw).replace(/`/g, " ");
// }

// // let arr = [10, 1, 11, 1, 18, 20, 1, 0, 2, 1, 20, 1, 13];
// let arr = ["16", "21", "18", "23", "1", "4", "8", "9", "11", "1"];
// console.log(convert(arr));

// let arr = [
// 	"1000000001",
// 	"1000000002",
// 	"1000000003",
// 	"1000000004",
// 	"1000000005",
// ];

// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// let arrsum = arr.reduce((curr, accu) => curr + accu);

// console.log(arrsum);

// switch (number) {
// 	case 0:
// 		false;
// 		break;
// 	case 1:
// 		false;
// 		break;
// 	case 2:
// 		false;
// 		break;
// 	default:
//         if (number < 0) {
//             false
//         } else {
//             if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0) {
//                 false
//             } else {
//                 true
//             }
//         }
// 		break;
// }

// function primeChecker(number) {
// 	if (number % 2 == 0) {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// }

console.log(33 % 24);

function setHour(arr) {
	return (arr[0] + arr[1]) % 24;
}

arr;
