const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const amountStars = args[0];

    if(!amountStars || amountStars < 1 || amountStars > 5) return message.reply("Please write how many stars you want to give: between: 1-5");

    var text = args.splice(1, args.length).join(" ") || '**There isnt any text**';

    var channel = message.member.guild.channels.cache.get("732387797352317019");

    if(!channel) return message.channel.send("This channel doesn't exist");

    var stars = " ";
    for (let i = 0; i < amountStars; i++) {
        
        stars+= ":star: ";
        
    }

    message.delete();

    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} wrote a review!`)
        .setColor("#00ff00")
        .addField("Stars: ", stars)
        .addField("Review ", text);
    message.channel.send("✅ You have successfully created a review");

    return channel.send(embed);

}

module.exports.help = {
    name: "review",
    description: "Give Jebsi a feedback",
    category: "General"
}