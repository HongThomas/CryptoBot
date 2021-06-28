module.exports = {
    name : 'help',
    description : "Commande help, répértoire des commandes",
    execute(message,args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fdcc58')
        .setTitle('Commandes')
        .setURL('https://www.youtube.com')
        .setDescription('Embed for help command')
        .addFields(
            {name: 'Commande 1', value: '$help'},
            {name: 'Commande 2', value: '$help'},
            {name: 'Commande 3', value: '$help'},
            
        )
        .setImage('https://th.bing.com/th/id/R344583e146a22571f3cb05677f6d03fe?rik=HKFTqxpXMn60xQ&pid=ImgRaw')
        .setFooter('C\'est les commandes mes amis');

        message.channel.send(newEmbed);
    }
}