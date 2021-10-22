const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
exports.run = async (client, message, args) => {
  let covid = args[0];
  const embed = new discord.MessageEmbed()
    .setDescription(`Kullanıcıyı sunucudan atmak için butona basın.`)
    .setTitle("Tahsin Eren | Kick");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("At")
    .setID("kick");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    button.reply.defer();
    if (button.id == "kick") {
      client.users.cache.get(covid).send(`${message.guild.name} adlı sunucudan atıldınız.`)
      message.guild.members.kick(covid);
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
  name: "kick"
};