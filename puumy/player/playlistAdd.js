module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} đã được thêm vào hàng đợi (**${playlist.tracks.length}** ) !`);
};