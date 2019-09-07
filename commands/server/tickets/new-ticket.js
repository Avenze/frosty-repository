const Discord = require("discord.js");

// Command
module.exports.run = async (bot, message, args) => {
        if (message.guild.channels.exists("name", `ticket-${message.author.id}`)) {
            const embed = new Discord.RichEmbed()
                .setTitle("Ticket System")
                .setColor(0xd04444)
                .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                .setDescription(":rage: You already have a ticket open! Close it before trying to open another ticket!")
                .setTimestamp()
                .setThumbnail(message.author.avatarURL)

            message.channel.send(embed); 
        } else if (!message.guild.channels.exists("name", `ticket-${message.author.id}`)) {
            const server = message.guild;
            server.createChannel(`ticket-${message.author.id}`, "text").then(c => {
                let ticket_access = server.roles.find(channel => channel.name === "#TICKETACCESS")
                let everyone = server.roles.find(channel => channel.name === "@everyone")
                c.overwritePermissions(ticket_access, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });
                c.overwritePermissions(everyone, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false
                });
                c.overwritePermissions(message.author, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });
                c.setParent("535166956211404820")

                const embed = new Discord.RichEmbed()
                    .setTitle("Ticket System")
                    .setColor(0xd04444)
                    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                    .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                    .setDescription("Hi there," + message.author.username + "! Please describe your problem/report/suggestion in depth! Our support team will be with you in a moment, hold tight!")
                    .setTimestamp()
                    .setThumbnail(message.author.avatarURL)

                c.send(embed)
                c.send("@everyone")

                const embede = new Discord.RichEmbed()
                    .setTitle("Ticket System")
                    .setColor(0xd04444)
                    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                    .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                    .setDescription("Hi there, " + message.author.username + "! Please describe your problem/report/suggestion in depth! Our support team will be with you in a moment, hold tight!")
                    .setTimestamp()
                    .setThumbnail(message.author.avatarURL)

                message.channel.send(embede)
            }).catch(console.error);
        }
}

module.exports.help = {
    name: "new",
    desc: "Sends an embed of all commands, developers, libraries, etc."
}