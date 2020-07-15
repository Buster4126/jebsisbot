const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async(bot, message, args) => {

    if(!message.member.voice.channel) return message.reply("Connect with a Voice Channel");

    if(message.guild.me.voice.channel) return message.channel.send("Someone is already using the bot, sorry!");

    if(!args[0]) return message.reply("Please write an url");

    var validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("Please write a **valid** url");

    var info = await ytdl.getInfo(args[0]);

    var options = {seek: 3, volume: 1 };

    var channelJoin = message.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], {filter: 'audioonly' });
            var dispatcher = voiceChannel.play(stream, options);

        }).catch(console.error);

    message.channel.send(`Now playing ${info.title}`);

}

module.exports.help = {
    name: "play",
    description: "Play some Music!(Under Construction)",
    category: "General"
}