const discord = require('discord.js');

var client = new discord.Client();

const token = "NjIwMTIxMzU0NjQ1Mjc0NjQ0.XXSMDQ.j4r6TzHS37k7w3WNPTWyNjT2XAw";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity("Squirtle Squad");
});

const prefix = "!charmander";
client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix)) {
        message.channel.send ('@everyone');
        
        message.channel.send ({files: ["./img/charmander.png"]});
       
    }

});

client.login (token);