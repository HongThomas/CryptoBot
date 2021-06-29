module.exports = {
    commands: ['vechain', 'vet'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getVetPrice = async () => {
            try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['vechain'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#e1eeff')
        .setTitle('Vechain')
        .addFields(
                {name: 'Prix en €: ', value: data.data.ethereum.eur + " €"},
                {name: 'Prix en $: ', value: data.data.ethereum.usd + " $"},
                
            )
            .setThumbnail('https://coindoo.com/wp-content/uploads/2020/04/vechain-coin-logo.png')
            .setFooter('$eth ou $ethereum')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     getVetPrice();
    },
}