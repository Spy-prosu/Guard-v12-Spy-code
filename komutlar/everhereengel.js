const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "**Bu Komutu Kullanabilmek İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın !**"
        )
        .setColor("RANDOM")
    );
  if (args[0] === 'aç') {
    
    db.set(`everhere_${message.guild.id}`, 'aktif')
    message.channel.send(`ever here engel açıldı.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`küfürengel_${message.guild.id}`, 'deaktif')
    message.channel.send(`ever here engel kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'ever-here-engel'
}; 