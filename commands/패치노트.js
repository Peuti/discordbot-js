const paginationEmbed = require('discord.js-pagination-v13');
const { MessageActionRow, Message ,MessageEmbed, MessageButton, } = require('discord.js');


module.exports = {
  name: "패치노트",

  async execute(message, args, client) {
    const embed1 = new MessageEmbed()
    .setColor("YELLOW")
    .setTitle("패치노트 1.01")
    .addField("추가된 명령어", "경고, 뮤트, 언뮤트, 밴 등이 추가되었습니다")
    
    const embed2 = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("패치노트 1.02")
    .addField("경고 개선", '경고 기능이 개선 되었습니다. t.경고 @유저맨션 @경고1회(아니면 2회)역할 맨션 하시면 됩니다.')
    
    
    
    
    const emojiList = ['⏪', '⏩']

    pages = [
      embed1,
      embed2,
      //....
  
    ];
    
    // Call the paginationEmbed method, first two arguments are required
    // emojiList is the pageturners defaults to ['⏪', '⏩']
    // timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
    paginationEmbed(message, pages, emojiList);

  },
};
