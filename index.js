const http = require('http');
const express = require('express');
const fetch = require('node-fetch')
const app = express();

//keeping this project alive
app.get("/", (request, response) => {
  console.log('I was pinged!');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  fetch(`https://pinger.kemosaf5.repl.co`);
}, 5000);


//keeping Karrot.glitch.me alive
app.listen(process.env.PORT);
setInterval(() => {
  fetch(`http://karrot.glitch.me/`);
  console.log(`pinged Karrot`)
}, 5000);

//keeping Pencil.kemosaf5.repl.co alive
app.listen(process.env.PORT);
setInterval(() => {
  fetch(`https://Pencil.kemosaf5.repl.co`);
  console.log(`pinged Pencil`)
}, 5000);


//creating a Discord bot so that I can tell if the bot is online Karrot is getting pinged

const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async() => {
        console.log(`readyyyy!`)
        client.user.setActivity('Pinging Karrot! 👍')
})
client.login(process.env.TOKEN)
