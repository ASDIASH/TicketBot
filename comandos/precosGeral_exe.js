const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
    .setTitle('<a:emoji_13:714705315299590235>H0lp Store <a:emoji_13:714705315299590235>')
    .setThumbnail('https://i.imgur.com/Psk77mQ.jpg')
    .setDescription('<a:Diamante:717049945601081394> ** Tabela - Preços **')
    .addField('⠀⠀⠀⠀⠀⠀⠀', '<a:Minecraftemoji:717049738440081518> ** - Minecraft Full Acesso - **<:Corante:718526411593351189>' + '\n' + '<:optifine:714912740258611301> ** - Capa da Optifine - R$16,00 **' + '\n' + '<:netflix:715339611311964262> ** - Netflix - R$15,00 **' + '\n' + '<:nordvpn:718524703886540870> ** - R$5,00 **' + '\n' + '<:craft:714618679949525064> ** - Minecraft Semi Full Acesso (SFA): **' + '\n' + '\n' + '** SFA (1) - R$0,55 **'+ '\n' + '** SFA (10) - R$4,00 **'+ '\n' + ' **SFA (50) - R$18,00**' + '\n' + '\n' + '<a:FlechaB:718532360055947284> **PAGAMENTO** <a:FlechaB:718532360055947284>' + '\n' + '\n' + '**Mercado Pago** <:mercadopago:714981075356614703>' + '\n' + '** PayPal **<:paypal:717044218345816074>')
    .setColor("RANDOM")

        message.channel.send(pEmbed);
}