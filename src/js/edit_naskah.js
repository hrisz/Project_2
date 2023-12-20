// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);
const idNaskah = urlParams.get("id_naskah");
// Ambil elemen formulir
const form = document.getElementById("form-naskah");
const id_naskah = document.getElementById("id_naskah");
const judulInput = document.getElementById("judul");
const snInput = document.getElementById("sn");
const jmlHalInput = document.getElementById("hlmn");
const lebarInput = document.getElementById("lbr");
const tinggiInput = document.getElementById("tbk2");
const pembacaInput = document.getElementById("pmbc");
const pustakaInput = document.getElementById("pstk");
const kategoriInput = document.getElementById("ktgr");
const terbitanInput = document.getElementById("terbitan");
const mediaInput = document.getElementById("media");
const isbnInput = document.getElementById("isbn");
const kdtInput = document.getElementById("pajak");
const ktgBukuInput = document.getElementById("ktg_buku");
const thnTerbitInput = document.getElementById("tahun_terbit");
const gnrsCodeInput = document.getElementById("genres_code");
const promoInput = document.getElementById("promo_desk");
const urlPdfInput = document.getElementById("url_pdf");
const urlOriInput = document.getElementById("url_ori");
const urlCoverInput = document.getElementById("url_cover");
const urlHalJudulInput = document.getElementById("url_hal_judul");
const urlPlagiarismInput = document.getElementById("url_plagiarism");
// Isi formulir dengan data dari server berdasarkan ID
fetch(`http://127.0.0.1:3000/api/datanaskah/${idNaskah}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    const naskah = data.data;
    id_naskah.value = naskah.id_naskah;
    judulInput.value = naskah.judulnaskah;
    snInput.value = naskah.sinopsis;
    jmlHalInput.value = naskah.jumlahhalaman;
    lebarInput.value = naskah.lebarbuku;
    tinggiInput.value = naskah.tinggibuku;
    pembacaInput.value = naskah.kelpembaca;
    pustakaInput.value = naskah.jenispustaka;
    kategoriInput.value = naskah.kategorijenis;
    terbitanInput.value = naskah.terbitan;
    mediaInput.value = naskah.media;
    isbnInput.value = naskah.isbnsusulan;
    kdtInput.value = naskah.pengajuankdt;
    ktgBukuInput.value = naskah.kategoribuku;
    thnTerbitInput.value = naskah.tahunterbit;
    gnrsCodeInput.value = naskah.genrescode;
    promoInput.value = naskah.promodesk;
    urlPdfInput.value = naskah.urlaspdf;
    urlOriInput.value = naskah.urlori;
    urlCoverInput.value = naskah.urlcover;
    urlHalJudulInput.value = naskah.urlhaljudul;
    urlPlagiarismInput.value = naskah.urlplagiarism;
  });
// Fungsi untuk mengirim data ke server
function updateData() {
  // Buat objek data yang akan dikirim ke server
  const data = {
    judulnaskah: judulInput.value,
    sinopsis: snInput.value,
    jumlahhalaman: jmlHalInput.value,
    lebarbuku: lebarInput.value,
    tinggibuku: tinggiInput.value,
    kelpembaca: pembacaInput.value,
    jenispustaka: pustakaInput.value,
    kategorijenis: kategoriInput.value,
    terbitan: terbitanInput.value,
    media: mediaInput.value,
    isbnsusulan: isbnInput.value,
    pengajuankdt: kdtInput.value,
    kategoribuku: ktgBukuInput.value,
    tahunterbit: thnTerbitInput.value,
    genrescode: gnrsCodeInput.value,
    promodesk: promoInput.value,
    urlaspdf: urlPdfInput.value,
    urlori: urlOriInput.value,
    urlcover: urlCoverInput.value,
    urlhaljudul: urlHalJudulInput.value,
    urlplagiarism: urlPlagiarismInput.value,
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
  fetch(`http://127.0.0.1:3000/api/datanaskah/${idNaskah}`, options)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert("Naskah berhasil diupdate");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Naskah gagal diupdate");
    });
}
// Tambahkan event listener pada tombol update
const editButton = document.querySelector(".edit-btn");
editButton.addEventListener("click", updateData);
