// Ref. File: "11. Exercise.pdf"

function kolom(s) {
	const arr = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let alpha1 = arr.indexOf(s.charAt(0));
	let alpha2 = arr.indexOf(s.charAt(1));
	let alpha3 = arr.indexOf(s.charAt(2));

	switch (s.length) {
		case 1:
			console.log(arr.indexOf(s));
			break;
		case 2:
			console.log(26 * alpha1 + alpha2);
			break;
		case 3:
			console.log(alpha1 * (26 * 26) + alpha2 * 26 + alpha3);
			break;
		default:
			break;
	}
}

// kolom("R");
// kolom("RI");
// kolom("ZZZ");

////////////////////////////////////////////////////////////////////////

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 Fib
// X, X, 1, 2, 3, 4, 5, 06, 07, 08, 09, 10, 011, 012 Stairs

function tangga(num) {
	let x = 1; // term pertama dst.
	let y = 2; // term kedua dst.
	let z; // menampung x + y
	let i = 1;
	while (i <= num - 2) {
		z = x + y;
		x = y;
		y = z;
		i++;
	}
	console.log(z);
}

// tangga(11);

////////////////////////////////////////////////////////////////////////
