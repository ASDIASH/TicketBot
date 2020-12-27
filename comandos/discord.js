const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
        .setAuthor('Discord', 'https://i.imgur.com/vWwscR1.jpg', 'https://discord.gg/gmnZH4')
        .setDescription('O link oficial do nosso discord: https://discord.gg/gmnZH4 (Divulgue!)')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(pEmbed);
}

//manda o link do discord no canal