const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
        .setTitle("🏓 Pong:")
        .addField('BOT: ', Math.floor(botping) + 'ms')
        .addField('API: ', Math.floor(client.ping) + 'ms')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(pEmbed);
}

//mostra o ping do BOT e o seu