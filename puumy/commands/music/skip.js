module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn đang không cùng tham gia chung kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} Hiện không có nhạc nào đang phát !`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} Đã bỏ qua bài hát **skipped** !`);
    },
};