const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
    .setTitle('Precos Atualizados!')
    .setDescription('<@&714217906140872725> os precos destes produtos a cima foi atualizado!')
    .setColor("RANDOM")

        client.users.get(message.author.id).send(pEmbed)
}