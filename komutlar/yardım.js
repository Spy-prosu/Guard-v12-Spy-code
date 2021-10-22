const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons") 
const db = require("croxydb") 
exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`)

const b1 = new MessageButton() 
.setStyle("url") 
.setLabel("Davet linkim")
.setEmoji("893159198555258881")
.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)

const b3 = new MessageButton() 
.setStyle("url") 
.setLabel("Destek Sunucum")
.setEmoji("896094825718382642")
.setURL("")

const embed = new Discord.MessageEmbed() 
.setColor("RED")
.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())
.setDescription(`📢 Bu Sunucudaki Prefix\' im: ${prefix || "t."}`) 

.addField("Yetkili Komutlar :tada: [ `14` ] ", "`ayarlar`, `küfür-engel`, `ever-here-engel`, `jail`, `jail`, `kick`, `ban`, `reklam-engel`, `mute`, `otorol`, `reklam-engel`, `sil`, `unjail`, `unmute`, `yavaşmod`")
.addField("Kullanıcı Komutları 👥 [ `4` ] ", "`avatar`, `sa-as`, `afk`, `istatistik`") 
.setFooter("Tahsin Eren Butonlu Moderasyon", client.user.displayAvatarURL())

message.channel.send({
embed: embed, 
buttons: [b1, b3,] 
})
} 

exports.conf = {
aliases: [] 
}
exports.help = {
name: "yardım" 

}