const {Permissions , MessageEmbed} = require('discord.js')

module.exports = {
    name: "채널열기",
    description: "채널을 열어요!",
    async execute(interaction) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return interaction.reply("권한이 없습니다")
        interaction.channel.permissionOverwrites.edit(interaction.guild.roles.cache.find((e) => e.name.toLowerCase().trim() === "@everyone"),{
            SEND_MESSAGES : true,
            ADD_REACTIONS : true
        })
        const date = new Date()
        const time = Math.round(date.getTime() / 1000)

        const embed = new MessageEmbed()
        .setTitle("채널이 열림")
        .setDescription("일반 유저에게서 메세지보내기 , 이모지달기 권한을 추가했습니다")
        .addFields(
            {name : "채널을 열은 관리자" , value: `${interaction.author}` , inline:true},
            {name : "명령어가 실행된 시간", value:`<t:${time}>`,inline:true},
        )
        .setColor("BLUE")
        .setTimestamp()
        interaction.channel.send({embeds : [embed]})
    }
}
