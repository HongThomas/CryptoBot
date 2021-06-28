const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./commands.js')

client.on('ready', () =>{
    console.log('CryptoBot is online.')
    const baseFile = 'command-base.js';
    const commandBase = require(`./commands/${baseFile}`)
    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()){
                readCommands(path.join(dir,file))
            } else if(file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }
    readCommands('commands');
})

// client.login(process.env.DS_CRYPTO);
// client.login(config.token);
client.login('ODUzMzk5NTMwNTA1NzY0ODY0.YMU0Pw.l-SP_VuNAMp27XqhAZ9gt30EPcg');