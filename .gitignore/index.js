const Discord = require('discord.js');

var prefix = ".";

var bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setActivity('le serveur', {type: "WATCHING"});
    console.log("Le bot est bien connecté");
});

// TEST BOT

bot.on('message', message => {
    if(message.content === 'Yo'){
        message.channel.send('Salut');
    }
    
});

bot.on('guildMemberAdd', join => {
    let embed = new Discord.RichEmbed()
        .setAuthor(join.guild.name, join.guild.iconURL)
        .setColor('468abb')
        .setDescription('Bienvenue' + join.user.username + 'sur' + join.guild.name)
        .setFooter('Nous sommes désormais' + join.guild.memberCount)
    join.guild.channels.get('558690513285414943').send(embed)

});

bot.login('NTU5NzY5MjcwODA5MjY0MTM4.D3qOxg.4aHyyYYqSz-YK3UNi9-7F41EaHE');
