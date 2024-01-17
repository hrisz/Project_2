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
                <td class="w-10/12 text-left py-3 px-8 col-span-1 flex items-center space-x-4">
                    <button type="button"
                      id-naskah="${values.id_naskah}"
                      class="btn-editnaskah inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Edit
                    </button>
                    <button type="button"
                      id-naskah="${values.id_naskah}"
                      class="btn-deletenaskah inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-red-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Hapus
                    </button>
                  </td>
                </tr>`;
    });
    // Tampilkan data order ke dalam tabel
    document.getElementById("tabel-naskah").innerHTML = tableData;

    // Tambahkan event listener pada setiap tombol delete
    const deleteButtons = document.querySelectorAll(".btn-deletenaskah");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const id_naskah = event.target.getAttribute("id-naskah");
        // Kirim permintaan DELETE ke server
        fetch(`http://127.0.0.1:3000/api/datanaskah/${id_naskah}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              // Sukses menghapus data
              event.target.parentNode.parentNode.remove();
              alert("Data naskah berhasil dihapus"); // Menghapus baris tabel yang sesuai dengan tombol delete yang diklik
            } else {
              // Gagal menghapus data
              throw new Error("Gagal menghapus data");
            }
          })
          .catch((error) => {
            console.log("error", error);
            alert("Terjadi kesalahan pada server");
          });
      });
    });

    // Tambahkan event listener pada setiap tombol update
    const detailButtons = document.querySelectorAll(".btn-editnaskah");
    detailButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const id_naskah = event.target.getAttribute("id-naskah");
        window.location.href = `edit_naskah.html?id_naskah=${id_naskah}`;
      });
    });
  })
  .catch((error) => {
    console.log("error", error);
    alert("Terjadi kesalahan pada server");
  });
