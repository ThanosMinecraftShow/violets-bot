const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.ODAyMDY1ODI0MTIyNTM1OTU2.YAp0Ag.tETZsKIz1aDiX10gMYd1kG2oo-s);
