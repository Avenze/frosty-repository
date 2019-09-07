const Discord = require("discord.js")

exports.run = async (client, guild, user) => {
    const logs = member.guild.channels.find(ch => ch.name === "logs")
    const embed = new Discord.RichEmbed()
          .setTitle("Member Joined")
          .setColor(0xd04444)
          .setFooter(`© Frostcloud Studios 2018 | Logging System`)
          .setDescription(`<@${user.id}> was just unbanned!`)
          .setTimestamp()
          .setThumbnail(user.avatarURL)
  
    logs.send(embed)
    member.addRoles(["515618740998635560", "500667664746807307"])
};