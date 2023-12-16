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
                <td class="w-10/12 text-left py-3 px-8 col-span-1 flex items-center space-x-4">
                    <button type="button"
                      id-penulis="${values.idpenulis}"
                      class="btn-edit inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Edit
                    </button>
                    <button type="button"
                      id-penulis="${values.idpenulis}"
                      class="btn-delete inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-red-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Hapus
                    </button>
                  </td>
                </tr>`;
    });
    // Tampilkan data order ke dalam tabel
    document.getElementById("tabel-penulis").innerHTML = tableData;

    // Tambahkan event listener pada setiap tombol delete
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const idpenulis = event.target.getAttribute("id-penulis");
        // Kirim permintaan DELETE ke server
        fetch(`http://127.0.0.1:3000/api/datapenulis/${idpenulis}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              // Sukses menghapus data
              event.target.parentNode.parentNode.remove();
              alert("Data penulis berhasil dihapus"); // Menghapus baris tabel yang sesuai dengan tombol delete yang diklik
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
    const detailButtons = document.querySelectorAll(".btn-edit");
    detailButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const idpenulis = event.target.getAttribute("id-penulis");
        window.location.href = `edit_order.html?order_id=${idpenulis}`;
      });
    });
  })
  .catch((error) => {
    console.log("error", error);
    alert("Terjadi kesalahan pada server");
  });
