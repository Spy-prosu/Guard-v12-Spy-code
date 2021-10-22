const fs = require("fs");
const chalk = require('chalk');
const Discord = require("discord.js");
const discord = require("discord.js");
const button = require("discord-buttons");
const client = new discord.Client();
const ayarlar = require("./ayarlar.json");
require("discord-buttons")(client);

client.on("ready", () => {
  console.log(`Logged in as @${client.user.tag}!`);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("ready", () => {
  client.user.setActivity(
    `${client.guilds.cache.size} Sunucu, ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} Üye, ${client.channels.cache.size} Kanal`
  );
  console.log("Botun durumu `Rahatsız etmeyin` olarak ayarlandı.");
});

client.login(ayarlar.token);

//////SA AS ////
const db = require("quick.db")

client.on("message", async message => {
  const Bdgo = message.content.toLocaleLowerCase();

  if (
    Bdgo === "selam" ||
    Bdgo === "sa" ||
    Bdgo === "selamün aleyküm" ||
    Bdgo === "selamun aleyküm" ||
    Bdgo === "slm" ||
    Bdgo === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const embed = new Discord.RichEmbed()
      
     .setDescription(`:smiley: Aleyküm Selam, Hoş Geldin ^-^ :tada:`)
     .setColor("GREEN")
      
    return message.channel.send(embed)
    }
  }
});
/////KÜFÜR ENGEL 
client.on("message", async msg => {
const Database = require("plasma-db");
const db = new Database("./database.json"); 
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
  const gereksiz = await db.fetch(`küfürengel_${msg.guild.id}`);
  if (gereksiz === "aktif") {
if (msg.content.toLowerCase().includes('sg') ||
msg.content.toLowerCase().includes('amk') || 
msg.content.toLowerCase().includes('aq') || 
msg.content.toLowerCase().includes('mk') || 
msg.content.toLowerCase().includes('oc') || 
msg.content.toLowerCase().includes('oç') || 
msg.content.toLowerCase().includes('orospu çoçuğu') || 
msg.content.toLowerCase().includes('orospu') || 
msg.content.toLowerCase().includes('amına kodugum') || msg.content.toLowerCase().includes('siktir') || 
msg.content.toLowerCase().includes('yavşak') || 
msg.content.toLowerCase().includes('şerefsiz') || 
msg.content.toLowerCase().includes('namussuz') ||
msg.content.toLowerCase().includes('ananı sikiyim') || 
msg.content.toLowerCase().includes('amını sikiyim') || 
msg.content.toLowerCase().includes('yarrağımı ye') || 
msg.content.toLowerCase().includes('babanı sikiyim') || 
msg.content.toLowerCase().includes('m@l') ||
msg.content.toLowerCase().includes('slk') ||
msg.content.toLowerCase().includes('0ç') ||
msg.content.toLowerCase().includes('sik') || 
msg.content.toLowerCase().includes('piç')  ) 
{
const sa = new Discord.MessageEmbed()
.setTitle('InFlames & Eren.izm')
.setDescription(`<@${msg.author.id}> küfür etme kardeşim sıkıntılı mısın?`)
.setColor('#2f3136');
msg.delete();
msg.author.send(sa).then(msg => msg.delete({ timeout: 3000 }))
}
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});
////OTOROL
client.on('guildMemberAdd', async member => {  
  const gereksiz = await db.fetch(`otorol_${member.guild.id}`);
  if (gereksiz === "aktif") {      
    var rolke = db.fetch(`otorolu_${member.guild.id}`);
   var kanal = db.fetch(`otokanal_${member.guild.id}`);
  var rol = member.guild.roles.cache.get(rolke)
   member.roles.add(rol.id)
client.channels.cache.get(kanal).send(`<@${member.id}> adlı kullanıcıyı başarıyla kaydettim`)

    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
}); 
/////REKLAM ENGEL 
client.on("message", async msg => {
    const g = await db.fetch(`reklamengel_${msg.guild.id}`);
    if (g === "aktif") {
        if (msg.content.toLowerCase().includes('.net') ||
    msg.content.toLowerCase().includes('.com') || 
    msg.content.toLowerCase().includes('.xyz') || 
    msg.content.toLowerCase().includes('.tk') ||  
    msg.content.toLowerCase().includes('.tr') ||  
    msg.content.toLowerCase().includes('.cf') || 
    msg.content.toLowerCase().includes('.pw') || 
    msg.content.toLowerCase().includes('.io') || 
    msg.content.toLowerCase().includes('.me') || 
    msg.content.toLowerCase().includes('.gg') || 
    msg.content.toLowerCase().includes('www') || 
    msg.content.toLowerCase().includes('http') || 
    msg.content.toLowerCase().includes('.gl') || 
    msg.content.toLowerCase().includes('.org') ||
    msg.content.toLowerCase().includes('.com.tr') || 
    msg.content.toLowerCase().includes('.biz') || 
    msg.content.toLowerCase().includes('net') || 
    msg.content.toLowerCase().includes('.rf.gd') || 
    msg.content.toLowerCase().includes('.az') ||
    msg.content.toLowerCase().includes('discord.gg') || 
    msg.content.toLowerCase().includes('party')) {
            if (msg.author.id == msg.guild.owner.id) return;
            if (msg.author.id == "762420804066738186") return;
            if (msg.author.id == client.user.id) return;
            const anti31 = new Discord.MessageEmbed()
                .setTitle('InFlames & Eren.izm')
                .setDescription(`<@${msg.author.id}> ndn reklam yapıyon şimdi ?`)
                .setColor('#2f3136');
            msg.delete();
            msg.channel.send(anti31).then(msg => msg.delete({ timeout: 3000 }))
        }
    } else if (g === "deaktif") {
    }
    if (!g) return;
});
////EVER HERE ENGEL
client.on("message", async msg => {
  const gereksiz = await db.fetch(`everhere_${msg.guild.id}`);
  if (gereksiz === "aktif") {
    if (
      msg.content.toLowerCase() == "@here" ||
      msg.content.toLowerCase() == "@everyone"
    )
        msg.delete()
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});
////AFK SİSTEMİ 
client.on("message" , async (msg, message) => {
  if(!msg.guild) return;
  if(msg.content.startsWith("t.afk")) return; 
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)

   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setFooter("By Eren.izm").setAuthor(msg.member.displayName, msg.author.avatarURL({dynamic: true})).setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi **Afk \nSebep:** \`${sebep}\``))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setFooter("By Eren.izm").setAuthor(msg.member.displayName, msg.author.avatarURL({dynamic: true})).setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});