// Ambil elemen formulir
const form = document.getElementById("form-naskah");
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

// Tambahkan event listener pada tombol "Masukkan data"
const inputButton = document.querySelector(".add-naskah");
inputButton.addEventListener("click", () => {
  // Ambil nilai input dari formulir
  const judul = judulInput.value;
  const sinopsis = snInput.value;
  const jml_halaman = jmlHalInput.value;
  const lebar_buku = lebarInput.value;
  const tinggi_buku = tinggiInput.value;
  const kel_pembaca = pembacaInput.value;
  const jenis_pustaka = pustakaInput.value;
  const kategori_jenis = kategoriInput.value;
  const terbitan = terbitanInput.value;
  const media = mediaInput.value;
  const isbn_susulan = isbnInput.value;
  const pengajuan_kdt = kdtInput.value;
  const kategori_buku = ktgBukuInput.value;
  const tahun_terbit = thnTerbitInput.value;
  const genres_code = gnrsCodeInput.value;
  const promo_desk = promoInput.value;
  const url_pdf = urlPdfInput.value;
  const url_ori = urlOriInput.value;
  const url_cover = urlCoverInput.value;
  const url_haljudul = urlHalJudulInput.value;
  const url_plagiarism = urlPlagiarismInput.value;
  // Validasi input
  if (
    !judul ||
    !sinopsis ||
    !jml_halaman ||
    !lebar_buku ||
    !tinggi_buku ||
    !kel_pembaca ||
    !jenis_pustaka ||
    !kategori_jenis ||
    !terbitan ||
    !media ||
    !isbn_susulan ||
    !pengajuan_kdt ||
    !kategori_buku ||
    !tahun_terbit ||
    !genres_code ||
    !promo_desk ||
    !url_pdf ||
    !url_ori ||
    !url_cover ||
    !url_haljudul ||
    !url_plagiarism
  ) {
    alert("Isi semua bidang kosong terlebih dahulu!");
    return;
  }
  // Buat objek data yang akan dikirim ke server
  const data = {
    judulnaskah: judul,
    sinopsis: sinopsis,
    jumlahhalaman: jml_halaman,
    lebarbuku: lebar_buku,
    tinggibuku: tinggi_buku,
    kelpembaca: kel_pembaca,
    jenispustaka: jenis_pustaka,
    kategorijenis: kategori_jenis,
    terbitan: terbitan,
    media: media,
    isbnsusulan: isbn_susulan,
    pengajuankdt: pengajuan_kdt,
    kategoribuku: kategori_buku,
    tahunterbit: tahun_terbit,
    genrescode: genres_code,
    promodesk: promo_desk,
    urlaspdf: url_pdf,
    urlori: url_ori,
    urlcover: url_cover,
    urlhaljudul: url_haljudul,
    urlplagiarism: url_plagiarism,
  };
  // Kirim permintaan POST ke server untuk menambahkan data
  fetch("http://127.0.0.1:3000/api/datanaskah", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      alert("Naskah berhasil ditambahkan!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim pesanan.");
    });
});
