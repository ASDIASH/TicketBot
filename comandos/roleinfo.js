const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let role =
    message.guild.roles.find(r => r.name == args[0]) ||
    message.guild.roles.find(r => r.id == args[0]) ||
    message.mentions.roles.first() ||
    args.join(" ");
  if (!role) return message.reply("Please specify a role.");
  let embed = new Discord.RichEmbed()
    .setColor("#36393F")
    .addField("ID", `${role.id}`, true)
    .addField("Nome", "`" + `${role.name}` + "`", true)
    .addField("Menção", `<@&${role.id}>`, true)
    .addField("Hex:", `${role.hexColor}`, true)
    .addField(`Membros`, `${role.members.size}`, true)
    .addField(`Posição`, `${role.calculatedPosition}`, true)
    .addField(`Permissões elevadas`, `${role.hoist}`, true)
    .addField(`Mencionavel`, `${role.mentionable}`, true)
    .addField(`Gerenciada`, `${role.managed}`, true)
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
  message.channel.send(embed);
}