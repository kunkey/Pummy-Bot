module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} Bạn phải đang trong voice channel với Bot nhạc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} Hiện không có nhạc nào đang phát!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} Vui lòng chỉ định một bộ lọc hợp lệ để bật hoặc tắt !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} Bộ lọc này không tồn tại, hãy thử lại, ví dụ (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} Tôi đang ** thêm ** bộ lọc vào nhạc, vui lòng đợi ... Lưu ý: nhạc càng dài thì quá trình này càng lâu.`);
        else message.channel.send(`${client.emotes.music} Tôi đang ** tắt ** bộ lọc trên nhạc, vui lòng đợi ... Lưu ý: nhạc phát càng lâu, quá trình này sẽ mất nhiều thời gian hơn.`);
    },
};