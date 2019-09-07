// // // // // // // // // // // // //
// Variables & Services / Libraries //
// // // // // // // // // // // // //

const fs = require("fs");
const glob = require("glob");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const spreadsheets = require("google-spreadsheet");
const request = require("request");
const discord = require("discord.js");
const { promisify } = require("util");

const configuration = require("./configuration.json");
const credentials = require("./assets/credentials.json");

const client = new discord.Client();
const app = express();
const server = http.createServer(app);
const socket = socketIO.listen(server);

client.commands = new discord.Collection();
client.events = new discord.Collection();

Object.defineProperties(client, {
    query: {
        value: new Map()
    }
});

// Event
client.on("ready", async () => {
    console.log(`ACT: Successfully started bot! Running on ${client.user.username}`)
    
    // Google Spreadsheets
    const spreadsheet = new spreadsheets("1qBE7tJsdYbu--EDsDYUjw8CUTWhxGHMM83fyh2BlshE");
    const credentials_json = {
        client_email: credentials.client_email,
        private_key: credentials.private_key
    }
    await promisify(spreadsheet.useServiceAccountAuth)(credentials_json).then(err => {
        if (err) {
            console.error(err)
        }
    });

    const info = await promisify(spreadsheet.getInfo)();
    const sheet = info.worksheets[0];

    let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(`ACT: Generated link! ${link}`)
});

// Web
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, function() {
    console.log("ACT: Attempting connection to port 3000...")
    console.log("ACT: Successfully connected to port 3000!")
});

app.get("/", function(req, res) {
    console.log("yes someone accessed the webpage")
});

// Command Handler
fs.readdir("./events/", (err, files) => {
    if (err) console.log(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;

        let eventFunc = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.events.set(eventName, eventFunc);

        client.on(eventName, (...args) => eventFunc.run(client, ...args));
        console.log(`ACT: Loaded Event: ${eventName}`);
    });
});

glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;

        let commandFunc = require(`./` + f);
        let commandName = commandFunc.help.name
        client.commands.set(commandName, commandFunc);

        console.log(`ACT: Loaded Command: f!${commandName}`);
    });
});

// other shit ok lOl
function registerMessage(client, message, args) {
    const 
}

require("./modules/functions.js")(client);
client.on("message", (message) => {
    if (message.channel.type === "dm") return;
    
    let array = message.content.split(" ");
    let command = array[0]
    let arguments = array.slice(1);

    let commandfile = client.commands.get(command.slice(configuration.prefix.length))
    if (commandfile) commandfile.run(client, message, arguments)
    registerMessage(client, message, arguments)
});

// Setup
client.login(configuration.token);
