const Discord = require("discord.js")

exports.run = (bot,message,args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Voce nao tem Permisao para executar esse comando!");
  let mensagemDeletar = args[0]
  
  if(isNaN(mensagemDeletar)) return message.reply("Voce deve colocar um numero!");
  if(mensagemDeletar < 2 || mensagemDeletar > 100) return message.reply("eu so posso limpar mensagens de 2 a 100!")
  if(args.length === 0) return message.reply("utilize ;clear (numero de mensagens)");
    try {
    message.channel.bulkDelete(mensagemDeletar);
    message.channel.send("`" + `Chat foi limpo pelo` + "` " +  `${message.author},` + " `"  + `Foram limpas ${mensagemDeletar} mensagens.` + "`").then(m => m.delete(5000))
  } catch (e) {
    console.log(e);
    message.reply("`BIP-BOP! Aconteceu um erro, veja o console.`")
  }
}