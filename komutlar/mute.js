const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
  const ayarlar = require("../ayarlar.json");
let mute = ayarlar.muterol

exports.run = async (client, message, args) => {
  let covid = message.mentions.users.first()
  const embed = new discord.MessageEmbed()
    .setDescription(`Kullanıcıyı mutelemek için butona basın.`)
    .setTitle("Covid-19 | Mute");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("mute")
    .setID("mute");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    button.reply.defer();
    if (button.id == "mute") {
      client.users.cache.get(covid.id).send(`${message.guild.name} adlı sunucuda mutelendiniz.`)
      message.guild.members.cache.get(covid.id).roles.add(mute)
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
  name: "mute"
};