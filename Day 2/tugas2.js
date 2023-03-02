// Write a code to display the multiplication table of a given integer

for (let index = 1; index <= 10; index++) {
    console.log(`9 X ${index}`);
}


// Write a code to check whether a string is a palindrome or not

let word = "madam";
let splittoarray = word.split("");
let reversearray = splittoarray.reverse("");
let joinreversed = reversearray.join("");
console.log(word == joinreversed ? `Kata ${word} adalah palindrome.` : `Kata ${word} bukan palindrome.` );


// Write a code to convert centimeter to kilometer.
let jarakincm = 1457;
console.log(`${jarakincm} Centimeter sama dengan ${jarakincm/100000} Kilometer.`);

//Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

let plainnum = 10000000000;
console.log(`${plainnum} → ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(plainnum)}`);

// Write a code to remove the first occurrence of a given “search string” from a string
// string = “Hello world”, search string = “ell” → “Ho world”

let kata = "Hello world";
let chartoremove = "llo";
console.log(`If the word "${chartoremove}" is erased from "${kata}", it'd be "${kata.replace( chartoremove , '')}".`);

// Write a code to capitalize the first letter of each word in a string
// “hello world” → “Hello World”

let kalimat = "this is awesome";
let kalimatsplit = kalimat.split(" ");

for (let index = 0; index < kalimatsplit.length; index++) {
    kalimatsplit[index] = kalimatsplit[index][0].toUpperCase() + kalimatsplit[index].substring(1);
    
}

console.log(kalimatsplit.join(" "));


// Write a code to reverse a string.

let katarev = "laptop";
let kearray = katarev.split("");
let kereverse = kearray.reverse("");
console.log(`Jika kata "${katarev}" dibalik, maka hasilnya adalah "${kereverse.join("")}".`);

