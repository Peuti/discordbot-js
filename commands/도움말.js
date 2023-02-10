const { MessageEmbed } = require('discord.js')

module.exports = {
    name:"help",
    async execute(message, args, client) {
        const help = new MessageEmbed()
        .setTitle('봇 명령어')
        .setColor("GREEN")
        .addField('t.help', '도움말을 불러옵니다!', true)
        .addField('t.밴', '관리자가 유저를 밴합니다!', true)
        .addField('t.킥', '관리자가 유저를 킥합니다!', true)
        .addField('t.뮤트', '관리자가 유저를 뮤트합니다!', true)
        .addField('t.언뮤트', '관리자가 유저에 뮤트를 풉니다!', true)
        .addField('t.문의', '문의 채널이 만들어지고 언제나 지울수있어요!', true)
        .addField('t.경고', '경고를 줍니다 **경고 줄때는 직접 넣어줘야 합니다**', true)
        .addField('t.패치노트', '패치노트를 보여줍니다!',true)
        .addField('t.청소', '메세지를 청소 할수있습니다!', true)
        .addField('t.투표', '투표를 한번 해볼까요?', true)
        .addField('t.채널닫기', '채널을 닫아요!', true)
        .addField('t.채널열기', '채널을 열어요!', true)
        .addField('t.서버정보', '서버정보를 보여줘요!', true)
        .addField('t.역할주기', '관리자가 명령어로 유저한테 역할을 줄수 있어요!', true)
        .addField('t.공지', '관리자만 쓸수 있지만 AC공지채널에 공지가 보내집니다!', true)
        .setImage(message.author.avatarURL())
        message.channel.send({embeds:[help]})
    }
}
