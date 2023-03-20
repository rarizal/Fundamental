var Queue = require("./class.js");

let arr = [
	new Queue("John", 1),
	new Queue("Jane", 2),
	new Queue("Jack", 3),
	new Queue("Jeni", 4),
];
var i = 0;

while (i < arr.length) {
	let randomizer = Math.floor(Math.random() * 10000);
	setTimeout(() => {
		console.log(`${arr[i].nomor} selesai dalam ${randomizer}`), randomizer;
	});
	i++;
}

// const cobatangkap = async () => {
// 	try {
// 		let result = await coba();
// 		console.log(result);
// 	} catch (error) {
// 		console.log("ada elol");
// 	}
// };

// for (let i = 0; i < arr.length; i++) {
// 	let randomizer = Math.floor(Math.random() * 10000);
// 	setTimeout(() => {
// 		console.log(
// 			`Antrian ${arr[i].nomor} selesai dalam ${Math.floor(
// 				randomizer / 1000
// 			)} detik`
// 		);
// 	}, randomizer);
// }

// const tryAndCatch = async () => {
// 	try {
// 		let result = await antrian;
// 		console.log(result);
// 	} catch (error) {
// 		console.log("ada error");
// 	}
// };
