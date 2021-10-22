const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
  const ayarlar = require("../ayarlar.json");
let jail = ayarlar.jailrol

exports.run = async (client, message, args) => {
  let covid = message.mentions.users.first()
  const embed = new discord.MessageEmbed()
    .setDescription(`Kullanıcıyı jaile atmak için butona basın.`)
    .setTitle("Covid-19 | Jail");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("jail")
    .setID("jail");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    button.reply.defer();
    if (button.id == "jail") {
      client.users.cache.get(covid.id).send(`${message.guild.name} adlı sunucuda jaile atıldınız.`)
      message.guild.members.cache.get(covid.id).roles.add(jail)
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
  name: "jail"
};