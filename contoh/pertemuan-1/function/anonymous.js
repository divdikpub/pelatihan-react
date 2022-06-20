// pendeklaran fungsi1()
function fungsi1(cbFunc) {
  console.log("Ini fungsi1");
  cbFunc();
}

// anon
fungsi1(function () {
  console.log("Ini function sebagai argumen");
});
