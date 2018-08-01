const fs = require('fs');
const Discord = require("discord.js");
const settings = require("../settings.json")
const colors = require("../data/colors.json")

module.exports = (client, guild) => {
  try {
    
    let users = 0;
    client.guilds.map(g => users += g.memberCount);

    client.channels.filter(c => c.id === '434521909745549333').forEach(channel => channel.send(`Ear Tensifier has **restarted**. Running on \`${client.guilds.size}\` guilds with \`${users}\` users.`).then(message => {message.delete(20000)}));
    client.channels.filter(c => c.id === '472081326149992448').forEach(channel => channel.send(`Ear Tensifier has **restarted**. Running on \`${client.guilds.size}\` guilds with \`${users}\` users.`).then(message => {message.delete(20000)}));

    
    console.log(`Ear Tensifier is online! Running on ${client.guilds.size} guilds with ${users} users.`);
    client.user.setActivity(`with sounds`);

  } catch (error) {
    console.error(error);
  }
};