const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setActivity('le serveur', {type: "WATCHING"});
    console.log("Le bot est bien connecté");
});

bot.login('NTU5NzY5MjcwODA5MjY0MTM4.D3qOxg.4aHyyYYqSz-YK3UNi9-7F41EaHE');
