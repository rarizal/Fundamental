let arraygen = [-1, 2, 3, 4, 5, 6, 7, 8, 11, 25, 10, 12];

arraygen.sort(function(a, b){return a - b});

console.log(arraygen[0]); // the smallest number of an array

console.log(arraygen[arraygen.length -1]); // the biggest number of an array

console.log(eval(arraygen.join("+"))); // total of an array but not effective method

console.log((eval(arraygen.join("+")))/arraygen.length); // show the average value of an array but not effective method

let res =0
arraygen.map((val)=>res+=val) // show the average value of an array
let avg = res/arraygen.length
console.log(avg);

console.log(Math.max(...arraygen)); // the biggest number of an array

console.log(Math.min(...arraygen)); // the smallest number of an array





let arrayword = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

console.log(arrayword.join(`, `).replace(/,\s([^,]+)$/, ', and $1')); // convert array to string, add comma, and replate last comme with "and"



let arra = [1, 2, 3];
let arrb = [3, 2, 1];

let sum = [arra[0] + arrb[0], arra[1] + arrb[1], arra[2] + arrb[2] ]; // naive, add 0 indexes from two array and put in a new array
// console.log(sum);

const sumi = arra.map((num, index) => num + arrb[index]); // add 0 indexes from two array and put in a new array
// console.log(sumi);





// let buah = ["Mangga", "Apel", "Nanas", "Pisang"];
// let checker = buah.includes("Apel"); 


// if (checker) {
//     console.log(buah);
// } else {
//     buah.push('Peach');
//     console.log(buah);
// }


const buah = ["Mangga", "Apel", "Nanas", "Pisang"];
if (buah.includes("Apel")) {
  console.log(buah);
} else {
  console.log([...buah, "Peach"]);
}


//console.log(buah);





