const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async(bot, message, args) => {

    if(!message.member.voice.channel) return message.reply("Connect with a Voice Channel");

    if(!message.guild.me.voice.channel) return message.channel.send("Sorry, the bot isn't connected");

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("Sorry, your not connected with the same channel");

    message.guild.me.voice.channel.leave();


}

module.exports.help = {
    name: "leave",
    description: "Play some Music!(Under Construction)",
    category: "General"
}