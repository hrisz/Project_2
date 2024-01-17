fetch("http://127.0.0.1:3000/api/datanaskah")
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
				        <td>${values.id_naskah}</td>
                <td>${values.judulnaskah}</td>
                <td>${values.sinopsis}</td>
                <td>${values.jumlahhalaman}</td>
                <td>${values.lebarbuku}</td>
                <td>${values.tinggibuku}</td>
                <td>${values.kelpembaca}</td>
                <td>${values.jenispustaka}</td>
                <td>${values.kategorijenis}</td>
                <td>${values.terbitan}</td>
                <td>${values.media}</td>
                <td>${values.isbnsusulan}</td>
                <td>${values.pengajuankdt}</td>
                <td>${values.kategoribuku}</td>
                <td>${values.tahunterbit}</td>
                <td>${values.genrescode}</td>
                <td>${values.promodesk}</td>
                <td>${values.urlaspdf}</td>
                <td>${values.urlori}</td>
                <td>${values.urlcover}</td>
                <td>${values.urlhaljudul}</td>
                <td>${values.urlplagiarism}</td>
                </tr>`;
    });
    // Tampilkan data order ke dalam tabel
    document.getElementById("tabel-naskah").innerHTML = tableData;
  })
  .catch((error) => {
    console.log("error", error);
    alert("Terjadi kesalahan pada server");
  });
