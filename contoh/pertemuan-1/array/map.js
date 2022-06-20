// Method map() dari array

let people = ["Dion", "Ferdian", "Syam"];

// mengganti huruf/kata
let newPeople = people.map(p => p.replace("i", "o"));
console.log(newPeople);

// kapitalisasi
let newPeople2 = people.map(p => p.toUpperCase());
console.log(newPeople2);