const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
        .setDescription('O link para baixar sua foto de perfil:')
        .addField(`de nada 😬`, message.author.displayAvatarURL)
        .setImage(`${message.author.displayAvatarURL}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(pEmbed);
}

// mostra sua foto para baixar