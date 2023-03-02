// Write a code to find area of rectangle. 
let panjang = 10;
let lebar = 20;
let luas = panjang*lebar;
console.log(luas);


// Write a code to find perimeter of rectangle. 
let kelilingpersegi = (panjang*2)+(lebar*2);
console.log(kelilingpersegi);


// Write a code to find diameter, circumference and area of a circle. 
let jarijari = 7;

let diameterling = jarijari*2;
console.log(diameterling);

let kelilingling = 2 * 3.14 * jarijari;
console.log(kelilingling);

let luasling = 3.14 * (jarijari**2)
console.log(luasling);

// Write a code to find angles of triangle if two angles are given.
let suduta = 34;
let sudutb = 77;

let sudutx = 180 - suduta - sudutb;

console.log(sudutx);

// Write a code to get difference between dates in days.
let tanggal1 = 2;
let tanggal2 = 15;

let bedaharims = tanggal2-tanggal1;

console.log(bedaharims);


let date_1 = new Date('10/05/2023');
let date_2 = new Date('10/04/2023');

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2) +" days to world cup");


function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(2, 15));

// Write a code to convert days to years, months and days.

let jumhari = 365;

let tahun = jumhari / 365;
console.log(tahun + " Tahun");

let bulan = jumhari / 30;
console.log(bulan.toFixed(0) + " Bulan");

let hari = jumhari;
console.log(jumhari+ " Hari");


// TUGAS: LOOP dan CONDITION