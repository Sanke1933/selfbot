const Discord = new require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'пагнали') {
        console.log('пагнали')
        setInterval(() => message.channel.send('pls beg'), 61e2);
    };
});


client.login(process.env.BOT_TOKEN);