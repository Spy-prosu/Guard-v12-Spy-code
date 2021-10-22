const discord = require('discord.js'); //modüller

exports.run = async (client, message, args) => {
          if (!message.member.permissions.has("MANAGE_MESSAGES"))
          return message.channel.send(
          new discord.MessageEmbed()
            .setDescription("**Bu Komutu Kullanabilmek İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın!**")
            .setColor("RANDOM")
					);
	
        let sil = args[0];
        if (!sil) { return message.channel.send(`Bir sayı belirtmelisin! \n**Örnek;** !sil 10`) }
        if (sil > 100) sil = 100;
            await message.delete()
            message.channel.bulkDelete(sil);
            await message.channel.send(`${sil} adet mesaj silindi`)
    } 

exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  exports.help = {
    name: "sil"
  }; 
