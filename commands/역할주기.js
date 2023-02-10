const { Permissions, MessageEmbed } = require('discord.js')


const permissionsembed = new MessageEmbed()
.setTitle("❌오류❌")
.setDescription(`해당 명령어는 MANAGE_CHANNELS 또는 MANAGE_ROLES 권한이 있어야합니다!`)
.setColor('RED')


module.exports = {
    name:"역할주기",
    async execute(message, args, client) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) || !message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES))
            return message.reply({embeds : [permissionsembed]})
  
        
   
       
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('역할 선택이 안됐습니다') //when no role is specified or pinged
        const embed = new MessageEmbed()

        .setTitle("역할이 부여되었습니다!")
        .setColor("GREEN")
        .addField('유저', `${target.user.username}`)
        .addField('역할이름', `${role}`)
        .addField('역할 준사람', `${message.author}`)
        message.channel.send({embeds:[embed]})
        await target.roles.add(role)
    }
}
