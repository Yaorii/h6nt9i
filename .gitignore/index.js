const Discord = require('discord.js');

var prefix = ".";

var bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setActivity('le serveur', {type: "WATCHING"});
    bot.user.setStatus('online')
    message.guild.channels.get('558680058055884830').send(":boticon: Chargement Terminer.")
    console.log("Le bot est bien connecté");
});

// TEST BOT

bot.on('message', message => {
    if(message.content === 'Yo'){
        message.channel.send('Salut');
    }
    
});

// JOIN + QUIT

bot.on('guildMemberAdd', join => {
    let embed = new Discord.RichEmbed()
        .setAuthor(join.guild.name, join.guild.iconURL)
        .setColor('468abb')
        .setDescription('Bienvenue ' + join.user + ' sur ' + join.guild.name)
        .setFooter('Nous sommes désormais ' + join.guild.memberCount)
        .setTimestamp(join.user.displayAvatarURL)
    join.guild.channels.get('558690513285414943').send(embed)
    join.addRole('558716724866842647')

});

bot.on('guildMemberRemove', quit => {
    let embed = new Discord.RichEmbed()
        .setAuthor(quit.guild.name, quit.guild.iconURL)
        .setColor('#468abb')
        .setDescription(quit.user.username + ' à quitter ' + quit.guild.name)
        .setFooter('Dommage, au revoir ')
        .setTimestamp(quit.user.displayAvatarURL)
    quit.guild.channels.get('558690513285414943').send(embed)

});

// command

bot.on('message', message => {
    if(!message.guild) return;

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: Vous ne pouvez pas utilliser cette commande !");

    if(message.content === prefix + 'clear') {
        message.channel.bulkDelete(100)

    }
});

bot.on('message', message => {
    if(!message.guild) return;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous ne pouvez pas utilliser cette commande !");

    if(message.content === prefix + 'info'){
        let botmessage = args.message(" ");
        message.guild.channels.get('558679846130155520').send('@everyone' + botmessage)

    }
})


// LOGIN

bot.login('process.env.TOKEN');
