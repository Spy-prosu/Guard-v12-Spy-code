const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
exports.run = async (client, message, args) => {
  let covid = args[0];
  const embed = new discord.MessageEmbed()
    .setDescription(`Kullanıcıyı sunucudan yasaklamak için butona basın.`)
    .setTitle("Tahsin Eren| Ban");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("Banla")
    .setID("ban");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    button.reply.defer();
    if (button.id == "ban") {
      client.users.cache.get(covid).send(`${message.guild.name} adlı sunucudan yasaklandınız.`)
      message.guild.members.ban(covid);
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
  name: "ban"
};