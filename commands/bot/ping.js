const Discord = require("discord.js");

// Command
module.exports.run = async (bot, message, args) => {
    let stime = Date.now();
    message.reply("Calculating latency...").then(() => {
        let etime = Date.now();

        let ping = Math.round(etime - stime)
        let rounded = ping / 1000

        message.reply(`Recived data! Latency was ${ping}ms`);
        message.react("✅");
    });
}

module.exports.help = {
    name: "ping"
}