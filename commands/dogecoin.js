module.exports = {
    commands: ['dogecoin', 'doge'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getDogePrice = async () => {
            try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['dogecoin'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#ecefe9')
        .setTitle('Dogecoin')
        .addFields(
                {name: 'Prix en €: ', value: data.data.dogecoin.eur + " €"},
                {name: 'Prix en $: ', value: data.data.dogecoin.usd + " $"},
                
            )
            .setThumbnail('https://faisalkhan.com/wp-content/uploads/2015/04/rsz_1dogecoin.png')
            .setFooter('$doge ou $dogecoin')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     getDogePrice();
    },
}