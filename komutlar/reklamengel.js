const Discord = require('discord.js');
const { Database } =  require('nukleon');
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
    
    db.set(`reklamengel_${message.guild.id}`, 'aktif')
    message.channel.send(`reklam engel açıldı.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`reklamengel_${message.guild.id}`, 'deaktif')
    message.channel.send(`reklam engel kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engel'
};  