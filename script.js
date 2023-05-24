function calculateDeterminant() {
  // Mengambil nilai dari setiap elemen matriks
  var a11 = parseInt(document.getElementById("a11").value);
  var a12 = parseInt(document.getElementById("a12").value);
  var a13 = parseInt(document.getElementById("a13").value);
  var a21 = parseInt(document.getElementById("a21").value);
  var a22 = parseInt(document.getElementById("a22").value);
  var a23 = parseInt(document.getElementById("a23").value);
  var a31 = parseInt(document.getElementById("a31").value);
  var a32 = parseInt(document.getElementById("a32").value);
  var a33 = parseInt(document.getElementById("a33").value);

  // Menghitung determinan menggunakan rumus Sarrus
  var determinant =
    a11 * a22 * a33 +
    a12 * a23 * a31 +
    a13 * a21 * a32 -
    a31 * a22 * a13 -
    a32 * a23 * a11 -
    a33 * a21 * a12;

  // Menampilkan hasil determinan
  document.getElementById("result").innerHTML = "Determinan: " + determinant;
}

function clearInput(id1, id2, id3, id4, id5, id6, id7, id8, id9) {
  document.getElementById(id1).value = "";
  document.getElementById(id2).value = "";
  document.getElementById(id3).value = "";
  document.getElementById(id4).value = "";
  document.getElementById(id5).value = "";
  document.getElementById(id6).value = "";
  document.getElementById(id7).value = "";
  document.getElementById(id8).value = "";
  document.getElementById(id9).value = "";
}
