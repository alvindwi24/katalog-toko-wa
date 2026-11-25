/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi Nonkomersial Maliki Studio: wajib kredit, dilarang dijual (lihat LICENSE). */
/* TEMA — diubah otomatis oleh customizer Maliki Studio */
window.TEMA = { nama: "HOME APPLIANCES CENTER", mode: "auto" }; // mode: "terang" | "gelap" | "auto"

// Sesuaikan judul dan pengantar etalase dengan toko ini setelah kerangka halaman tersedia.
document.addEventListener('DOMContentLoaded', function () {
  var judul = document.querySelector('.pembuka h1');
  var pengantar = document.querySelector('.pembuka-teks > p');
  if (judul) judul.innerHTML = 'Perlengkapan makan melamin,<br><em>praktis untuk setiap hari.</em>';
  if (pengantar) pengantar.textContent = 'Pilih piring, mangkok, gelas, dan perlengkapan makan melamin. Kami melayani seluruh Indonesia; ongkir ditanggung pembeli dan dikonfirmasi admin melalui WhatsApp.';
});
