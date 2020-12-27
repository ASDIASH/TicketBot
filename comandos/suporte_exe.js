const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
    .setTitle('Para criar um ticket para iniciar a compra clique na reação abaixo! 📩')
    .addField('**Você deve criar esse ticket para as seguintes razões: **', '``Coampras``' + '\n' + '``Suporte``' + '\n' + '``Atendimento``' + '\n' + '``Duvidas``')
    .setColor("RANDOM")

        message.channel.send(pEmbed);
}