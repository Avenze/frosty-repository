const Discord = require("discord.js");
const config = require("commands/../../configuration.json");


// Command
module.exports.run = async (bot, message, args) => {
    if (!message.author.roles.find(role => role.name === "MusicPermissions")) {
        message.reply(":no_entry: Access Denied! You are not a DJ! :no_entry:")
        message.react("❌");
    } else {
        
    }
}

module.exports.help = {
    name: "play",
    desc: "Plays the supplied station!"
}