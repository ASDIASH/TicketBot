const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;
    
  if (message.channel.id != "723625551344173108") {
    message.delete()
   return message.reply("vc não pode usar o comando nesse canal, use em <#723625551344173108>").then(m => m.delete(5000))
  }
    let pEmbed = new Discord.RichEmbed()
    .setTitle('<a:dinamantepisca:720040290521710664> **VapeStore** <a:dinamantepisca:720040290521710664>')
    .setThumbnail('https://i.imgur.com/fnD3sBH.png')
    .setDescription('<:dinheiro:720040289762541588> ** Tabela - Preços **')
    .addField('⠀⠀⠀⠀⠀⠀⠀', '<a:mine:720040290173452398> ** - Minecraft Full Acesso - ** **R$30,00**' + '\n' + '<:optifine:720058299986214993> ** - Capa da Optifine - R$16,00 **' + '\n' + '<a:lovenetflix:720058874215792642> ** - Netflix - R$15,00 **' + '\n' + '<:nordvpn:720059040201179145> ** - R$5,00 **' + '\n' + '<a:mine:720040290173452398> ** - Minecraft Semi Full Acesso (SFA): **' + '\n' + '\n' + '** SFA (1) - R$0,55 **'+ '\n' + '** SFA (10) - R$4,00 **'+ '\n' + ' **SFA (50) - R$18,00**' + '\n' + '\n' + '<a:frecha:720040290181971989> **PAGAMENTO** <a:frecha:720040290181971989>' + '\n' + '\n' + '**Mercado Pago** <:MercadoPago:720040290777301024>' + '\n' + '** PayPal **<:paypal:720040290068594698>')
    .setColor("RANDOM")

        message.author.send(pEmbed);
        message.reply("a lista dos produtos foi enviada para seu privado, verifique")
}