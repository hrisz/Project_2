// Ambil elemen formulir
const form = document.getElementById("form-penulis");
const namaPenulis = document.getElementById("nama");
const linkFoto = document.getElementById("link");
const bioGrafi = document.getElementById("bio");
const alamatRumah = document.getElementById("address");
const alamatKantor = document.getElementById("address2");
const nomorHP = document.getElementById("phone");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const nikInput = document.getElementById("nik");

// Tambahkan event listener pada tombol "Masukkan data"
const inputButton = document.querySelector(".formbold-btn");
inputButton.addEventListener("click", () => {
  // Ambil nilai input dari formulir
  const nama = namaPenulis.value;
  const url_foto = linkFoto.value;
  const biografi = bioGrafi.value;
  const alamat_rumah = alamatRumah.value;
  const alamat_kantor = alamatKantor.value;
  const nomor_hp = nomorHP.value;
  const email = emailInput.value;
  const pekerjaan = jobInput.value;
  const nik = nikInput.value;
  // Validasi input
  if (
    !nama ||
    !url_foto ||
    !biografi ||
    !alamat_rumah ||
    !alamat_kantor ||
    !nomor_hp ||
    !email ||
    !pekerjaan ||
    !nik
  ) {
    alert("Isi semua bidang kosong terlebih dahulu!");
    return;
  }
  // Buat objek data yang akan dikirim ke server
  const data = {
    nama: nama,
    urlfoto: url_foto,
    biografi: biografi,
    alamatrumah: alamat_rumah,
    alamatkantor: alamat_kantor,
    nomorhp: nomor_hp,
    emails: email,
    pekerjaan: pekerjaan,
    nik: nik,
  };
  // Kirim permintaan POST ke server untuk menambahkan data
  fetch("http://127.0.0.1:3000/api/datapenulis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      alert("Penulis berhasil ditambahkan!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim pesanan.");
    });
});
