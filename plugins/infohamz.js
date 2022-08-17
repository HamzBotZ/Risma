let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Hamz
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jawa Barat
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/FdP0znFDbNWKkleGN6bhxx
│ ✎ _Official Grup 2_ :
│    Gaada Banh:D
│ ✎ _Youtube _:
│    https://youtube.com/channel/Hamz9999+
│ ✎ _Instagram_ : 
│    https://instagram.com/hamzz.jr
│ ✎ _WhatsApp_ :
│    wa.me/6288214989352
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infohamz)$/i

handler.exp = 150

module.exports = handler
