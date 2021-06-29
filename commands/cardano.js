module.exports = {
    commands: ['cardano', 'ada'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getAdaPrice = async () => {
        try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['cardano'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#205A86')
        .setTitle('Cardano')
        .addFields(
                {name: 'Prix en €: ', value: data.data.cardano.eur + " €"},
                {name: 'Prix en $: ', value: data.data.cardano.usd + " $"},
                
            )
            .setThumbnail('https://th.bing.com/th/id/R927f902ee5173a5e8211c2760a3bb150?rik=tY%2fC9PM4KU3rEQ&pid=ImgRaw')
            .setFooter('$ada ou $cardano')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     getAdaPrice();
    },
}