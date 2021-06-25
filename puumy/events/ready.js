module.exports = async (client) => {
    console.log(`Bot dang hoat dong trong ${client.guilds.cache.size} servers, ${client.users.cache.size} users`);
	client.user.setStatus("online");
    client.user.setActivity(client.config.discord.activity, {type: client.config.discord.status});
};