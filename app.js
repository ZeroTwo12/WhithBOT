const Discord = require("discord.js");
const  client = new Discord.Client();

const config = require("./config.json");



client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: (`Estoy en ${client.guilds.size} servidores`),
           url: "https://www.twitch.tv/albedosenpai_",
           type: "STREAMING"
         }
     } );

  });

var prefix = config.prefix;


client.on("message", (message) => {

  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;


  if (message.content.startsWith(prefix +"ayuda" )){
      const embed = new Discord.RichEmbed()
      .setTitle("🎉 Mi Lista de comandos Disponibles Actualmente 🎉")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00AE86)
      .setDescription("**g!ayuda** Este comando mostrara la ayuda disponible de mi 🎉")
      .setFooter("(Comando Oculto) solo para Rank **Creator**)", client.user.avatarURL)
      .setImage(message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setURL("")
      .addField("**g!drops** Aqui te mandare por **Privado** las cuentas Disponibles",
        "Ten encuenta que cada **24 hours** se actualiza mi base de datos")
      .addField("g!info", "Quieres obtener un bot o invitarme a tu discord para **Dropear o ayudar**", true)
      .addBlankField(true)
      .addField("g!server", "Aqui se mostrara la informacion del Servidor de Minecraft del Discord", true);

      message.channel.send({embed});
  }


  if (message.content.startsWith(prefix +"server")){
      message.channel.send({embed: {
        color: 3447003,
        description: "**Proximamente** Se Abrira para modo Publico, por el momento esta **CERRADO** [𝒫𝒾𝒸𝓉𝓊𝓇ℯ ℒ𝒾𝓃𝓀] https://imgur.com/a/NJ15vlp"
      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 3447003,
        description: "🎉 Ups! Chequeando Bot 🎉"

      }});
    }



  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 3447003,
        description: "⏳ *Estado* Funcionando!"

      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 3447003,
        description: "⏳ *Comandos* Funcionando!"

      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 3447003,
        description: "⏳ *Generadores Spotify* Funcionando!"

      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 0000,
        description: "⏳ *Generadores Minecraft (FA/NA)* Caido!"

      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 0000,
        description: "⏳ *Generadores Nitro* Caido!"

      }});
    }


  if (message.content.startsWith(prefix +"bot")){
      message.channel.send({embed: {
        color: 3447003,
        description: "*🔌 Chequeo cada Minuto 🔌*"

      }});
    }
  if (message.content.startsWith(prefix + "senpai")){
      message.channel.send({embed: {
        color: 3447003,
        description: "Fui Creada por mi Senpai @AlbedoSenpai_#1931 y es un agrado estar en este Discord"
      }});
    }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 3447003,
        description: "🎉 Nuestro Sorteo esta Actualmente Desactivado 🎉"
      }});
    }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 3447003,
        description: "📌 Aᴛᴇɴᴄɪᴏɴ ʟᴏs ᴅᴇ ᴄᴏʟᴏʀ ɴᴇɢʀᴏ ᴇsᴛᴀɴ (Dᴇsᴀᴄᴛɪᴠᴀᴅᴏ)"
      }});
    }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 0000,
        description: "🎉 **Discord Nitro** *Best Sorteo*"
      }});
    }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 0000,
        description: "🎉 **Spotify** *Normal Sorteo*"
        }});
      }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 0000,
        description: "🎉 **Minecraft NFA** *Normal Sorteo*"
        }});
      }

  if (message.content.startsWith(prefix + "sorteo")){
      message.channel.send({embed: {
        color: 3141,
        description: "*Update in 24 hours*"
        }});

      }

  if (message.content.startsWith(prefix + "nitro")){
      message.channel.send({embed: {
        color: 3447003,
        description: "Comando Desactivado (*Proximamente*)"
        }});


      }

  if (message.content.startsWith(prefix + "drops")){
      message.channel.send({embed: {
        color: 3447003,
        description: "Comando Desactivado **/** Unicos comandos de Drops **/** *g!spotify / g!nitro* (Proximamente mas drops)"
        }});

  }

  if (message.content.startsWith(prefix +"info" )){
      const embed = new Discord.RichEmbed()
      .setTitle("𝕀𝕣 𝔸𝕝 𝕗𝕠𝕣𝕠 𝔻𝕚𝕣𝕖𝕔𝕥𝕒𝕞𝕖𝕟𝕥𝕖 (ℂ𝕝𝕚𝕔𝕜 𝕞𝕖)")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00AE86)
      .setDescription("¿Quieres Adquirir un Bot personal o Meter mi Bot personal? Clickea aqui arriba donde dice (𝕀𝕣 𝔸𝕝 𝕗𝕠𝕣𝕠 𝔻𝕚𝕣𝕖𝕔𝕥𝕒𝕞𝕖𝕟𝕥𝕖 (ℂ𝕝𝕚𝕔𝕜 𝕞𝕖)")
      .setFooter("Gremory Senpai: Gracias por usarme 🎉🎉 ", client.user.avatarURL)
      .setImage(message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setURL("https://zeroworldcraft.wixsite.com/gremorysenpai")
      .addField("¿Para que Sirvo?",
        "Hola soy **Gremory Senpai** Un Bot muy kawaii creado por mi Autor Original **AlbedoSenpai_** Mi funcion por el momento es Dropear Cuentas de Minecraft **NFA/FA/SFA** Tambien Spotify **Premiun/No Premiun** Proximamente Dropeare **Discord Nitro**")
      .addField(":tada: Que Version Soy?", "Por el Momento mi Amo Senpai me mantiene en reparaciones todo los Dias, para Poder cumplir mis funciones", true)
      .addBlankField(true)
      .addField("Comandos Disponibles", "Mi amo dijo **g!info** **g!ayuda** **g!drops** ", true);

      message.channel.send({embed});
  }

  if (message.content.startsWith(prefix +"spotify")){

      message.channel.send('**'+message.author.username+'**, 🎁 Chequea Tu **MD** hay se mando tu regalo');
      message.author.send({embed: {
        color: 3447003,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "𝕆𝕓𝕥𝕖𝕟 𝕦𝕟𝕒 𝕃𝕚𝕤𝕥𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒𝕝 (Cʟɪᴄᴋ ᴘᴀʀᴀ ɪʀ)",
        url: "https://zeroworldcraft.wixsite.com/gremorysenpai/discord-bot",
        description: "🎉 Quieres Adquirir una Lista Gratis Adquiere mi Bot dandole click Aqui [Invitar Bot](https://zeroworldcraft.wixsite.com/gremorysenpai/discord-bot)",
        fields: [{
          name: "🎧 Spotify",
          value: "🎉 Correo: CamilaMizo@gmail.com 🎉 Contraseña: CamilaMizo2019"
          },
          {
            name: "🎧 Spotify",
            value: "🎉 Correo: Camixnoob2019@gmail.com 🎉 Contraseña: Camixnoob"
          },
          {
            name: "🎧 Spotify",
            value: "🎉 Correo: 2019SoyTom2019@gmail.com 🎉 Contraseña: SoyTom2019"
          },
          {
            name: "🎧 Spotify",
            value: "🎉 Correo: **Generate in 24 hours** 🎉 Contraseña: **Generate in 24 hours**"
          },
          {
            name: "🎧 Spotify",
            value: "🎉 Correo: **Generate in 24 hours** 🎉 Contraseña: **Generate in 24 hours**"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Gremory Senpai: Este es el Sistema de Drops 🎉"
        }
      }
  });

}

if (message.content.startsWith(prefix +"minecraftna")){

    message.channel.send('**'+message.author.username+'**, 🎁 Chequea Tu **MD** hay se mando tu regalo');
    message.author.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "📦 𝕆𝕓𝕥𝕖𝕟 𝕦𝕟𝕒 𝕃𝕚𝕤𝕥𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒𝕝 (Cʟɪᴄᴋ ᴘᴀʀᴀ ɪʀ) 📦",
      url: "https://zeroworldcraft.wixsite.com/gremorysenpai/discord-bot",
      description: "🎉 Quieres Adquirir una Lista Gratis Adquiere mi Bot dandole click Aqui [Invitar Bot](https://zeroworldcraft.wixsite.com/gremorysenpai/discord-bot)",
      fields: [{
        name: "📦 Minecraft (fa)",
        value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        },
        {
          name: "📦 Minecraft (Na)",
          value: "🎉 Generador (Mantenimiento) 🎉 Generador (Mantenimiento)"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "💡 Generador en Mantenimiento 💡"
      }
    }
});

    }

    if (message.content.startsWith(prefix +"listo" )){
        const embed = new Discord.RichEmbed()
        .setTitle("🔔 Cᴏᴍᴏ Aᴅǫᴜɪʀɪʀ ᴜɴᴀ Cᴜᴇɴᴛᴀ ᴅᴇ Sᴘᴏᴛɪꜰʏ 🔔")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0x00AE86)
        .setDescription("¿Te gustaria ganar una **Cuentas** de Spotify para uso Publico?")
        .setFooter("🎉 Nitro Proximamente 🎉 ", client.user.avatarURL)
        .setImage(message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .setURL("")
        .addField("🔑 Lɪsᴛᴀ ᴅᴇ Cᴏᴍᴀɴᴅᴏs ᴅᴇ Sᴘᴏᴛɪꜰʏ 🔑",
          "**g!spotify** / **g!nitro** <-- *Proximamente* / **g!minecraftna**")
        .addField("¿Cuanto se Demora en Generar nuevas cuentas?", "Por lo casual se reinicia cada **x** tiempo", true)
        .addBlankField(true)
        .addField("¿Hay Drops de Nitro?", "Nuestro Equipo ya esta en marcha para cumplir eso", true);

        message.channel.send({embed});
    }

});

client.login("NjA1MTc3NzIxMjExMDYwMjMy.XT4uGg.TRiJ1eZEWec-1w6Gr2La-fbgitw");
