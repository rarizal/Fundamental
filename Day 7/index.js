class Product {
constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
}
}



class Transaction extends Product {
    constructor(nama, harga, kuantiti) {
    super(nama, harga);
    this.kuantiti = kuantiti;
}

    static cart() {
    let addtocart = Object(proda, prodb, prodc);
    console.log(addtocart);
    }


    static total() {
    console.log(prodb);
    }
}

let proda = new Transaction("Kabel", 30000, 4);
let prodb = new Transaction("Case", 20000, 1);
let prodc = new Transaction("Tumblr", 40000, 2);
let prodd = new Transaction("Earphone", 15000, 3);
 
// Transaction.total()



let arr1 = [{ name: 'Student 1', email : 'student1@mail.com' }, { name: 'Student 2', email : 'student2@mail.com' } ];
let arr2 = [{ name: 'Student 1', email : 'student1@mail.com' }, { name: 'Student 3', email : 'student3@mail.com' } ];

let arr3 = arr1.concat(...arr2);


function removedup (data) {

    return data.filter((val,i) => data.indexOf(val) === i);
}

console.log(removedup(arr3));
