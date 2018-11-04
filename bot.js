const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "508664191473680394"; // ايدي السررفر
var channel = "508664191473680396";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.login('NTA4Mzg0MjIzMzg0Njk4OTAw.DsCigw.GxliDE_7E4Rdm-UMGTYNWLMSZvU
');
