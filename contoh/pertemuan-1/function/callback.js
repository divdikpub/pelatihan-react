// pendeklaran fungsi1()
function fungsi1(cbFunc) {
  console.log("Ini fungsi1");
  cbFunc();
}

function fungsi2() {
  console.log("Ini function sebagai argumen");
}

// pemanggilan fungsi1()
fungsi1(fungsi2);