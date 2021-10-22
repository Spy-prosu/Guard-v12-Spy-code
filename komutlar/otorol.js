const Discord = require('discord.js');
const { Database } = require("nukleon");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {

    if(args[0] == "rol") {
        var rolke = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        db.set(`otorolu_${message.guild.id}`, rolke.id) 
}

    if(args[0] == "kanal") {
        var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        db.set(`otokanal_${message.guild.id}`, kanal.id)
}

  if (args[0] === 'aç') {
    
    db.set(`otorol_${message.guild.id}`, 'aktif')
    message.channel.send(`otorolaçıldı.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`otorol_${message.guild.id}`, 'deaktif')
    message.channel.send(` otorol kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'otorol'
}; 