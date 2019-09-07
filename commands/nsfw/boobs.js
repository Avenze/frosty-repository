const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send({embed: { color: 0xFF0000, title: "ERROR :small_red_triangle_down:", description: "Please go to an NSFW channel!" } }).catch(console.error);

    var subreddits = [
        'boobs',
        'bigboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFileSync(`boobs.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlinkSync(`./boobs.jpg`)
            })
        })
}

exports.help = {
  name: 'boobs',
  description: 'Perverts!',
};
