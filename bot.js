const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = "@"
const { Client, Util } = require('discord.js');
const Enmap = require('enmap');
const ytScraper = require("yt-scraper")
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});




client.on('message', function(message) {
 // هنا البريفكس
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ للعقوبة")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام و رحمة الله و بركاته');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا');
  }
});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('اهلا وسهلا');
  }
});

client.on('message', message => {

  if(message.content === prefix + "@mc") {
                      if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
         });
           }
//tex BOT
if(message.content === prefix + "@unmc") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**__تم فتح الشات__:white_check_mark:**")
         });
           }
           
    
  
});

client.on('message', message => {
 
 
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "support")) return message.channel.send(`\`Support\` **لا توجد رتبة بأسم**`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`**لديك تذكرة مفتوحة بالفعل**`);
    message.guild.createChannel(`ticket`, "text").then(c => {
        let role = message.guild.roles.find("name", "support");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: تم انشاء التذكرة`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`${message.author.username} **مرحبا بك**`, `
يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم ** ** هنا قريباً لمساعدتك`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `closetk`)) {
    if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر`);
 
    message.channel.send(`**@close** : هل انت متأكد من اغلاق التذكرة ؟ اذا انت متأكد اكتب`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '1', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('انتهي وقت اغلاق التذكرة').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
 
});


client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('@all')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("premium","member"));
    });


client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var prefix = '@';
    var wordsSay = message.content.split(' ').slice(1).join(' ');
   
    if(command == prefix + 'say') {
        var sayRole = message.guild.roles.find(r => r.name === 'support');
        if(!sayRole) return message.channel.send('لا استطيع ايجاد رتبة `support` ');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('يجب ان تتوفر لديك رتبة `support`');
        if(!wordsSay) return message.channel.send(`***EX :*** ${prefix}say Hello World! `);
       
        message.delete();
        let sayE = new Discord.RichEmbed()  
        .setColor('RANDOM')
        .setDescription(`**${wordsSay}**`)  
       
        message.channel.send(sayE);
    }
});     

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message',async msg => {//tex codes
  var p = "@";//tex codes
  if(msg.content.startsWith(p + "setuser")) {//tex codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **ليس لديك صلاحيه**');//tex codes
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');//tex codes
  msg.guild.createChannel(`Members : ◤ → ${client.members.size} ← ◢` , 'voice').then(time => {//tex codes
    });//tex codes

  }
 
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const channel = member.guild.channels.find("invite", "invite");
     channel.send(`<@${member.user.id}> ** joined; ** Invited by ** <@${inviter.id}> ** `);
  });
});

client.on('message', message => {
    if (message.content === ('@bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@357961207019470851>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : she3a`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : she3a ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`bY she3a`,"http://twitch.tv/aligamer998")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.content.startsWith("@hack")) {
      if(!message.author.id === '') return;
    if (message.author.bot) return
         message.delete();
           let args = message.content.split(' ').slice(1);

                 let virusname = args.join(' ');
               if (virusname < 1) {
                   return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
               }
               message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
           }, 1000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
           }, 2000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
           }, 3000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
           }, 4000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
           }, 5000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
           }, 6000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
           }, 7000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
           }, 8000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
           }, 9000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
           }, 10000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
           }, 11000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
           }, 12000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
           }, 13000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
           }, 14000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
           }, 15000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
           }, 16000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
           }, 17000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
           }, 18000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
           }, 19000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
           }, 22000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
           }, 25000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
           }, 26000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
           }, 27000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
           }, 28000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
           }, 29000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
         }, 30000)
            setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
         }, 31000)
            setTimeout(function() {
             m.delete()
         }, 32000)
           setTimeout(function() {
             message.channel.send('تم تهكيرك')
         }, 33000)
         });
       }
})

client.on("message", message => {
  if (message.author.bot) return;   //by she3a
  
  let command = message.content.split(" ")[0];
  
  if (command === "@mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});

client.on('message', message => {
  if(message.content.startsWith('@voice')) {
  let args = message.content.split(' ').slice(1);
  let ar = args.join(' ');

  message.channel.send(ar,{tts:true});
}
});

client.on("message", msg => {
  
  if(msg.content.startsWith (prefix + "id")) {
  if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
     .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
     .setColor("RANDOM")
     .setFooter(msg.author.username , msg.author.avatarURL)
     .setThumbnail(`${msg.author.avatarURL}`)
     .setTimestamp()
     .setURL(`${msg.author.avatarURL}`)
     .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
     .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
     .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
     .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
  msg.channel.send({embed: embed})
  }
  });

  var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});

client.on('message', message => {
  if (message.content.startsWith("رابط")) {
      
message.channel.createInvite({
      thing: true,
      maxUses: 5,
      maxAge: 86400
  }).then(invite =>  
    message.author.sendMessage(invite.url)
  )
  const embed = new Discord.RichEmbed()
      .setColor("2fff00")
      .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      .setFooter("Spring-Team")
    message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
            const Embed11 = new Discord.RichEmbed()
      .setColor("2fff00")
      .setDescription(`
**-------------------
-هذا هو الرابط 
-https://discord.gg/24VXEXM
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
      .setFooter("By:she3a")
    message.author.sendEmbed(Embed11)
  }
});

client.on('message', function(message) {
  if (!message.member.hasPermissions(['ADMINISTRATOR'])){
          let command = message.content.split(" ")[0];
      if(message.content.includes('discord.gg')){
      message.reply (' ')
         if(!message.channel.guild) return message.reply('** This command only for servers**');
   message.member.addRole(message.guild.roles.find('name', 'Muted')); 
  const embed500 = new Discord.RichEmbed()
    .setTitle(":x: | تمت معاقبتك")
          .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ان كأن هاذه الميوت عن طريق الخطأ تواصل مع احد اعضاء الادارة**`)
    .addField(`Magic`,`Server`)
          .setColor("c91616")
          .setThumbnail(`${message.author.avatarURL}`)
          .setAuthor(message.author.username, message.author.avatarURL) 
      .setFooter(`${message.guild.name} Server`)
   message.channel.send(embed500) 
  
      
  }
  }
})

client.on('message', message => {
  if (message.content.startsWith("@avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

const devs = ["357961207019470851"]

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark: done  ${argresult}**`)
  } else 
    if (message.content === (prefix + "Per")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: done  ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark: done  ${argresult}**`)
  } else     
    if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(prefix + 'img')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(prefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/aligamer998");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === prefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });

  client.on('message', message => {
    if(message.content == '@allserver') {
             if(!message.author.id === '357961207019470851') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });

client.on('message', message => {
    if (message.content === "@help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`© She3a ™.`, 'https://images-ext-2.discordapp.net/external/X9SanEG0s7Dtv3krTgy-kod_fj6JRVJ2AG4JryCiiz0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/375761288518828042/fffa31c797e88cf059dd6db424ff456a.png?width=80&height=80')
  .setColor("#000000")
  .addField("help in here : https://premium-help-by-she3a.000webhostapp.com/css.html")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });

  client.on('message', message=>{
    if (message.content ===  "@leaves"){
		if(!message.author.id === '357961207019470851') return;
    message.guild.leave();
            }
});

client.on("message", message => {
  if(message.content.startsWith(prefix + `contact`)){
  if(message.author.bot || message.channel.type == 'dm') return;
  let args = message.content.split(" ").slice(1);
  let msg = args.join(' ');
  let dev = client.users.get("357961207019470851"); //Your id
  if(!args) return message.reply("يجب كتابة الرسالة");
  dev.send(`• | User: **${message.author.tag}**\n\n• | Message: **${msg}**`).then(() =>{
  message.channel.send(`Your message has been successfully delivered to the bot owner`)
  }).catch(console.error);
  }
  });
  
  client.on('message', async rokz => {
   
      if(rokz.content.startsWith(prefix + "تقديم")) {
   
        let lang = '';
   
        let time = '';
   
        let expe = '';
   
        let fillter = m => m.author.id === rokz.author.id
   
        await rokz.channel.send("اسمك ؟").then(e => {
   
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
   
       .then(co => {
   
         lang = co.first().content;
   
          co.first().delete();
   
   
         e.edit(`عمرك ؟
  [${lang}]`)
   
         rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
   
         .then(col => {
   
           time = col.first().content;
   
            col.first().delete();
   
   
              e.edit(`هدسعدنا في ايه و ازاي ؟
  [${time}]
  [${lang}]`)
   
              rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
   
              .then(coll => {
   
                expe = coll.first().content;
   
                 coll.first().delete();
   
   
                 e.edit(`جاري تقديمك...
  [${expe}]
  [${time}]
  [${lang}]`)
   
                let rokzz = rokz.guild.channels.find("name","✽-تقديمات")
   
                setTimeout(() => {
   
                  e.edit("تم التقديم")
   
                }, 3000)
   
                rokzz.send(`
  » االاسم : **${lang}**
  » العمر : **${time}**
  » الدليل انه مو نصاب : **${expe}**
  تم التقديم بواسطة: ${rokz.author}
  `).then(rokzzz => {
   
                    rokzzz.react(":CheckMark:")
   
                    rokzzz.react(":WrongMark:")
   
                  })
   
              })
   
         })
   
       })
   
     })
   
      }
   
    })
   
   
   
     
   
     
  client.on('message',async message => {
   
  let mention = message.mentions.members.first();
   
  let Room = client.channels.get('588254239827034112');
   
  if(message.content.startsWith(prefix + "رفض")) {
   
  if(message.guild.id !== '584735012390436874') return;
   
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
   
   
  if(!mention) return message.reply("منشن شخص");
   
   
   
  Room.send(`
  **» العضو :** ${mention}
  [ :x: ] :: لقد تم رفض البوت`);
   
  }
   
  });
   
   
     
  client.on('message',async message => {
   
  let mention = message.mentions.members.first();
   
  let Room = client.channels.get('588254239827034112');
   
  if(message.content.startsWith(prefix + "قبول")) {
   
  if(message.guild.id !== '584735012390436874') return;
   
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
   
   
  if(!mention) return message.reply("منشن شخص");
   
   
   
  Room.send(`
  **» العضو :** ${mention}
  [ :white_check_mark: ] :: لقد تم قبول البوت او الشخص `);
   
  }
   
  });
  
  client.on('ready', () => {// افنت التشغيل 
    setInterval(function(){
        client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                    var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
        });
    }, 60000);// وقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
  })
  
  const getAccountStats = require('twitter-scrape-account-stats').getAccountStats;
const bud = require('basic-instagram-user-details');
client.on("ready", () => {
  ytScraper.channelInfo("https://www.youtube.com/channel/UCfSicg9mxc_TCaaROMklU_A").then(data => {
  client.channels.get("588282861107281930").setName(`~ YT Subs : ${data.subscribers}`)
  })
  getAccountStats({username: 'TWITTER USERNAME'}).then(function(account) {
  client.channels.get("CHANNEL ID").setName(`~ Twitter followers : ${account.followers}`)
  })
  bud("INSTAGRAM ACCOUNT USERNAME", 'followers').then(res => {
  const ifollowers = res.data;
  client.channels.get("CHANNEL ID").setName(`~ Insta followers : ${ifollowers}`)
  });
});

client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
if(codes.content.startsWith(prefix + "antibots on")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});


codes.channel.send("AntiBots Join Is On");
}
if(codes.content.startsWith(prefix + "antibots off")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("AntiBots Join Is Off");
}
});

julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});

let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));


client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'

            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});

var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 2 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 1, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 2, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 1, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 2, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 1, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"\ntried to hack (!)");
  limit.guild.owner.send(limit.user.username+"\ntried to hack (!)")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

client.on("message", message => {  //by she3a
  if(message.content.startsWith(prefix + "emoji")) { //by she3a
      if(message.author.bot) return; //iTzMurtaja
      var emojiid =  message.content.split(" ").slice(1).join(" ") //by she3a
      console.log(emojiid) //by she3a
      if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage
${prefix}emoji <EmojiID>`); //by she3a
      else    //شيعا القمد
      message.channel.send("This is the emoji that you requested:-",
        { //by she3a
          files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
        }) //by she3a
      }  //by she3a
}) //by she3a

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "@unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

client.on('guildCreate', guild => {
let support = client.guilds.get('584735012390436874') // حط هنا ايدي سيرفر السبورت
if(support === undefined) return
let role = support.roles.find(r => r.name == 'premium') // بدلها بأسم الرتبة يلي تبيها للمستخدمين
let member = support.members.get(guild.owner.user.id) 
if(member) {
  member.addRole(role)
} else {
  console.log(`this user not in support server`)
}
})

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'chat');
  let memberavatar = member.user.avatarURL
    if (!channel) return; 
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':running_shirt_with_sash: | name :  ',`${member}`)
      .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
      .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
             
                .addField("Name:",`<@` + `${member.id}` + `>`, true)
                    
                                   .addField(' الـسيرفر', `${member.guild.name}`,true)
                                     
   .setFooter("**SERVER NAME **")
      .setTimestamp()
  
    channel.sendEmbed(embed);
  });

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setThumbnail(member.user.avatarURL)
.addField("***شكرا الانضمامك الينا***" ,member.user.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setColor('RANDOM')
  .setImage('https://giphy.com/MXdaDboHiejWlC4sRc')
var channel =member.guild.channels.find('name', 'chat')
if (!channel) return;
channel.send({embed : embed});
});

client.login("NTg3NTk1MDc3Njk0NzgzNDg4.XP43Zg.rDI7D-W3OG_YAjIv5cQiog6MBBk");
