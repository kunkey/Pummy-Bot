module.exports = {
    name: 'p',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}p [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn đang không cùng tham gia chung kênh thoại !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} Vui lòng cho biết tên bài hát !`);

                    client.player.play(message, args.join(" "), { firstResult: true });                

        client.user.setStatus("online");
        client.user.setActivity(client.config.discord.activity, {type: client.config.discord.status});
    },
};