const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = (client,message, args) => {
 if(!args[0]) return message.reply("falta o numero")
  if(isNaN(args[0])) return message.reply("isso não é um numero")
  if(message.author.id === "643242986955603978") {
    db.add('numerokaka', -db.get('numerokaka'))
    db.add('numerokaka', args[0])
    message.reply("Pronto")
  }
}