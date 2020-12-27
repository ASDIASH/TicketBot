const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
        .setTitle('todos os comandos do bot:')
        .addField(';discord','para ver o link permanete do nosso discord (envie para seus os amigos!🙃)')
        .addField(';foto','para pegar o link da sua foto de perfil do discord')
        .addField(';ping','para ver o o seu ping e o do BOT')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(pEmbed);
}