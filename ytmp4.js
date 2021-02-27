console.log('ytmp4.js AKTIF')

const { TokenBot, ApiKeyXTeam } = require("./settings.json")
const axios = require('axios')
const TeleBot = require('telebot')
const bot = new TeleBot({
    token: TokenBot
})

module.exports = bot => {

    bot.on(/^\/ytmp4 ([\s\S]+)/, async (msg, args) => {
    const cmd = args.match[1]
    const urlyt = args.match[1]
    const apiyt = await axios.get(`https://api.xteam.xyz/dl/ytmp4?url=${urlyt}&APIKEY=` + ApiKeyXTeam)
    var { judul, size, thumbnail, url } = apiyt.data
    console.log(cmd + ' Dari Akun @' + msg.from.username) 
    await bot.sendPhoto(msg.chat.id, thumbnail, { caption: `Judul : ${judul}\nUkuran : ${size}\nThumbnail : ${thumbnail}\nDownload : ${url}` })
    await bot.sendVideo(msg.chat.id, url, { caption: `Judul : ${judul}\nUkuran : ${size}\nThumbnail : ${thumbnail}\nDownload : ${url}` })
    })

}




