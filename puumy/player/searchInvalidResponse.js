module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} Lựa chọn đã được **cancelled** !`);
    } else message.channel.send(`${client.emotes.error}! Bạn phải gửi một số hợp lệ giữa **1** và **${tracks.length}** !`);
};