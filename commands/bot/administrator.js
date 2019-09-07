const Discord = require("discord.js");
const config = require("commands/../../configuration.json");

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports.run = async (bot, message, args) => {
    if (message.author.id === config.administrators.Avenze || config.administrators.Askeen || 526104137432039457) {
        if (args[0] === "eval") {
            console.log("ACT: User entered eval mode!");
            try {
                var evaled = eval(args[1]);
                if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);
                message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
         } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        } else if (args[0] === "setGame")  {
            bot.setPresence({game: {name: args[1], type: 0}})
        } else if (args[0] === "say") {
            let channel = message.mentions.channels.first();
            let announcement = args.slice(2).join(" ")
            channel.send(announcement)
            message.delete()
        }
    } else {
        message.reply("Insufficient permissions!")
    }
};

module.exports.help = {
    name: "administrator"
}