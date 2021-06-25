module.exports = {
    name: 'leave',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}leave',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn đang không cùng tham gia chung kênh thoại !`);

            try {
                message.member.voice.channel.leave();
                message.channel.send(`${client.emotes.success} BOT đã thoát kênh !`);
            } catch (error) {/*...*/};
    },
};