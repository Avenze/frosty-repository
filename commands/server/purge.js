const Discord = require("discord.js");
const config = require("commands/../../configuration.json")

// Command
module.exports.run = async (bot, message, args) => {
    const user = message.mentions.first();
    const amount = args[1]
    
};

module.exports.help = {
    name: "purge"
}