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
