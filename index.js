const Discord = new require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'cука блять нахуй пиздец') {
        console.log('пагнали')
        setInterval(() => message.channel.send('!work'), 61e4);
    }

    if (message.content === 'cука блять нахуй пиздец') {
        console.log('пагнали')
        setInterval(() => message.channel.send('!crime'), 61e4);
    }

    if (message.content === 'cука блять нахуй пиздец') {
        console.log('пагнали')
        setInterval(() => message.channel.send('!dep all'), 61e4);
    }
});

client.login(process.env.BOT_TOKEN);
