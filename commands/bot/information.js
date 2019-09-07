const Discord = require("discord.js");
const appRoot = require("app-root-path")

// Command
module.exports.run = async (bot, message, args) => {
        let ping = "OMG STOP YOU FUCKING RETARD YOU BETTER KILL YOURSELF BEFORE I BOMB THE FUCK OUT OF YOUR COUNTRY AND MAKE SURE YOU DIE YOU FUCKING KILT "
        let stime = Date.now();
        message.reply("Retrieving information...").then(() => {
            let etime = Date.now();

            ping = etime - stime
        });
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400)
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.RichEmbed()
        .setTitle("Frosty's Uptime")
        .setColor(0xd04444)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
        .setDescription("Thanks for using Frosty! Frosty is actively being developed by Avenze & Frostcloud Studios")
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)

        .addField("Current uptime:",
            `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds!`, true)
        .addField("Libraries Used:",
            `${Object.keys(require(appRoot + "/package.json").dependencies)}`, true)
        .addField("Developers:",
            "Avenze#6864", true)
        .addField("Contributors:",
            "Avenze#6864, Charlie#1210", true)
        .addField("Ping:",
            `Current Ping: ${ping}ms`)
     message.channel.send(embed);
}

module.exports.help = {
    name: "information",
    desc: "Sends an embed of all commands, developers, libraries, etc."
}