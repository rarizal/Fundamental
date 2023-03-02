// Write a code to convert celsius to fahrenheit. 
let suhu = 45;
let fahren = (9/5 * suhu) + 32;
console.log(`Jadi, 45 Celcius itu sama dengan ${fahren} Fahrenheit.`);

// Write a code to check whether the number is odd or even 
let angka = 3;
let deter = angka % 2;
if (deter == 0) {
    console.log(`${angka} adalah angka Genap.`);
} else {
    console.log(`${angka} adalah angka Ganjil.`);
}

// Write a code to check whether the number is prime number or not 

let isprime = 9;

if (isprime <= 1) {
    console.log(`${isprime} bukan angka prima.`);
} else if (isprime === 2) {
    console.log(`${isprime} adalah angka prima.`);
} else if (isprime % 2 === 0 || isprime % 3 === 0) {
    console.log(`${isprime} bukan angka prima.`);
} else {
    console.log(`${isprime} adalah angka prima.`);
}

// Write a code to find the sum of the numbers 1 to N. 
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15 


let nambah = 5;

for (let index = 0; index < nambah; index++) {
    console.log();
    
}



// Write a code to find factorial of a number.

// Write a code to print the first N fibonacci numbers. 




let warna = "merah";

console.log(`${warna} is ${warna === "merah" ? "lucky color" : "not lucky color"}`);


for (let index = 0; index < 5; index++) {
    if (index === 3) continue;
    console.log(index);
    
}
