module.exports = {
    commands: ['bitcoin', 'btc'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getBtcPrice = async () => {
            try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['bitcoin'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#fdcc58')
        .setTitle('Bitcoin')
        .addFields(
                {name: 'Prix en €: ', value: data.data.bitcoin.eur + " €"},
                {name: 'Prix en $: ', value: data.data.bitcoin.usd + " $"},
                
            )
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png')
            .setFooter('$btc ou $bitcoin')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     
     getBtcPrice();
    },
}