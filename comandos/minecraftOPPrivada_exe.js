const Discord = require('discord.js')

module.exports.run = (client,message, args) => {
    let botping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
    .addField("<:optifine:714912740258611301>Capa Optifine Privada<:optifine:714912740258611301>", "✅ Privada (apenas sua);\n✅ Editável;;\n✅ Permanente;\nㅤㅤㅤ\n•Custo: R$20,00", false)
    .addBlankField()
    .setImage('https://i.imgur.com/JHup3S8.jpg[/img]')
    .addField('•<:mercadopago:714981075356614703> Link para pagamento Mercado Pago', '<a:flechaD:717037965628538881> [Comprar R$20,00](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=577011689-a9fcdd05-d324-4dc9-92ad-e7ca0f85fff0)', false)
    .addField('•<:paypal:717044218345816074> pagamento via PayPal', '<a:flechaD:717037965628538881> Chamar <@643242986955603978> no Privado!')
    .setColor("RANDOM")

        message.channel.send(pEmbed);
}