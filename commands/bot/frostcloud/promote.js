const Discord = require("discord.js");
const config = require("commands/../../configuration.json");
const noblox = require("noblox.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id === config.administrators.Avenze || config.administrators.Askeen || config.administrators.Verification) {
        noblox.cookieLogin(config.robloxtoken)
    };
};

module.exports.help = {
    name: "promote"
}