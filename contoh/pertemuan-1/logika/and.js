// AND

// jika kiri false/null/undefined, maka kiri (dia sendiri)
// jika kiri selain di atas, maka kanan

let nama1 = true;
let nama2 = nama1 && "Dion";

console.log(nama2);

// Contoh penggunaan di React:
// let login = false;
// ternary operator:
// login ? <>Nama user</> : <button>Login</button>
// logical operator:
// !login && <button>Login</button>