const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.login(config.token);

client.on("ready", () => {
  console.log("Leblanc is open!");
});

//
client.on("ready", () => {
  client.user.setActivity(`Making coffee`);
  console.log(`Ready to serve coffee for ${client.users.size} patrons.`);
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;
  // Prevents this bot from interacting with other bots
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    //prints the new prefix
    message.channel.send("prefix has been changed to " + config.prefix)
  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("!curry for curry");
    message.channel.send("**!coffee** for coffee");
    message.channel.send("**!danial** for danial lore");
  }
  if (message.content.startsWith(config.prefix + "danial")) {
    message.channel.send("i like memes and lasagna");
  }

  /*
    //elis image poster - it dont work
    const currypic = ['https://78.media.tumblr.com/8c653331fab3d3a1a0b1cc0de5ca3843/tumblr_nxhfrvIR5I1uxvvvzo1_500.gif ']
    const coffeepic = ['https://i.gifer.com/w3f.gif ']
      if (message.content.startsWith(config.prefix + "curry")) {
        message.channel.send("haiyo!" + currypic);
      }
      if (message.content.startsWith(config.prefix + "coffee")) {
        message.channel.send("douzo!" + coffeepic);
      }
      */
      //this method is given by the offical discord.js website
      //https://discord.js.org/#/docs/main/stable/examples/attachments
      const { Client, Attachment } = require('discord.js');
      if (message.content.startsWith(config.prefix + "coffee")) {
          // Create the attachment using Attachment
          const attachment = new Attachment('https://i0.wp.com/imageshack.com/a/img913/5224/C3VoRy.png');
          // Send the attachment in the message channel
          message.channel.send(attachment);
        }
      if (message.content.startsWith(config.prefix + "curry")) {
        const attachment = new Attachment('https://78.media.tumblr.com/8c653331fab3d3a1a0b1cc0de5ca3843/tumblr_nxhfrvIR5I1uxvvvzo1_500.gif');
        message.channel.send(attachment);
      }
});
