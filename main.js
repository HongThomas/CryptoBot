// const Discord = require('discord.js');

// const client = new Discord.Client();

// const prefix = '$';

// const fs = require('fs');

// client.commands = new Discord.Collection();

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



// for (const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }

// client.once('ready', () => {
//     console.log('CryptoBot est en ligne.')
// }
// )

// client.on('message', async message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     /* Commandes */
//     if (command === 'help'){
//         client.commands.get('help').execute(message, args, Discord);
//     }

//     if (command === 'bc' || command === 'bitcoin') {
//         client.commands.get('bitcoin').execute(message, args, Discord);

//     }
// }
// )

// const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const client = new Discord.Client()

// const config = require('./config.json')
// const command = require('./commands.js')
// // const client = new Commando.CommandoClient(
//     {owner: '368777903888138242',
//     commandPrefix: config.prefix
// }

// )
client.on('ready', () =>{
    console.log('CryptoBot is online.')

    // command(client, 'ping', (message) => {
    //     message.reply('Pong');
    // })
})

client.login(process.env.DS_CRYPTO);