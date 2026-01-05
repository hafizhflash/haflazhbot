global.owner = ['6285787834363', '12152981793'] // wajib di isi tidak boleh kosong
global.mods  = ['6285787834363', '12152981793'] // wajib di isi tidak boleh kosong
global.prems = ['6285787834363', '12152981793'] // wajib di isi tidak boleh kosong
global.nameowner = 'Hafizh' // wajib di isi tidak boleh kosong
global.numberowner = '6285787834363' // wajib di isi tidak boleh kosong
global.mail = 'muhafid6422@gmail.com' // wajib di isi tidak boleh kosong
global.gc = 'https://chat.whatsapp.com/FZSXzC6XEl12h5mg2dSGJt' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/hfzhyz' // wajib di isi tidak boleh kosong
global.wm = '© HaFlazh' // isi nama bot atau nama kalian
global.wait = '_*Tunggu sedang di proses...*_' // ini pesan simulasi loading
global.eror = '_*Server Error*_' // ini pesan saat terjadi kesalahan
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*' // ini pesan simulasi saat loading pembuatan sticker
global.packname = 'Made With HaFlazh-Bot' // watermark stikcker packname
global.author = 'wa.me/6285171662264' // watermark stikcker author
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false // Set true/false untuk anti spam (default: false) - DIMATIKAN untuk performa
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'hafizhflash'
global.aksesKey = 'YOUR_AKSESKEY_HERE'
// Daftar terlebih dahulu https://api.botcahx.eu.org


// OPSIONAL 
// Jika ingin menggunakan api BETABOTZ sekaligus buat fitur dan juga daftar dan isi apikey di bawah ini. 
// global.lann = 'beta-flazhing'
// Daftar https://api.betabotz.eu.org 

// Tidak boleh diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Tidak boleh diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
