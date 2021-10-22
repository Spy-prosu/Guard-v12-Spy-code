const discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let jail = ayarlar.jailrol
let mute = ayarlar.muterol

exports.run = async (client, message, args) => {
  const embed = new discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Ayarlar")
  .setDescription(`
  Mute Rol: <@&${mute}>
  Jail Rol: <@&${jail}>
  `);
  message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: []
};
exports.help = {
  name: "ayarlar"
};