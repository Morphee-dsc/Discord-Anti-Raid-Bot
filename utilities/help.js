const Discord = require("discord.js")
const config = require("../config")
const db = require('quick.db')
const p = new db.table("prefix")
const cl = new db.table("Color")
const footer = config.app.footer
const color = config.app.color
const paginationEmbed = require('discordjs-button-pagination')

module.exports = {
    name: 'help',
    usage: 'help',
    category: "utils",
    description: `Permet d'afficher l'help.`,
    async execute(client, message, args) {

        let pf = p.fetch(`prefix_${message.guild.id}`)
        if (pf == null) pf = config.app.px

        let color = cl.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        //Embed Help

        const Help = new Discord.MessageEmbed()
            .setTitle(`📚・Panel d'aide de${client.user.username}`)
            .setDescription(`Développeur du bot <@${config.app.inspi}>

            Le bot possède actuellement ***__${client.commands.size}__***
            Si vous trouvez quelconque bug merci de faire la command ***__${pf}support__***
            `)
            .setImage('https://cdn.discordapp.com/attachments/1139377326614913024/1139389114295255100/image.png')
            .setThumbnail(client.user.avatarUrl)
            .setColor(color)
            .setFooter({ text: `${footer} | Prefix actuel : ${pf}` })

        //Embed Owner

        const utilities = new Discord.MessageEmbed()
            .setTitle("Utilitaire")
            .setThumbnail(client.user.avatarUrl)
            .setDescription(`

**\`${pf}help\`**
Pour obtenir la liste des commandes

**\`${pf}pic\`**
Récupérer la photo de profil d'un membre

**\`${pf}ping\`**
Affiche le ping du bot

**\`${pf}userinfo\`**
Affiché des informations sur un membre

**\`${pf}support\`**
Obtient le support du bot discord

**\`${pf}serveur info\`**
Informations sur le serveur

**\`${pf}botinfo\`**
Informations relatives au bot

**\`${pf}vc\`**
Affiché les statistiques du serveur

**\`${pf}invite\`**
Donne une invitation du bot


          `)
            .setColor(color)


        const moderation = new Discord.MessageEmbed()
            .setTitle("Modération")
            .setThumbnail(client.user.avatarUrl)
            .setDescription(`

**\`${pf}ban <@>\`**
Bannir un membre du serveur

**\`${pf}unban <ID>\`**
Unban un membre du serveur

**\`${pf}kick\`**
Kick un membre du serveur

**\`${pf}lock\`**
Vérouille un salon pour que les membres ne puissent plus parler

**\`${pf}unlock\`**
Dévérouille un salon pour que les membres puissent parler

**\`${pf}renew\`**
Recréé un salon

**\`${pf}roleinfo <@/ID>\`**
Affiché les informations d'un role sur le serveur

          `)
            .setColor(color)

        const antiraid = new Discord.MessageEmbed()
            .setTitle("Antiraid")
            .setThumbnail(client.user.avatarUrl)
            .setDescription(`

**\`${pf}secur\`**
Affiche les protections sur le serveur

**\`${pf}rlogs <#/ID>\`**
Salon dans le quel sera envoyé toutes les logs de raid

**\`${pf}antilink on/off\`**
**\`${pf}antiban on/off\`**
**\`${pf}antichannel on/off\`**
**\`${pf}antirole on/off\`**
**\`${pf}antichannel on/off\`**
**\`${pf}antieveryone on/off\`**
**\`${pf}antiwebhook on/off\`**
**\`${pf}antibot on/off\`**

          `)
            .setColor(color)

        const admin = new Discord.MessageEmbed()
            .setTitle("Administration")
            .setThumbnail(client.user.avatarUrl)
            .setDescription(`

**\`${pf}owner add/remove/list <@>\`**
Permet d'owner un membre sur le bot
Pour réalisé cette commande il faut avoir la couronne du serveur

**\`${pf}tempvoc\`**
Affiche un menu interactif pour gérer les vocaux temporaires sur le serveur

**\`${pf}emoji\`**
Ajouté un emoji sur le serveur

**\`${pf}prefix\`**
Définir un nouveau prefix du bot sur le serveur

**\`${pf}theme\`**
Changer la couleur du bot

**\`${pf}massiverole add/remove <@role>\`**
Permet d'ajouté un role à tout les membres du serveur

**\`${pf}adminlist\`**
Affiche tous les administrateurs présents sur le serveur*

**\`${pf}botlist\`**
Affiche tous les bots présents sur le serveur

          `)
            .setColor(color)

        const gestion = new Discord.MessageEmbed()
            .setTitle("Gestion")
            .setThumbnail(client.user.avatarUrl)
            .setDescription(`
            
**\`${pf}pall\`**
Désactive __toutes les permissions__ du serveur 
            
**\`${pf}padmin\`**
Désactive toutes les permissions __administateur__ du serveur
            
**\`${pf}prole\`**
Désactive toutes les permissions __roles__ du serveur
            
**\`${pf}pban\`**
Désactive toutes les permissions __ban__ du serveur
            
**\`${pf}pkick\`**
Désactive toutes les permissions __kick__ du serveur
            
**\`${pf}pvoc\`**
Désactive toutes les permissions __voc__ du serveur
            
**\`${pf}pwebhooks\`**
Désactive toutes les permissions __webhooks__ du serveur
            
**\`${pf}pviewc\`**
Désactive toutes les permissions __voir les salons__ du serveur
            
**\`${pf}pserveur\`**
Désactive toutes les permissions __Gérer le serveur__ du serveur
            
**\`${pf}peveryone\`**
Désactive toutes les permissions __Everyone__ du serveur

          `)
            .setColor(color)


        const button1 = new Discord.MessageButton()
            .setCustomId('gauche')
            .setLabel('<<<')
            .setStyle('PRIMARY');

        const button2 = new Discord.MessageButton()
            .setCustomId('droite')
            .setLabel('>>>')
            .setStyle('PRIMARY');


        pages = [
            Help,
            utilities,
            moderation,
            antiraid,
            admin,
            gestion

        ];

        buttonList = [
            button1,
            button2
        ]

        paginationEmbed(message, pages, buttonList);
        return
    }

}