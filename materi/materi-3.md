# **Materi 3: React, JSX, component, dan property**

# Daftar isi

- [**Materi 3: React, JSX, component, dan property**](#materi-3-react-jsx-component-dan-property)
- [Daftar isi](#daftar-isi)
- [React](#react)
  - [Instalasi](#instalasi)
    - [Instalasi dengan CDN](#instalasi-dengan-cdn)
    - [Instalasi dengan Node.js](#instalasi-dengan-nodejs)
  - [Hello world!](#hello-world)
- [Pengenalan JSX](#pengenalan-jsx)
  - [Menyematkan pernyataan di JSX](#menyematkan-pernyataan-di-jsx)
  - [JSX juga pernyataan](#jsx-juga-pernyataan)
  - [Menentukan atribut dengan JSX](#menentukan-atribut-dengan-jsx)
  - [Menentukan child dengan JSX](#menentukan-child-dengan-jsx)
- [Rendering element](#rendering-element)
  - [Merender element ke dalam HTML](#merender-element-ke-dalam-html)
  - [Memperbarui element yang dirender](#memperbarui-element-yang-dirender)
  - [React hanya memperbarui apa yang perlu diperbarui](#react-hanya-memperbarui-apa-yang-perlu-diperbarui)
- [Component dan property](#component-dan-property)
  - [Class component dan function component](#class-component-dan-function-component)

# React

React adalah library JavaScript untuk membangun UI (user interface).

> **Tips**
> 
> Setiap kali kalian bingung dengan sesuatu yang berkenaan dengan JavaScript, kalian dapat memeriksa situs web [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) dan [javascript.info](https://javascript.info/).

## Instalasi

Ada 3 library yang perlu diinstal, yaitu React, React DOM, dan Babel.

React DOM digunakan untuk memanipulasi DOM. DOM adalah isi dari dokumen HTML.

Babel digunakan untuk mengompilasi JSX menjadi JavaScript biasa.

### Instalasi dengan CDN

CDN biasa digunakan untuk mengirimkan file stylesheet (CSS) dan JavaScript dari suatu library seperti Bootstrap, jQuery, dll.

Untuk menggunakan React, tambahkan script berikut ke dalam HTML:

```html
<script crossorigin
src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin
src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script
src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

```html
<script type="text/babel">
// tulis kode JSX di sini
</script>
```

> **Peringatan**
> 
> React dengan CDN hanya untuk latihan, tidak cocok untuk penggunaan produksi

### Instalasi dengan Node.js

Untuk memulai project React dengan Node.js sebenarnya banyak yang harus diinstal dan dikonfigurasi. Untungnya ada sebuah perintah yang akan menyelesaikan semua itu.

```shell
> npx create-react-app nama-aplikasi
```

Perintah di atas akan menginstal semua library dan menyelesaikan semua konfigurasi yang diperlukan agar project siap dikembangkan.

## Hello world!

Contoh penggunaan React sederhana:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello world!</h1>);
```

Ini menampilkan judul yang bertuliskan "Hello world!" di halaman.

# Pengenalan JSX

Perhatikan deklarasi variabel berikut.

```jsx
const element = <h1>Hello universe!</h1>;
```

Sintaks tag di atas bukan string atau HTML, melainkan JSX.

JSX merupakan perluasan sintaks untuk JavaScript. Kita perlu menggunakannya dengan React untuk membangun tampilan UI. JSX mungkin mengingatkan kita tentang bahasa template, seperti Blade (di Laravel), Blazor (di ASP.NET), Thymeleaf (di Spring), dll., tetapi ini menggunakan JavaScript.

## Menyematkan pernyataan di JSX

Pada contoh di bawah ini, kita mendeklarasikan variabel bernama `name` dan kemudian menggunakannya di dalam JSX dengan membungkusnya dalam kurung kurawal:

```jsx
const name = 'Indah Mentari';
const element = <h1>Hello {name}!</h1>;
```

Kita dapat menempatkan pernyataan JavaScript apapun (yang valid) di dalam kurung kurawal di JSX. Misalnya, `2 + 2`, `user.firstName`, atau `formatName(user)`.

Pada contoh di bawah, kita menyematkan hasil pemanggilan function JavaScript, yaitu `formatName(user)`, ke dalam element `<h1>`.

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Indah',
  lastName: 'Mentari'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

Kita membagi JSX menjadi beberapa baris agar mudah dibaca. Meskipun tidak diharuskan, saat melakukan ini disarankan untuk membungkusnya dalam tanda kurung.

## JSX juga pernyataan

JSX juga merupakan pernyataan. Ini berarti kita dapat menggunakannya di dalam decision dan loop, memasukkannya ke variabel, menerimanya sebagai argument, dan mengembalikannya dari function:

```jsx
function getGreeting(user) {
  if (user) {
    // jika user berisi
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  // jika user kosong
  return <h1>Hello, Stranger.</h1>;
}
```

## Menentukan atribut dengan JSX

Kita dapat menggunakan tanda kutip untuk menentukan literal string sebagai atribut:

```jsx
const link = <a href="https://www.pubpasim.org">Buka website PUB</a>;
```

Kita juga dapat menggunakan kurung kurawal untuk menyematkan pernyataan JavaScript dalam sebuah atribut:

```jsx
const image = <img src={user.avatarUrl}></img>;
```

Jangan beri tanda kutip di sekitar kurung kurawal saat menyematkan pernyataan JavaScript dalam sebuah atribut. Kita harus menggunakan tanda kutip (untuk nilai string) atau kurung kurawal (untuk pernyataan), tetapi tidak keduanya dalam atribut yang sama.

> **Peringatan**
> 
> Karena JSX lebih dekat dengan JavaScript daripada HTML, penamaan property menggunakan konvensi `camelCase`, bukan nama atribut HTML.
> 
> Misalnya, `class` menjadi `className` di JSX, dan `tabindex` menjadi `tabIndex`.

## Menentukan child dengan JSX

Jika element tidak memiliki child, kita perlu menutupnya dengan `/>` (seperti XML):

```jsx
const element = <img src={user.avatarUrl} />;
```

Jika element memiliki child, maka penulisannya seperti HTML biasa:

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

# Rendering element

## Merender element ke dalam HTML

Misalnya ada sebuah `<div>` di file HTML kita:

```html
<div id="root"></div>
```

Kita menyebutnya "element DOM root" karena semua yang ada di dalamnya akan dikelola oleh React DOM.

Aplikasi yang dibuat dengan React biasanya hanya memiliki satu element DOM root. Tapi sebenarnya kita bisa menggunakan element DOM root sebanyak yang kita inginkan.

Untuk merender element React, pertama-tama panggil `ReactDOM.createRoot()` dan jadikan element DOM root sebagai argumentnya, lalu panggil `root.render()` dan jadikan element React sebagai argumentnya:

```jsx
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello world!</h1>;

root.render(element);
```

Itu akan menampilkan "Hello world!" di halaman.

## Memperbarui element yang dirender

Element React tidak dapat diubah. Setelah kita membuat element, kita tidak dapat mengubah anak atau atributnya.

Salah satu cara untuk memperbarui UI adalah dengan membuat element baru kemudian memanggil `root.render()` dengan argument berupa element baru tersebut.

Perhatikan contoh jam berikut:

```jsx
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tambahDetik() {
  const element = (
    <div>
      <h1>Halo!</h1>
      <h2>Sekarang pukul {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tambahDetik, 1000);
```

Kode di atas memanggil `root.render()` setiap detik dari callback `setInterval()`.

> **Catatan**
> 
> Dalam praktiknya, sebagian besar aplikasi React hanya memanggil `root.render()` sekali. Pada materi berikutnya kita akan mempelajari penggunaan `useState()`.

## React hanya memperbarui apa yang perlu diperbarui

React DOM membandingkan element dan child-child-nya dengan yang sebelumnya, dan hanya menerapkan pembaruan DOM yang diperlukan untuk membawa DOM ke keadaan yang diinginkan.

Dari contoh sebelumnya, meskipun kita membuat element yang berisi keseluruhan struktur UI pada setiap detik, hanya teks yang isinya telah diubah yang akan diperbarui oleh React DOM.

# Component dan property

Component memungkinkan kita membagi UI menjadi bagian-bagian independen yang dapat digunakan kembali, dan memikirkan setiap bagian secara terpisah.

Konsep component seperti function JavaScript. Component menerima argument (disebut "props") dan mengembalikan element React yang akan muncul di layar.

## Class component dan function component

Cara paling sederhana untuk mendefinisikan component adalah dengan menulis function JavaScript:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Function di atas adalah component React yang valid karena menerima argument objek "props" (yang berarti properties) tunggal dengan data dan mengembalikan element React. Component itu disebut "function component" karena secara harfiah merupakan function JavaScript.

Kita juga dapat menggunakan class untuk mendefinisikan component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```