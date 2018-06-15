const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"

client.on('ready', () => {
  client.user.setGame('*help ', 'https://www.twitch.tv/zzstefanro321/') 
})   

   client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "secret")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0xff0000)
   message.channel.sendEmbed(embed);
  }

});

  client.on('message', message => {    
    if(message.content.startsWith('*mass')) {
    if(message.author.id === "320887181516210177" ||
message.author.id === "320887181516210177"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === '*invite') {
      msg.channel.send('Invite **** https://discordapp.com/api/oauth2/authorize?client_id=434766536826290177&permissions=8&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '*support') {
      msg.channel.send('https://discord.gg/rB2822H');
    }
  });

client.on('message', msg => {
    if (msg.content === '*info') {
      msg.channel.send('To set welcome to this server create a channel `misterbot-area`'); 
    }
  });

client.on('message', msg => {
    if (msg.content === '*help') {
      msg.channel.send('`? Commands ?` , *invite , *support , *info');
    }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'misterbot-area');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `Welcome ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.BOT_TOKEN)
