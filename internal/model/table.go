package table

// Struktur tabel data naskah pada database funsphere
type Data_Naskah struct {
	IdNaskah      int    `gorm:"primaryKey;column:id_naskah;autoIncrement" json:"idnaskah"`
	JudulNaskah   string `gorm:"column:judul_naskah" json:"judulnaskah"`
	Sinopsis      string `gorm:"column:sinopsis" json:"sinopsis"`
	JumlahHalaman string `gorm:"column:jumlah_halaman" json:"jumlahhalaman"`
	LebarBuku     string `gorm:"column:lebar_buku" json:"lebarbuku"`
	TinggiBuku    string `gorm:"column:tinggi_buku" json:"tinggibuku"`
	KelPembaca    string `gorm:"column:kel_pembaca" json:"kelpembaca"`
	JenisPustaka  string `gorm:"column:jenis_pustaka" json:"jenispustaka"`
	KategoriJenis string `gorm:"column:kategori_jenis" json:"kategorijenis"`
	Terbitan      string `gorm:"column:terbitan" json:"terbitan"`
	Media         string `gorm:"column:media" json:"media"`
	IsbnSusulan   string `gorm:"column:isbn_susulan" json:"isbnsusulan"`
	PengajuanKDT  string `gorm:"column:pengajuan_kdt" json:"pengajuankdt"`
	KategoriBuku  string `gorm:"column:kategori_buku" json:"kategoribuku"`
	TahunTerbit   string `gorm:"column:tahun_terbit" json:"tahunterbit"`
	GenresCode    string `gorm:"column:genres_code" json:"genrescode"`
	PromoDesc     string `gorm:"column:promo_desc" json:"promodesk"`
	UrlAsPDF      string `gorm:"column:url_as_pdf" json:"urlaspdf"`
	UrlOriginal   string `gorm:"column:url_original" json:"urlori"`
	UrlRawCover   string `gorm:"column:url_raw_cover" json:"urlcover"`
	UrlHalJudul   string `gorm:"column:url_hal_judul" json:"urlhaljudul"`
	UrlPlagiarism string `gorm:"column:url_plagiarism" json:"urlplagiarism"`
}

type Data_Penulis struct {
	IdPenulis    int    `gorm:"primaryKey;column:id_penulis;autoIncrement" json:"idpenulis"`
	UrlFoto      string `gorm:"column:url_foto" json:"urlfoto"`
	Biografi     string `gorm:"column:biografi" json:"biografi"`
	AlamatRumah  string `gorm:"column:alamat_rumah" json:"alamatrumah"`
	AlamatKantor string `gorm:"column:alamat_kantor" json:"alamatkantor"`
	NomorHp      string `gorm:"column:nomor_hp" json:"nomorhp"`
	Email        string `gorm:"column:email" json:"emails"`
	Pekerjaan    string `gorm:"column:pekerjaan" json:"pekerjaan"`
	Nik          string `gorm:"column:nik" json:"nik"`
}
