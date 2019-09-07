const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send({embed: { color: 0xFF0000, title: "ERROR :small_red_triangle_down:", description: "Please go to an NSFW channel!" } }).catch(console.error);

    var subreddits = [
        'nsfw',
        'nsfw2',
        'TipOfMyPenis',
        'bonermaterial',
        'porn',
        'nsfw411',
        'iWantToFuckHer',
        'exxxtras',
        'distension',
        'bimbofetish',
        'christangirls',
        'cuckold',
        'dirtygaming',
        'hotstuffnsfw',
        'uncommonposes',
        'nostalgiafapping',
        'sexygirls',
        'legalteens',
        'collegesluts',
        'adorableporn',
        'legalteensXXX',
        'gonewild18',
        '18_19',
        'just18',
        'PornStarletHQ',
        'fauxbait',
        'realgirls',
        'amateur',
        'homemadexxx',
        'dirtypenpals',
        'FestivalSluts',
        'CollegeAmateurs',
        'nsfw_amateurs',
        'amateurporn',
        'normalnudes',
        'stripgirls'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFileSync(`hentai.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlinkSync(`./hentai.jpg`)
            })
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'porn',
  description: 'Perverts!',
  usage: 'porn'
};
