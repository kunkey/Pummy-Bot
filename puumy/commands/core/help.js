module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <tên lệnh>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'BLUE',
                    author: { name: client.user.username+': Hướng Dẫn Bot' },
                    footer: { text: 'Một sản phẩm đẹp trai của Vũ Duy Lực trên GitHub (kunkeypr)' },
                    fields: [
                        { name: 'Chế độ kiểm tra bot:', value: infos },
                        { name: 'Chế độ nhạc:', value: music },
                        { name: 'Bộ lọc:', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Để Bot phát nhạc, ${client.config.discord.prefix}play <tên bài hát hoặc url>.\nĐể sử dụng lệnh Bot, ${client.config.discord.prefix}<tên lệnh>.\nĐể sử dụng bộ lọc âm thanh, ${client.config.discord.prefix}filter <tên bộ lọc>. VD : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} Tôi không tìm thấy lệnh này !`);

            message.channel.send({
                embed: {
                    color: 'RED',
                    author: { name: client.user.username+': Hướng Dẫn Bot' },
                    footer: { text: 'Một sản phẩm đẹp trai của Vũ Duy Lực (kunkeypr)' },
                    fields: [
                        { name: 'Tên', value: command.name, inline: true },
                        { name: 'Thể loại', value: command.category, inline: true },
                        { name: 'Bí danh(s)', value: command.aliases.length < 1 ? 'Không' : command.aliases.join(', '), inline: true },
                        { name: 'Sử dụng', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Tìm thông tin về lệnh được cung cấp.\nTham số bắt buộc `[]`, tham số tùy chọn `<>`.',
                }
            });
        };
    },
};