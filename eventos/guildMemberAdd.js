const Discord = require('discord.js')


module.exports.run = (client, event) => {
    let canal = client.channels.get("723625543072874516")
   // console.log(event)

    let pEmbed = new Discord.RichEmbed()
        .setTitle(`Bem vindo ${event.user.username}` )
        .setThumbnail(`${event.user.displayAvatarURL}`)
        .setAuthor('**Discord da VapeStore**', 'https://i.imgur.com/fnD3sBH.png', 'https://discord.gg/DTgPTu5') // troca com a imagem que voce quiser e o discord tbm
        .addField('Ei!', `${event.user} Nao esqueca de ler as regras`)
        .addField('E o mais importate! ', 'seja feliz')
        .setFooter(`${event.user.tag}`, event.user.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        event.addRoles(['723625518133542923']);
        canal.send(pEmbed);
}

// mensagem de boas vindas