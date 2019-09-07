const Discord = require("discord.js")

exports.run = async (client, member) => {
    const logs = member.guild.channels.find(ch => ch.name === "logs")
    const embed = new Discord.RichEmbed()
          .setTitle("Member Joined")
          .setColor(0xd04444)
          .setFooter(`© Frostcloud Studios 2018 | Logging System`)
          .setDescription(`<@${member.user.id}> just joined the server! gwlfs`)
          .setTimestamp()
          .setThumbnail(member.user.avatarURL)
  
    logs.send(embed)
    member.addRoles(["515618740998635560", "500667664746807307"])
};