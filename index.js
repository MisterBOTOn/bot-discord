const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "m?"

client.on('ready', () => {
})   
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '✌ || 𝓜𝒆𝓶𝓫𝓻𝓾 𝓜𝔂𝓽𝓱𝓲𝓬');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', '😏welcome-bye😥');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**<a:fastmod:464500224384303126> Bine ai venit in comunitatea noastra <a:fastmod:464500224384303126>**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '😏welcome-bye😥');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**La revedere , ne  vom revedea in forta**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
