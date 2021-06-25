module.exports = {
    name: 'clear',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} Hiện không có nhạc nào đang phát !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} Chỉ có một bài hát trong hàng đợi.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} Hàng đợi vừa được **removed** !`);
    },
};