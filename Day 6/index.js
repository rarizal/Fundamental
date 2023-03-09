
class Murid {

    constructor(nama, email, usia, nilai) {
        this.nama = nama;
        this.email = email;
        this.usia = usia;
        this.nilai = nilai;
    }
}

let murida = new Murid("Sam", "sam@mail.com", 16, 77);
let muridb = new Murid("Anna", "anna@mail.com", 18, 83);
let muridc = new Murid("Budi", "budi@mail.com", 17, 49);
let muridd = new Murid("Joko", "joko@mail.com", 16, 80);

let araiofage = [murida.usia, muridb.usia, muridc.usia, muridd.usia]; // membuat array usia
let araiofnil = [murida.nilai, muridb.nilai, muridc.nilai, muridd.nilai]; // membuat array nilai

let result = {
    nilai: {
        min: Math.max(...araiofnil),
        max: Math.max(...araiofnil),
        avg: (araiofnil.reduce((acc, val) => acc +=val))/araiofnil.length,
    },
    usia: {
        min: Math.max(...araiofage),
        max: Math.max(...araiofage),
        avg: (araiofage.reduce((acc, val) => acc += val))/araiofage.length,
    }
};

console.log(result);

// console.log(`Usia tertinggi adalah ${Math.max(...araiofage)}.`); // Usia tertinggi
// console.log(`Usia terendah adalah ${Math.min(...araiofage)}.`); // Usia terendah
// console.log(`Rerata usia adalah ${(araiofage.reduce((acc, val) => acc += val) / araiofage.length).toLocaleString('id-ID')}.`); // Rerata usia
// // console.log(`Rerata usia adalah ${araiofage.reduce((acc, val) => acc += val) / araiofage.length}.`); // Rerata usia


// console.log(`Nilai tertinggi adalah ${Math.max(...araiofnil)}.`); // Nilai tertinggi
// console.log(`Nilai terendah adalah ${Math.min(...araiofnil)}.`); // Nilai terendah
// console.log(`Rerata nilai adalah ${(araiofnil.reduce((acc, val) => acc += val) / araiofnil.length).toLocaleString('id-ID')}.`); // Rerata nilai
// // console.log(`Rerata nilai adalah ${araiofnil.reduce((acc, val) => acc += val) / araiofnil.length}`); // Rerata nilai



