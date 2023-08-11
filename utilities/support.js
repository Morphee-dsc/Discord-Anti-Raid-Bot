const Discord = module.require("discord.js");
const db = require('quick.db')
const cl = new db.table("Color")
const config = require("../config")
const footer = config.app.footer
module.exports = {
    name: 'support',
    usage: 'sp',
    description: `Support du bot`,
    async execute(client, message) {

        let color = cl.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        const embed = new Discord.MessageEmbed()
        .setTitle(`Voici le support du bot ${client.user.username}`)
        .setDescription(`[Support du bot ${client.user.username}](https://discord.gg/blackdev)`)
        .setColor(config.app.color)
        .setImage(`https://st2.depositphotos.com/1720162/9866/v/450/depositphotos_98663142-stock-illustration-modern-thin-line-design-concept.jpg`)

        message.channel.send({ embeds: [embed] })
    }
}