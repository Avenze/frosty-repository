const Discord = require("discord.js");
const config = require("commands/../../configuration.json");

// Command
module.exports.run = async (bot, message, args) => {
    if (!message.author.hasPermission("MANAGE_GUILD")) {
        message.reply(":no_entry: Access Denied, no permissions! :no_entry:")
    }
}

module.exports.help = {
    name: "giverole"
}