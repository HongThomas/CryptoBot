// function getPrixBitcoin(){
//   const fetch = require("node-fetch");
//   let url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false';
//   fetch(url)
//   .then(function(data) {
//     return data.json();
//   })
//   .then(function(myJson){
//     let prix = myJson.bitcoin.eur;
//     return prix;
//   })
// };
module.exports = {
    name : 'bitcoin',
    description : "",
    
    execute(message,args, Discord){

        const CoinGecko = require('coingecko-api');

        //2. Initiate the CoinGecko API Client
        const CoinGeckoClient = new CoinGecko();

        
     
        let func = async () => {
         let data = await CoinGeckoClient.simple.price({
             ids: ['bitcoin', 'ethereum'],
             vs_currencies: ['eur', 'usd'],
         })
     }
     let data = async () => {
        try {
            var data = await func();
        } catch(e) {
            console.log('Erreur !');
            console.log(e);
        }
        console.log(data);
     };
     let embed = async (prix) => {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fdcc58')
            .setTitle('Bitcoin')
            .setURL('https://www.youtube.com')
            .setDescription('1 BTC =')
            .addFields(
                {name: 'Prix en $: ', value: prix},
                {name: 'Prix en €: ', value: 'value'},
                
            )
            .setImage('https://th.bing.com/th/id/OIP.gYEEYXuJLYw03cV0_ANzcwHaHa?pid=ImgDet&rs=1')
            .setFooter('$bc ou $bitcoin');
        return newEmbed;
    }
     func().then(data =>message.channel.send(embed(data.data.bitcoin.eur)));


    
            

    }
}