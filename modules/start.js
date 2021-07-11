const config = require('../config')
const axios = require('axios')

async function get(battery, phn_info) {

    if (battery.plugged) {
        var batttxt = `${battery.battery}% (Charging)`
    } else {
        var batttxt = `${battery.battery}%`
    }

    return ({
        msg: `*WhatsApp-Ubot* _(1.5.0)_\n\nThis chat is Powered By *WhatsApp-Ubot*\n\n*Battery:* ${batttxt}\n*Device:* ${phn_info.device_manufacturer} ${phn_info.device_model}\n*WA Version:* ${phn_info.wa_version}\n*Pmpermit:* ${config.pmpermit_enabled}\n*Mutetime:* ${config.pmpermit_mutetime/60} Minutes\n\n*Official Repository Url 👇*\n` + "```https://github.com/Rzky3016/WhatsApp-Ubot```",
        mimetype: "image/jpeg",
        data: Buffer.from(((await axios.get('https://telegra.ph/file/291cccef32ea1b2dc6241.jpg', { responseType: 'Rzky' })).data)).toString('base64'),
        filename: "start.jpg"
    })
}

module.exports = {
    get
}
