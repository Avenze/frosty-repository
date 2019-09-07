const Discord = require("discord.js");
const noblox = require("noblox.js")

// Command
module.exports.run = async (bot, message, args) => {
    let username = args[0]
    noblox.getIdFromUsername(username).then(id => {
            noblox.getPlayerInfo(parseInt(id)).then(function(info) {
                let date = new Date(info.joinDate);
                let dateInfo = bot.extractDate(date);
                let embed = new Discord.RichEmbed()
                    .setTitle("Frosty's Uptime")
                    .setColor(0xd04444)
                    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                    .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                    .setDescription("Stalking for information... success!")
                    .setTimestamp()
                    .setThumbnail(message.author.avatarURL)
                    .setURL(`https://roblox.com/users/${id}/profile`)

                    .addField("Username:",
                        info.username || "Failed to resolve information.", true)
                    .addField("User ID:",
                        id || "Failed to resolve information.", true)
                    .addField("Blurb:",
                        info.blurb || "Failed to resolve information.", true)
                    .addField("Status:",
                        info.status || "Failed to resolve information.", true)
                    .addField("Account Age:",
                        `${info.age} days old` || "Failed to resolve information.", true)
                    .addField("Register date:",
                        `${dateInfo.month}/${dateInfo.day}/${dateInfo.year}` || "Failed to resolve information.", true)
                    .addField("User link:",
                        `https://roblox.com/users/${id}/profile` || "Failed to resolve information.", true)
    
                message.channel.send(embed);
            }).catch(function(err) {
                let embed = new Discord.RichEmbed()
                    .setTitle("User Information")
                    .setColor(0xd04444)
                    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                    .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                    .setDescription("Stalking for information... failed!")
                    .setTimestamp()
                    .setThumbnail(message.author.avatarURL)

                    .addField("Error:",
                        err, true)

                    message.channel.send(embed)
                });
        }).catch(function(err) {
            let embed = new Discord.RichEmbed()
                .setTitle("User Information")
                .setColor(0xd04444)
                .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                .setDescription("Stalking for information... failed!")
                .setTimestamp()
                .setThumbnail(message.author.avatarURL)

                .addField("Error:",
                    err, true)
        message.channel.send(embed)
    });
}

module.exports.help = {
    name: "getplayerinfo"
}