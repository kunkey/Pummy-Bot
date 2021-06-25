module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn không ở trong cùng một kênh thoại !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} Vui lòng cho biết tên bài hát !`);

        client.player.play(message, args.join(" "));
    },
};