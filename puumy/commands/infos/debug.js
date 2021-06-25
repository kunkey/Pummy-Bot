module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
    	if(client.voice.connections.size > 0) {
	        message.channel.send(`${client.emotes.success} ${client.user.username} đang được kết nối tới **${client.voice.connections.size}** kênh!`);
    	}else {
    		message.channel.send(`${client.emotes.success} ${client.user.username} chưa được kết nối tới kênh nào!`);
    	}
    },
};