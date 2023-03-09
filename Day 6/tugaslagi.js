class Murid {

    constructor(nama, email, usia, nilai) {
        this.nama = nama;
        this.email = email;
        this.usia = Math.floor((new Date () - new Date (usia)) / 31556926000) ;
        this.nilai = nilai;
    }
}

let murida = new Murid("Sam", "sam@mail.com", "1993-05-23", 77);
let muridb = new Murid("Anna", "anna@mail.com", "1991-03-16", 83);
let muridc = new Murid("Budi", "budi@mail.com", "1992-07-22", 49);
let muridd = new Murid("Joko", "joko@mail.com", "1990-08-24", 80);

// let araiofage = [murida.usia, muridb.usia, muridc.usia, muridd.usia]; // membuat array usia
// let araiofnil = [murida.nilai, muridb.nilai, muridc.nilai, muridd.nilai]; // membuat array nilai

console.log(murida.usia, muridb.usia);



// let murid = [
//     { nama: "Sam", email: "sam@mail.com", usia: 16, nilai: 77 },
//     { nama: "Anna", email: "anna@mail.com", usia: 18, nilai: 83 },
//     { nama: "Budi", email: "budi@mail.com", usia: 17, nilai: 49 },
//     { nama: "Joko", email: "joko@mail.com", usia: 16, nilai: 80 }
//   ];

//   murid.reduce( (acc.usia, val.usia) => 

//   })