module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Đây là danh sách kết quả tìm kiếm của bạn cho "${query}"` },
            footer: { text: 'Bot này sử dụng một dự án Github do Vũ Duy Lực thực hiện (kunkeypr)' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}**: ${t.title}`).join('\n')}`,
        },
    });
};