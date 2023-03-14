// A. String Built-In Methods

// 1. slice
// Memotong array mulai dari index start hingga index end, dimana index end tidak termasuk. Slice tidak merubah array asli a.k.a shallow copy.
// Rumusnya adalah:
// slice()
// slice(start)
// slice(start, end)

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// 2. substring
// 3. substr
// 3. replace
// 4. toUpperCase
// 5. toLowerCase
// 6. concat
// 7. trim
// 8. padStart
// 9. padEnd
// 10. chartAt
// 11. charCodeAt
// 12. split
// 13. indexOf
// 14. lastIndexOf
// 15. search
