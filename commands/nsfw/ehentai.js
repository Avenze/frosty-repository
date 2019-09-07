const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send({embed: { color: 0xFF0000, title: "ERROR :small_red_triangle_down:", description: "Please go to an NSFW channel!" } }).catch(console.error);

  var subreddits = [
      'EmbarrassedHentai'
  ]
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(sub)
      .then(url => {
          request.get(url).then(r => {
              fs.writeFileSync(`ehentai.jpg`, r.body)
              message.channel.sendFile(r.body)
              fs.unlinkSync(`./ehentai.jpg`)
          })
      })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'ehentai',
  description: 'EmbarrassedHentai',
  usage: 'ehentai'
};
