module.exports = {
    commands: ['harmony', 'one'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getBtcPrice = async () => {
         let data = await CoinGeckoClient.simple.price({
             ids: ['harmony'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#00ecff')
        .setTitle('Harmony')
        .addFields(
                {name: 'Prix en €: ', value: data.data.harmony.eur + " €"},
                {name: 'Prix en $: ', value: data.data.harmony.usd + " $"},
                
            )
            .setThumbnail('https://s2.coinmarketcap.com/static/img/coins/200x200/3945.png')
            .setFooter('$one ou $harmony')
            .setTimestamp(Date.now());
         message.channel.send(embed);
     }
     getBtcPrice();
    },
}