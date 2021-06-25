module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {

    	if(client.ws.ping <= 40) {
    		var quality = 'Ngon! Nên dùng';
    	}else if (client.ws.ping > 40 && client.ws.ping <= 500) {
    		var quality = 'Ổn Định!';		
    	}else if (client.ws.ping > 500 && client.ws.ping <= 50000) {
    		var quality = 'Thi thoảng hơi lag...';
    	}else {
    		var quality = 'Giật Lag 99%...';
    	}

        message.channel.send(`Ping của **${client.user.username}** : **${client.ws.ping}ms** => ${quality}`);
    },
};