module.exports = {
    name: 'np',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}np',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn đang không cùng tham gia chung kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} Hiện không có nhạc nào đang phát !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Bot này sử dụng một dự án Github do Vũ Duy Lực thực hiện (kunkeypr)' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Yêu Cầu Bởi', value: track.requestedBy.username, inline: true },
                    { name: 'Từ Playlist', value: track.fromPlaylist ? 'Có' : 'Không Có', inline: true },

                    { name: 'Lượt Views', value: track.views, inline: true },
                    { name: 'Thời Lượng', value: track.duration, inline: true },
                    { name: 'Bộ lọc được sử dụng', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Âm Lượng', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Chế độ lặp', value: client.player.getQueue(message).repeatMode ? 'Có' : 'Không Có', inline: true },
                    { name: 'Currently paused', value: client.player.getQueue(message).paused ? 'Có' : 'Không Có', inline: true },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};