const Discord = require("discord.js");

var meme_subreddits = [
    "meme",
    "memes",
];
var meme_subreddits = [
    "meme",
    "memes",
];

// Command
module.exports.run = async (bot, message, args) => {
    if (args[0] === "") {
        message.channel.send("You need to supply a valid argument! Choose from ")
    } else if (args[0] === "connect") {

    } else if (args[0] === "dev") {

    }
}

module.exports.help = {
    name: "reddit",
    desc: "Gives you an awesome meme!"
}