// Array destructuring

let numbers = [5, 6, 7];

let a, b, c; // deklarasi

// cara biasa
// a = numbers[0];
// b = numbers[1];
// c = numbers[2];

// cara destructuring (boleh setelah deklarasi)
[a, b, c] = numbers;

console.log(a, b, c);