// Import modul fs untuk membaca dan menulis file
const fs = require('fs');

// Data harga untuk setiap game dari data.json
let gameData;

// Fungsi untuk menampilkan popup
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Fungsi untuk memperbarui dropdown topup berdasarkan game yang dipilih
function updateTopupOptions() {
  const game = document.getElementById('gameSelect').value;
  const topupSelect = document.getElementById('topupSelect');
  topupSelect.innerHTML = '';

  // Ambil data harga untuk game yang dipilih dari gameData
  const gamePrices = gameData.games[game].topup;

  // Buat opsi dropdown topup berdasarkan game yang dipilih
  gamePrices.forEach(price => {
    const option = document.createElement('option');
    option.value = price.amount;
    option.textContent = `${price.amount} (${price.price})`;
    topupSelect.appendChild(option);
  });
}

// Fungsi untuk mengambil data dari data.json
function loadData() {
  try {
    const jsonData = fs.readFileSync('./data.json', 'utf8');
    gameData = JSON.parse(jsonData);
  } catch (error) {
    console.error('Error loading data:', error);
    gameData = {};
  }
}

// Fungsi untuk memperbarui harga dalam data.json
function updateData() {
  const game = document.getElementById('gameSelect').value;
  const topup = document.getElementById('topupSelect').value;
  const harga = document.getElementById('hargaInput').value;

  // Update harga dalam gameData
  const gamePrices = gameData.games[game].topup;
  const priceToUpdate = gamePrices.find(price => price.amount === parseInt(topup));
  if (priceToUpdate) {
    priceToUpdate.price = parseInt(harga);
  }

  // Simpan perubahan kembali ke data.json
  fs.writeFileSync('./data.json', JSON.stringify(gameData));

  alert('Harga berhasil diperbarui!');
}

// Memanggil fungsi loadData saat halaman dimuat
window.onload = function() {
  loadData();
  updateTopupOptions(); // Memperbarui dropdown topup saat halaman dimuat
};
