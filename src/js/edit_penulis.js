// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);
const idPenulis = urlParams.get("idpenulis");
// Ambil elemen formulir
const form = document.getElementById("form-penulis");
const id_penulis = document.getElementById("idpenulis")
const namaPenulis = document.getElementById("nama");
const linkFoto = document.getElementById("link");
const bioGrafi = document.getElementById("bio");
const alamatRumah = document.getElementById("address");
const alamatKantor = document.getElementById("address2");
const nomorHP = document.getElementById("phone");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const nikInput = document.getElementById("nik");
// Isi formulir dengan data dari server berdasarkan ID
fetch(`http://127.0.0.1:3000/api/datapenulis/${idPenulis}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    const penulis = data.data;
    id_penulis.value = penulis.idpenulis;
    namaPenulis.value = penulis.nama;
    linkFoto.value = penulis.urlfoto;
    bioGrafi.value = penulis.biografi;
    alamatRumah.value = penulis.alamatrumah;
    alamatKantor.value = penulis.alamatkantor;
    nomorHP.value = penulis.nomorhp;
    emailInput.value = penulis.emails;
    jobInput.value = penulis.pekerjaan;
    nikInput.value = penulis.nik;
  });
// Fungsi untuk mengirim data ke server
function updateData() {
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama: namaPenulis.value,
    urlfoto: linkFoto.value,
    biografi: bioGrafi.value,
    alamatrumah: alamatRumah.value,
    alamatkantor: alamatKantor.value,
    nomorhp: nomorHP.value,
    emails: emailInput.value,
    pekerjaan: jobInput.value,
    nik: nikInput.value,
  };
  // Buat konfigurasi untuk request
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  // Kirim request ke server
  fetch(`http://127.0.0.1:3000/api/datapenulis/${idPenulis}`, options)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert("Penulis berhasil diupdate");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Penulis gagal diupdate");
    });
}
// Tambahkan event listener pada tombol update
const editButton = document.querySelector(".btn-edit-penulis");
editButton.addEventListener("click", updateData);
