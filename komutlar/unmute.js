const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
  const ayarlar = require("../ayarlar.json");
let unmute = ayarlar.muterol

exports.run = async (client, message, args) => {
  let covid = message.mentions.users.first()
  const embed = new discord.MessageEmbed()
    .setDescription(`Kullanıcıyı unmutelemek için butona basın.`)
    .setTitle("Covid-19 | Unmute");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("unmute")
    .setID("unmute");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    button.reply.defer();
    if (button.id == "unmute") {
      client.users.cache.get(covid.id).send(`${message.guild.name} adlı sunucudaki muteniz açıldı.`)
      message.guild.members.cache.get(covid.id).roles.remove(unmute)
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 2,
  aliases: []
};
exports.help = {
  name: "unmute"
};