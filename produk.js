/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi Nonkomersial Maliki Studio: wajib kredit, dilarang dijual (lihat LICENSE). */
/* =========================================================
   PENGATURAN TOKO & DATA PRODUK — cukup ubah berkas ini.
   ========================================================= */
window.TOKO = {
  nama: (window.TEMA && TEMA.nama) || 'HOME APPLIANCES CENTER',
  slogan: 'Perlengkapan makan melamin untuk setiap hari',
  // Nomor internasional: 085827869478 diubah menjadi 6285827869478.
  wa: '6285827869478',
  mataUang: 'Rp',
  // Melayani seluruh Indonesia. Ongkir dibayar pembeli dan dikonfirmasi admin via WhatsApp.
  ongkir: [
    { kota: 'Seluruh Indonesia (ongkir sesuai alamat)', biaya: 0, tanya: true }
  ],
  gratisOngkirMin: 0,
  sheetCSV: '',
  logo: 'img/logo.svg',
  fotoKosong: 'img/foto-produk.svg'
};

/* Harga dan pilihan produk di bawah adalah contoh awal; sesuaikan dengan katalog dan harga aktual toko. */
window.PRODUK = [
  {
    id: 'piring-melamin', nama: 'Piring Melamin Serbaguna', kategori: 'Piring', harga: 12000, label: 'Favorit', stok: 30,
    deskripsi: 'Piring melamin ringan untuk hidangan sehari-hari. Praktis digunakan di rumah maupun saat bepergian.',
    varian: [{ nama: 'Ukuran', opsi: ['7 inci', '9 inci'] }],
    gambar: ['img/piring-melamin.svg']
  },
  {
    id: 'mangkok-melamin', nama: 'Mangkok Melamin', kategori: 'Mangkok', harga: 10000, stok: 24,
    deskripsi: 'Mangkok melamin ringan untuk sup, mi, camilan, dan sajian keluarga.',
    varian: [{ nama: 'Warna', opsi: ['Putih', 'Hijau', 'Kuning'] }],
    gambar: ['img/mangkok-melamin.svg']
  },
  {
    id: 'gelas-melamin', nama: 'Gelas Melamin', kategori: 'Gelas', harga: 8000, label: 'Praktis', stok: 36,
    deskripsi: 'Gelas melamin ringan untuk penggunaan sehari-hari di rumah, kantor, atau piknik.',
    varian: [{ nama: 'Warna', opsi: ['Putih', 'Hijau', 'Kuning'] }],
    gambar: ['img/gelas-melamin.svg']
  },
  {
    id: 'sendok-garpu-melamin', nama: 'Set Sendok dan Garpu Melamin', kategori: 'Peralatan makan', harga: 7500, stok: 40,
    deskripsi: 'Set sendok dan garpu melamin yang ringan dan praktis dibawa. Harga contoh untuk satu set.',
    varian: [{ nama: 'Warna', opsi: ['Putih', 'Hijau', 'Kuning'] }],
    gambar: ['img/sendok-garpu-melamin.svg']
  },
  {
    id: 'set-makan-melamin', nama: 'Paket Peralatan Makan Keluarga', kategori: 'Paket', harga: 120000, label: 'Paket hemat', stok: 12,
    deskripsi: 'Contoh paket berisi piring, mangkok, dan gelas melamin untuk kebutuhan makan keluarga. Rincian isi dapat dikonfirmasi melalui WhatsApp.',
    varian: [],
    gambar: ['img/paket-melamin.svg']
  }
];
