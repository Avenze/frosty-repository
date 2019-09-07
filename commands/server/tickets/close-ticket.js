const Discord = require("discord.js");

// Command
module.exports.run = async (bot, message, args) => {
    if (!message.channel.name.startsWith("ticket-")) return message.reply("this isnt a ticket! what we're you trying to do?");
    message.channel.delete()
}
module.exports.help = {
    name: "close"
}