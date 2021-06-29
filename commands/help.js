module.exports = {
    commands: ['help', 'h'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Commandes')
        .setDescription('Préfixe = $')
        .addFields(
                {name: 'Bitcoin: ', value: "``$btc`` ou ``$bitcoin``"},
                {name: 'Ethereum: ', value: "``$eth`` ou ``$ethereum``"},
                {name: 'Dogecoin: ', value: "``$doge`` ou ``$dogecoin``"},
                {name: 'Shiba Inu: ', value: "``$shib`` ou ``$shibainu``"},
                {name: 'Cardano: ', value: "``$ada`` ou ``$cardano``"},
                {name: 'Harmony: ', value: "``$one`` ou ``$harmony``"},
                {name: 'Vechain: ', value: "``$vet`` ou ``$vechain``"},
            )
            .setFooter('CryptotoBot');

         message.channel.send(embed);
    },
}