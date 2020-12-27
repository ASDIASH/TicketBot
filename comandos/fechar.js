var Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
        let Dono = message.guild.roles.find("id", "714220525655687240");
        let Manager = message.guild.roles.find("id", "714220619654496276");
        let Moderador = message.guild.roles.find("id", "714220521889202248");
        if(message.member.roles.has(Dono) || message.member.roles.has(Manager) || message.member.roles.has(Moderador)) return message.reply("`Você não tem permissão para executar este comando.`").then(m => m.delete(5000))
    message.delete();
    var reason = "```" + message.content.split(" ").slice(1).join(" ") + "```"
    if(!reason) {
        reason = "**Nenhuma razão foi dada!**"
    } 
      if(reason === "``````") {
        reason = "**Nenhuma razão foi dada!**"
    } 
    if(message.guild.id !== "705489540743299153") return; 
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Você não pode usar este comando fora de um ticket!`);
    let embed = new Discord.RichEmbed()
    .setColor('#36393F')
    .setDescription("O ticket irá fechar em 15 segundos.")

    message.channel.send("Fechando o ticket.")
    message.channel.send(embed).then(setTimeout(DeleteFunc, 15000));
    function DeleteFunc(msg) {
let embed2 = new Discord.RichEmbed()
.setColor('#36393F')
.setTitle("Ticket LOGS")
.setDescription("Ticket fechado!")
.addField("Ticket de:", capitalize(message.channel.name.split("ticket-")[1]), true)
.addField("Staff que fechou:", message.author, true)
.addField("Motivo:", reason, false)
.setThumbnail(`${client.user.displayAvatarURL}`)
.setTimestamp()
        message.channel.delete();
        client.channels.get("721906985531867138").send(embed2) 
    }
    }