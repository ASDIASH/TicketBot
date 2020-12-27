const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client,message, args) => {
    try {
        let Dono = message.guild.roles.find("id", "723625512836268144");
        let Manager = message.guild.roles.find("id", "714220521889202248");
        let Moderador = message.guild.roles.find("id", "714597254538723369");
        let membros = message.guild.roles.find("id", "723625517542015057");
     //   if(!message.member.roles.get(Dono.id) || !message.member.roles.get(Manager.id) || !message.member.roles.get(Moderador.id) || !message.member.roles.get(membros.id)) return message.reply("`Você não tem permissão para executar este comando.`").then(m => m.delete(5000))
    if(message.member.roles.has(Dono.id) || message.member.roles.has(Manager.id) || message.member.roles.has(Moderador.id)) {
      
      if(!args.join(" ")) return message.reply("`;comprovante <Produto> | <Cliente>`")
    let Produto = args.join(" ")
    let imagem = message.attachments.first()
    
    let clientes = message.guild.roles.find("id", "717735885449461840");
    if(!imagem) {
        message.reply("Você precisa de enviar o comprovante!")
        return;
    }
    let user = message.mentions.members.first() || message.author;
    if(args[0]) {
        user = message.mentions.members.first() || (await client.fetchUser(args[0]))
    }
    let emoji1 = client.emojis.find(emoji => emoji.name === "Minecraftemoji");
    let emoji2 = client.emojis.find(emoji => emoji.name === "Diamante");
    let emoji5 = client.emojis.find(emoji => emoji.name === "ovelha");
    let emoji3 = client.emojis.find(emoji => emoji.name === "esmeralda");
    let emoji4 = client.emojis.find(emoji => emoji.name === "flechaD")
    let numero = '';
   await db.add('numerokaka', 1)
const comprovante = new Discord.RichEmbed()
.setColor("#00008b")
.setDescription(`${emoji1}** | #${db.get('numerokaka')} PAGAMENTO**\n\n${emoji2} | Produto - **${Produto.split("|")[0]}**\n${emoji2} | Comprador - ${user}\n**${emoji5} | Vendedor:${message.author}**`)
//.setDescription(`${emoji3} **| Produto:** ` + Produto.split("|")[0] + '\n' + `${emoji1} **| Numero:**` + Numero123.split("|")[0] + '\n' + '** | Cliente:** ' + user + '\n' + emoji4 + '** Número de cliente: ** #' + await db.get(`${user.id}_numerodecliente`) + '\n' + emoji2 + ' Entrega efetuada com sucesso')
// Produto \n Cliente
.setImage(imagem.url)
.setTimestamp()
if(user && imagem) {
    message.reply("`Comprovante enviado com sucesso.`")
    client.channels.get("723625549108478034").send({embed: comprovante}).then(m => {
    m.react(emoji1.id)
})
}
    } else {
      message.reply("No permissiona q-q").then(message.delete(5000))
    }
    } catch(e) {
        console.log(e)
        message.reply("`BIP-BOP! Um erro aconteceu... Veja o console.`").then(message.delete(5000))
    }
}