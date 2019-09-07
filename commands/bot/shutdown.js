const Discord = require("discord.js");
const config = require("commands/../../configuration.json");

// Command
module.exports.run = async (bot, message, args) => {
    if (message.author.id === config.administrators.Avenze || config.administrators.Askeen) {
        console.log("ACT: User called shutdown! Verifying data!");
        message.react("✔️");
        message.reply("Shutting down...");
        process.exit(1);
    } else {
        message.react("❌");
        message.reply("You're not authorized to commit this action!");
    };
};

module.exports.help = {
    name: "shutdown"
}