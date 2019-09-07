const Discord = require("discord.js");
const config = require("commands/../../configuration.json");
const Jimp = require("jimp")
const { randomBytes } = require("crypto")

module.exports.run = async (bot, message, args) => {
    if (message.channel.name === "verification") {
        if (args.length === 0) {
            let captcha = randomBytes(32).toString("hex").substr(0, 5);
            let font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
            let image = await Jimp.read("./assets/noise.jpg");
            image.print(font, 0, 0, captcha)

            const buffer = await image.getBufferAsync(Jimp.MIME_JPEG)
            const embed = new Discord.RichEmbed()
                .setTitle("Captcha Verification System")
                .setColor(0xd04444)
                .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
                .setFooter(`© Frostcloud Studios 2018 | Command executed by ${message.author.username}#${message.author.discriminator}`)
                .setDescription("The Frostcloud Studios Discord server is protected by a captcha verification system, that prevents the server from being raided./n" +
                    `Please solve this captcha by sending "f!verify [your captcha code here]", thank you!`)
                .setTimestamp()
                .setThumbnail(message.author.avatarURL)
                .attachFile({ attachment: buffer, name: "captcha.jpeg"})
                .setImage("attachment://captcha.jpeg")

            message.author.send(embed).catch(() => {
                message.reply("⛔ | Failed to send captcha, maybe you have Direct Messages disabled?");
            })

            bot.query.set(message.author.id, captcha);
        } else {
            if (!bot.query.has(message.author.id)) return message.reply(`⛔ | Please request a captcha by sending "f!verify" and you will recieve a captcha!`);

            const captcha = this.query.get(message.author.id);

            if (args[0] !== captcha) return message.reply("⛔ | Invalid captcha! Please try again!");
            else {
                message.member.addRole(511143551229231115).then(() => {
                    message.reply("✅ | Successfully verified.")
                }).catch(console.error);
                bot.query.delete(message.author.id);
            };
        };
    };
};

module.exports.help = {
    name: "verify"
}