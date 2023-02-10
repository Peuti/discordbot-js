const { MessageEmbed,CommandInteraction } = require('discord.js')

module.exports = {
    name: "서버정보",
    description: '서버정보를 알려줘요',
    /**
     * @param { CommandInteraction } Interaction
     */
    async execute(interaction) {
        const han = new MessageEmbed()
            .setTitle(`${interaction.guild.name} 서버 정보`)
            .addField(":white_circle: | 서버 이름",`${interaction.guild.name}`)
            .addField(":key:| 서버 아이디",`${interaction.guild.id}`)
            .addField(":balloon: | 서버 생성일",`${interaction.guild.createdAt}`)
            .addField(":woman: | 서버 멤버",`${interaction.guild.memberCount}명`)
            .setThumbnail(interaction.guild.iconURL())
       
            .setTimestamp()
            interaction.reply({ embeds: [han] })
            }

        }
