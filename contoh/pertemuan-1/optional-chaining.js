const students = [
  {
    nama: "Aris Purnama",
    angkatan: {
      nama: "Neophyte",
    },
  },
  {
    nama: "Dion Ferdian Syam",
    angkatan: {
      nama: "Neophyte",
    },
    programStudi: {
      nama: "D3 MI",
    },
  },
  {
    nama: "Jamil Hamdi Harahap",
    programStudi: {
      nama: "D3 MI",
    },
  },
];

students.forEach(function (student) {
  console.log("Nama          : " + student?.nama);
  console.log("Angkatan      : " + (student.angkatan?.nama || "tidak ada"));
  console.log("Program studi : " + (student.programStudi?.nama || "tidak ada"));
  console.log();
});
