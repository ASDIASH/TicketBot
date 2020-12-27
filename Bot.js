const Discord = require('discord.js')
const http = require("http");
const client = new Discord.Client();
const config = require('./data/configuracoes.json')
const fs = require('fs');
const express = require("express");
const app = express();
const mongoose = require('mongoose');

console.clear();
//client.on('raw', console.log)

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

app.get("/", (req, res) => {
  res.send(200)
})

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefixo)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefixo.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
console.log(err)
       if(err.code === 'MODULE_NOT_FOUND') return;
    }

});

client.on('ready', () => {
    const db = require('quick.db')
    const numero = db.get('numerokaka')
    client.user.setActivity(`${numero} entregas realizadas com sucesso pela 👑 | VapeStore`)
})

client.on('message', message => {
  if(message.channel.id !== "723625549108478034") return;
  else if(message.channel.id === "723625549108478034") {
    const db = require('quick.db')
    const numero = db.get('numerokaka')
    client.user.setActivity(`${numero} entregas realizadas com sucesso pela 👑 | VapeStore`)
  }
})


client.on('raw', async dados => {
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  //721903699299139617
    if (dados.d.message_id != "721903699299139617") return //ID  da mensagem que esta o emoji

    let servidor = client.guilds.get("705489540743299153") //ID do servidor
    let membro = servidor.members.get(dados.d.user_id)
    if (dados.t === "MESSAGE_REACTION_ADD") {
      try {
        if (dados.d.emoji.name === "📩") { //id do emoji
          var channel3 = client.channels.get("721899450334969948")
    let guild = client.guilds.get("705489540743299153")
    if(guild.channels.find(c => c.name == `ticket-${membro.user.username.toLowerCase()}` && c.type == "text")) {
      const msg = await channel3.fetchMessage("721903699299139617");
      msg.reactions.forEach(reaction => reaction.remove(membro.user.id))
      return channel3.send(membro + ", `Você já tem 1 ticket aberto! Por favor utilize esse ticket.`").then(m => m.delete(3000))
    }
    guild.createChannel(`ticket-${membro.user.username}`, "text").then(async permissions => {
        let role = guild.roles.find("name", "🌈┆Tchola");
        let role3 = guild.roles.find("name", "🚦┆ Moderador")
        let role4 = guild.roles.find("name", "⛑ ┆ Ajudante")
        let role5 = guild.roles.find("name", "🤖┆Bot")
        let role2 = guild.roles.find("name", "@everyone");
        permissions.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        permissions.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        permissions.overwritePermissions(role3, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        permissions.overwritePermissions(role4, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        permissions.overwritePermissions(role5, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        permissions.overwritePermissions(membro, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
    var category = guild.channels.find(c => c.name == `TICKETS` && c.type == "category")
    var channel = guild.channels.find(c => c.name == `${permissions.name}` && c.type == "text");
    if (channel) {
     await channel.setParent(category.id)
    }
    permissions.send(`<@${membro.user.id}>`).then(m => m.delete(1000))
    let embed = new Discord.RichEmbed()
    .setColor("#36393F")
    .addField("Novo ticket!", `Olá, ${membro} Por favor descreva o porque você abriu o ticket, aguarde e algum staff lhe atender.`)
    .setFooter(`Atenciosamente, ${guild.name}`, `${guild.iconURL}`)
    .setTimestamp();
    permissions.send(embed)
        })
    }
    var channel2 = client.channels.get("721899450334969948")
      const msg = await channel2.fetchMessage("721903699299139617");
      msg.reactions.forEach(reaction => reaction.remove(membro.user.id))
  } catch(e) {
      console.log(e)
    }
      }
});




client.on('raw', async dados => {
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if (dados.d.message_id != "723626339135127573") return //ID  da mensagem que esta o emoji

    let servidor = client.guilds.get("714142071027531858") //ID do servidor
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('723625517542015057'), //ID cargo que vai ser adicionado apos a verificacao
        sverif = servidor.roles.get('723625518133542923') //ID cargo de quem ainda nao esta verificado

    if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.id === "716451309934477345") { //id do emoji
            if (membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
            membro.removeRole(sverif)
        }
    }
});


(async () => {
    require('./schema');

    await mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,                    // isso e do Banco de dados
    });

    console.log('conectado na db');

    client.login(process.env.SECRET);
})();