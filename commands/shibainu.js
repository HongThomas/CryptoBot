module.exports = {
    commands: ['shibainu', 'shib'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getBtcPrice = async () => {
            try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['shiba-inu'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Shiba Inu')
        .addFields(
                {name: 'Prix en €: ', value: data.data['shiba-inu'].eur + " €"},
                {name: 'Prix en $: ', value: data.data['shiba-inu'].usd + " $"},
                
            )
            .setThumbnail('https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png')
            .setFooter('$shib ou $shibainu')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     getBtcPrice();
    },
}