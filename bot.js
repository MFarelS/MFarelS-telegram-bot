console.log('bot.js AKTIF')

const { TokenBot, ApiKeyXTeam } = require("./settings.json")
const TeleBot = require('telebot')
const delay = require('delay')
const bot = new TeleBot({
    token: TokenBot
})

bot.on(['/start', '/bot'], async (msg, args) => {
    let replyMarkup = bot.keyboard([
        ['/menu 📄', '/ingfo 📈️', '/donate 💎', '/mfarelsz 🤖'],
    ], {resize: true});
await bot.sendPhoto(msg.chat.id, './MFarelS.jpg', { caption: `
Hi ${msg.from.username} -- ${msg.from.first_name} ${msg.from.last_name}! 👋

Saya Adalah MFarelSZ BOT😄!

Kirim Perintah /menu
Untuk Melihat Menu Pada BOT Ini😙

Kirim Perintah /ingfo 
Untuk Melihat Tentang BOT Ini😜

Kirim Perintah /donate
Untuk Berdonasi😁

Kirim Perintah /mfarels
Untuk Melihat Koleksi MFarelSZ BOT 🤖

Terima Kasih☺
`
})
return await bot.sendMessage(msg.chat.id, 'Kirim Perintah /hide Untuk Menyembunyikan Tombol', {replyMarkup})
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Kirim Perintah /show Untuk Menampilkan Tombol', {replyMarkup: 'hide'})
})

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu 📄', '/ingfo 📈️', '/donate 💎', '/mfarelsz 🤖'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Kirim Perintah /hide Untuk Menyembunyikan Tombol', {replyMarkup})
})


bot.on(['/menu', '/help'], async (msg, args) => {
    return bot.sendMessage
(msg.chat.id, `
क════════क   ⊹⊱✫⊰⊹  क════════क

Selamat Datang Di MFarelSZ BOT

Di Buat Oleh : @MFarelS
YouTube : MFarelS CH
Instagram : @mfarelsch
GitHub :  @MFarelS
WhatsApp : 0812-1908-7237
Telegram : @MFarelS
Saweria : MFarelS

क════════क   ⊹⊱✫⊰⊹  क════════क

╭──✪═════ 「 MFARELSZ 」 ══════✪
├
├≽ /menu
├≽ /ingfo
├≽ /donate
├≽ /mfarelsz
├≽ /ytmp4 [link video youtube]
├
╰──✪═════ 「 MFARELSZ 」 ══════✪

क════════क   ⊹⊱✫⊰⊹  क════════क
`)
})



bot.on(['/ingfo', '/info'], async (msg, args) => {
return bot.sendMessage
(msg.chat.id, `
क════════क   ⊹⊱✫⊰⊹  क════════क

╭──✪═════ 「 MFARELS 」 ══════✪
├
├≽ Di Kembangkan Oleh : MFarelS 
├≽ Dari : Senin, 25, Januari, 2021
├≽ Hingga : Senin, 1, Maret, 2021
├
├------------------------------------------------------------
├
├≽ YouTube : MFarelS CH
├≽ Instagram : @mfarelsch
├≽ GitHub : @MFarelS
├≽ WhatsApp : 0812-1908-7237
├≽ Telegram : @MFarelS
├≽ Saweria : MFarelS
├
├------------------------------------------------------------
├
├≽ https://youtube.com/channel/UCYfBSMa1JJbKwD8bNm-etiA
├≽ https://instagram.com/mfarelsch
├≽ https://github.com/MFarelS
├≽ https://wa.me/6281219087237
├≽ https://t.me/MFarelS
├≽ https://saweria.co/MFarelS
├
╰──✪═════ 「 MFARELS 」 ══════✪

क════════क   ⊹⊱✫⊰⊹  क════════क
`)

})


bot.on(['/donate', '/donasi'], async (msg, args) => {
return bot.sendMessage
(msg.chat.id, 
`
क════════क   ⊹⊱✫⊰⊹  क════════क

╭──✪═════ 「 MFARELSZ 」 ══════✪
├
├≽ Pulsa : 0812-1908-7237
├≽ GoPay : 0812-1908-7237
├≽ OVO : 0812-1908-7237
├≽ Dana : 0812-1908-7237
├≽ Saweria : https://saweria.co/donate/MFarelS
├
╰──✪═════ 「 MFARELSZ 」 ══════✪

क════════क   ⊹⊱✫⊰⊹  क════════क
`)
})


bot.on(['/mfarelsz', '/mfarelszbot'], async (msg, args) => {
return bot.sendMessage
(msg.chat.id, 
`
क════════क   ⊹⊱✫⊰⊹  क════════क

╭──✪═════ 「 MFARELSZ BOT 」 ══════✪
├
├≽ WhatsApp : wa.me/6283113554377
├≽ WhatsApp Group : https://chat.whatsapp.com/CIAZZwm2ADx9iogSnIpkLx
├≽ Telegram : t.me/mfarelsz_bot
├≽ Discord : https://discord.com/oauth2/authorize?client_id=804989448680374272&scope=bot
├
╰──✪═════ 「 MFARELSZ LIST 」 ══════✪

क════════क   ⊹⊱✫⊰⊹  क════════क
`)
})


require('./ytmp4.js')(bot) 

bot.start()






