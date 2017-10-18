
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")



bot.login('MzcwMjU0ODM0NDI4ODA1MTIw.DMkbcg.sOPitS6f1TOSaYW_kbxa6pmX8LA');