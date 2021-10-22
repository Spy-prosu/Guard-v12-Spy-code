const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons')

exports.run = async (client, message, args) => {


let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]); 

const embed = new Discord.MessageEmbed()
 .setImage(user.avatarURL())
  let çalmakyasak = new MessageButton()
    .setStyle("red")
    .setLabel("Kapat")
    .setID("click_to_function");
message.channel.send({ button: çalmakyasak, embed: embed }).then(msg => {
 client.on("clickButton", async button => {
    if (button.id == "click_to_function") {
      msg.delete();
    }
});
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a","pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatar',
  usage: 'avatar'
};