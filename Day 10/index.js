// compare lenth kata
// urutkan alphabetically
// compare both output, is same then anagram

// let s = "anagram";
// let t = "nagaram";
// let ssorter = s.split("").sort().join("");
// let tsorter = t.split("").sort().join("");

// if (s.length == t.length) {
// 	if (ssorter == tsorter) {
// 		console.log("Adalah Anagram");
// 	} else {
// 		console.log("Bukan Anagram");
// 	}
// } else {
// 	console.log("Bukan Anagram");
// }

//console.log(t.split("").sort() == s.split("").sort());

function anagram(s, t) {
	if (s.length == t.length) {
		if (s.split("").sort().join("") == t.split("").sort().join("")) {
			return console.log("Adalah Anagram");
		} else {
			return console.log("Bukan Anagram");
		}
	} else {
		return console.log("Bukan Anagram");
	}
}

anagram("anagram", "nagaram");

// check index 0 dan 1
// if value of index 0 lebih besar dari 1, swap
// check index 0+1 dan 1+1
// if value of index 1 lebih besar dari 1+1, swap

// let arr = [3,4,1,2,8,9,7];

// function bubble (val, idx) {
//     if (condition) {

//         }
//     }

// }
