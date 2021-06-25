module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn đang không cùng tham gia chung kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} Hiện không có nhạc nào đang phát!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} Nhạc đã được phát!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} Bài Hát ${client.player.getQueue(message).playing.title} đã tiếp tục !`);
    },
};