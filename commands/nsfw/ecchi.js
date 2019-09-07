const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send({embed: { color: 0xFF0000, title: "ERROR :small_red_triangle_down:", description: "Please go to an NSFW channel!" } }).catch(console.error);

    var subreddits = [
        'lightYuri',
        'ecchi',
        'ecchigifs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFileSync(`ecchi.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlinkSync(`./ecchi.jpg`)
            })
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  category: 'Nsfw',
  name: 'ecchi',
  description: 'Sends ecchi art.',
  usage: 'ecchi'
};
