fetch("http://127.0.0.1:3000/api/datapenulis")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let tableData = "";
    data.data.map((values) => {
      // Manipulasi data penulis dan masukkan ke dalam bentuk tabel
      tableData += `
                <tr>
				        <td>${values.idpenulis}</td>
                <td>${values.nama}</td>
                <td>${values.urlfoto}</td>
                <td>${values.biografi}</td>
                <td>${values.alamatrumah}</td>
                <td>${values.alamatkantor}</td>
                <td>${values.nomorhp}</td>
                <td>${values.emails}</td>
                <td>${values.pekerjaan}</td>
                <td>${values.nik}</td>
                </tr>`;
    });
    // Tampilkan data order ke dalam tabel
    document.getElementById("tabel-penulis").innerHTML = tableData;

    // Tambahkan event listener pada setiap tombol update
  })
  .catch((error) => {
    console.log("error", error);
    alert("Terjadi kesalahan pada server");
  });
