const fs = require('fs');
const discord = require('discord.js');
const express = require('express');
const app = express();

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Cai dat cau lenh: ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Cai dat thu vien: ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Cài dat thu vien: ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};


const event_start = require(`./events/ready`);

app.set('view engine', 'ejs'); // set ejs to template extension
app.use(express.static('views'));

app.get('/', function (req, res) {
	res.render('index', {
		Title: client.config.website.title,
		Bot_Id: client.user.id,
		Bot_Name: client.user.username
	});
});

//app.listen(process.env.PORT, 80);

app.listen(process.env.PORT, client.config.website.port, (err) => {  
  if (err) {
    return console.log('co loi gi do xay ra khi open PORT!', err);
  }

  console.log(`Server is listening on ${client.config.website.port}`);
});

client.login(client.config.discord.token);