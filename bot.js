const { Client , Intents , Collection, MessageEmbed, User} = require('discord.js')
const fs = require('fs') 
const client = new Client({intents:32767})
const { prefix } = require('./Config/Config')
const dotenv = require('dotenv'); 
dotenv.config();
module.exports = client;

if (process.env.TOKEN == null) {
    console.log("An discord token is empty.");
    return 0;
}

const discordLogin = async() => {
    try {
        await client.login(process.env.TOKEN);  
    } catch (TOKEN_INVALID) {
        console.log("An invalid token was provided");

    }
}


discordLogin();

client.once('ready', async ()=>{
    console.log("봇이 준비되었습니다")
    client.user.setActivity("프티서버 관리중ㅣt.help")
    
})


client.commands = new Collection()

const commandsFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandsFile){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name , command)
}

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
  
      const args = message.content.slice(prefix.length).trim().split(/[ ]+/)
      const command = args.shift().toLowerCase()
      
  
      if (!client.commands.has(command)) return
  
      try {
          client.commands.get(command).execute(message, args, client)
      } catch (error) {
          console.error(error)
          message.reply('해당 명령을 실행하는 동안 오류가 발생했습니다!')
      }
  })






