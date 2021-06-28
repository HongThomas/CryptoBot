module.exports = {
    commands: ['ethereum', 'eth'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const Discord = require('discord.js')
        const CoinGecko = require('coingecko-api');
        const CoinGeckoClient = new CoinGecko();

        let getEthPrice = async () => {
            try{
         let data = await CoinGeckoClient.simple.price({
             ids: ['ethereum'],
             vs_currencies: ['eur', 'usd'],
         })

         
        const embed = new Discord.MessageEmbed()
        .setColor('#5d99fd')
        .setTitle('Ethereum')
        .addFields(
                {name: 'Prix en €: ', value: data.data.ethereum.eur + " €"},
                {name: 'Prix en $: ', value: data.data.ethereum.usd + " $"},
                
            )
            .setThumbnail('https://th.bing.com/th/id/R9e5b1716ed76c12941ce8adee6a117b0?rik=00xSdhvnNCCmlQ&pid=ImgRaw')
            .setFooter('$eth ou $ethereum')
            .setTimestamp(Date.now());
         message.channel.send(embed);
        } catch(e){
            console.log('Erreur ! ' + e);
        }
     }
     getEthPrice();
    },
}