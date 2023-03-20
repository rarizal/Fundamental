// Ref. File = 12. Exercise.pdf

//////////////////////////////////////////

// let arra = [3, 4, 7, 1, 5, 3, 6, 4, 7, 1];
// let arrb = [...arra];
// let ioflow = arra.indexOf(Math.min(...arra)); // i of lowest val
// let arrspl = arrb.splice(ioflow, arra.length); // create new array of lowest val's right
// let ifofhi = arra.indexOf(Math.max(...arrspl)); // find the highest value of arrspl, then find the index of said highest val in the original array, arra

// if (ioflow == arra.length - 1) {
// 	console.log(
// 		"You just bought the stock today, no profit calculation possible."
// 	);
// } else {
// 	console.log(
// 		`Buy on day ${ioflow} at a price of ${Math.min(
// 			...arra
// 		)}, and sell it on day ${
// 			ifofhi + (arra.length - ifofhi - 1)
// 		} at a price of ${Math.max(...arrspl)}, for a profit of ${
// 			Math.max(...arrspl) - Math.min(...arra)
// 		}.`
// 	);
// }

//////////////////////////////////////////

// function pascal(num) {
// 	let awal = [[1], [1, 1]];
// 	// let kos = [1];

// 	for (let i = 1; i <= num; i++) {
// 		let prev = awal[i][i];
// 		let next = awal[i][i + 1];
// 		console.log(next);

// 		i++;
// 	}
// }

// pascal(2);

// LXXXVIII = 87
// XXCVIII = 87
//////////////////////////////////////////

// function roman(str) {
// 	switch (str.charAt(0)) {
// 		case "M":
// 			console.log("charat 0 adalah M");
// 			break;

// 		default:
// 			console.log("default");
// 			break;
// 	}
// }

// roman("MCMXCIV");
