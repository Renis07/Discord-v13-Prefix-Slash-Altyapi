var fs = require('fs');

const {Client, Collection, Intents } = require('discord.js');
let cpuStat = require("cpu-stat");
const mongoose = require("mongoose");
const config = require('./src/config/config.json')

const client = new Client({
      intents: 98047,  //kullanacağınız intentler
});

const Discord = require('discord.js');

require('dotenv').config()

module.exports = client;

client.discord = Discord;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./src/config/config.json')

require("./src/handler")(client);
 

// =================TOKENİ SECRET BÖLÜMÜNE GİRİNİZ===================== //
client.login(process.env.TOKEN);
 // =================SECRET ADINI TOKEN YAPIN===================== //
