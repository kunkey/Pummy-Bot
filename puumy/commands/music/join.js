module.exports = {
    name: 'join',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  Bạn đang không cùng tham gia chung kênh thoại !`);

        var voiceCN = message.member.voice.channel;
        voiceCN.join();
        client.user.setStatus("online");
        client.user.setActivity(client.config.discord.activity, {type: client.config.discord.status});

        message.channel.send(`${client.emotes.success} BOT đã vào kênh !`);
    },
};
