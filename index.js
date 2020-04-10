const discord = require('discord.js');
const client = new discord.Client();
const NXErrorCodes = require('./NXErrorCodes.js');
const fs = require('fs');
const os = require('os');
const bent = require('bent');
const version = '0.3.0';
const prefix = '!';

//Run when the bot is ready
client.on('ready', () => {
    //Set the bot status text
    client.user.setPresence({ activity: { name: '!help', type: 2 }, status: 'idle' });
});

//Message received
client.on('message', msg =>{
    //Don't do anything if not a command
    if(msg.content[0] != prefix) return;
    //Get the command text
    const commandText = msg.content.toLowerCase().split(' ')[0];

    switch (commandText) {
        //Toggle the tester role
        case prefix + 'tester':
        //Check if message sent in guild
        if(msg.guild === null)
        {
            msg.channel.send('This command must be used in a server!');
            return;
        }
        //Get the tester role
        const testerRole = msg.guild.roles.cache.find(item => item.name === 'Tester');
        if(msg.member.roles.cache.find(item => item.name === 'Tester')) msg.member.roles.remove(testerRole); //Remove the role if the user is already a tester
        else msg.member.roles.add(testerRole); //Add the role is the user is not a tester
        break;
        //Switch error code info command
        case prefix + 'serr':
        var errorCode = msg.content.toLowerCase().split(' ')[1];
        var module = 0;
        var description = 0;
        //Check which format the code is in
        //Special cases that need to be added in manually: 0xA83
        if(errorCode.startsWith('0x'))
        {
            module = parseInt(errorCode) & 0xff; //Module is the first 8 bits so we do bitwise and with 255
            description = parseInt(errorCode) >> 9; //Bit shift 9 to the right to get the description
        }
        else
        {
            module = errorCode.split('-')[0] - 2000; //Subtract 2000 to get the module info
            description = parseInt(errorCode.split('-')[1]); //Description is just the second number
        }
        //Check we can get info about that module
        if(NXErrorCodes.NXModules[module] == undefined)
        {
            msg.channel.send("Unkown module");
            return;
        }
        var errorCodeText = (2000 + module) + '-' + description.toString().padStart(4, '0') + ' / 0x' + ((description << 9) + module).toString(16);
        //Create a new embed with the error info
        var errorEmbed = new discord.MessageEmbed()
        .setColor('#fc0303')
        .setAuthor('Switch error code info', client.user.avatarURL(), 'https://github.com/CompSciOrBust/PhemeBot')
        .setTitle(errorCodeText)
        .setURL('https://switchbrew.org/wiki/Error_codes#Error_codes')
        .setDescription(NXErrorCodes.NXModules[module].descriptions[description])
        .addFields({name: 'Module', value: NXErrorCodes.NXModules[module].moduleName + ' (' + module + ')', inline: true}, {name: 'Description', value: description, inline: true});
        msg.channel.send(errorEmbed);
        break;
        //Help command
        case prefix + 'help':
        var helpEmbed = new discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('Pheme commands')
        .setDescription('The following commands are supported (non case sensitive)')
        .addFields({name: prefix + 'Help', value: 'Gives info about Pheme commands (obviously)'},
        {name: prefix + 'About', value: 'Gives info about Pheme'},
        {name: prefix + 'Tester', value: 'Toggles if you are a tester'},
        {name: prefix + 'Serr <error code>', value: 'Gives info about a Nintendo Switch error code'},
        {name: prefix + 'Amiibo <Amiibo name>', value: 'Gets information about an Amiibo'},
        {name: prefix + 'profile <@user>', value: 'Gives info about a user'});
        msg.channel.send(helpEmbed);
        break;
        //about command
        case prefix + 'about':
        var aboutEmbed = new discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('About')
        .setDescription('Pheme by CompSciOrBust')
        .addFields({name: 'Version', value: version, inline: true}, {name: 'Host OS', value: os.type(), inline: true});
        msg.channel.send(aboutEmbed);
        break;
        //Amiibo info command
        case prefix + 'amiibo':
        const getJSON = bent('json');
        const amiiboName = msg.content.split(' ')[1];
        getJSON('https://www.amiiboapi.com/api/amiibo/?name=' + amiiboName)
        .then(body => {
            const amiibo = body.amiibo[0];
            var amiiboEmbed = new discord.MessageEmbed()
            .setColor('#fc0303')
            .setTitle(amiibo.name)
            .addFields({name: 'Amiibo series', value: amiibo.amiiboSeries, inline: true}, {name: 'Game series', value: amiibo.gameSeries, inline: true}, {name: 'Amiibo ID', value: amiibo.head + amiibo.tail, inline: true})
            .setImage(amiibo.image)
            .setURL('https://www.amiiboapi.com/');
            msg.channel.send(amiiboEmbed);
        })
        .catch(error => {msg.channel.send(error.message + ' (did you enter the correct Amiibo name?)');});
        break;
        //Get profile info command
        case prefix + 'profile':
        if(msg.guild === null)
        {
            msg.channel.send('This command must be used in a server!');
            return;
        }
        var memberToGetInfoOf;
        var userToGetInfoOf;
        //If the user didn't ping someone get their own member object
        if(msg.mentions.members.size == 0) memberToGetInfoOf = msg.member;
        else memberToGetInfoOf = msg.mentions.members.first();
        //Get the user object
        userToGetInfoOf = memberToGetInfoOf.user;
        //Get all of the user's roles
        var roleString = '';
        memberToGetInfoOf.roles.cache.forEach(element => {
            roleString += element.name + ', ';
        });
        roleString = roleString.substr(0, roleString.length - 13);
        if(roleString.length == 0) roleString = 'No roles';
        //Construct the embed
        var profileEmbed = new discord.MessageEmbed()
        .setColor(memberToGetInfoOf.roles.highest.color)
        .setAuthor(userToGetInfoOf.tag, userToGetInfoOf.avatarURL())
        .addFields({name: 'ID', value: userToGetInfoOf.id}, //Show the user ID
        {name: 'Profile created on', value: new Date(userToGetInfoOf.createdAt)}, //Show the date the profile was created
        {name: 'Joined ' + msg.guild.name + ' on', value: memberToGetInfoOf.joinedAt}, //Show the date the user joined the server
        {name: 'Roles', value: roleString})
        .setThumbnail(userToGetInfoOf.avatarURL());
        msg.channel.send(profileEmbed);
        break;
    }
});

//When someone joins the server
client.on('guildMemberAdd', member =>{
    const generalChannel = member.guild.channels.cache.find(channel => channel.name == 'general');
    const rulesChannel = member.guild.channels.cache.find(channel => channel.name == 'rules');
    generalChannel.send('<@' + member.id + '> Welcome to the ' + member.guild.name + ' Discord server! Please read <#' + rulesChannel.id + '>!');
});

//Log the bog in
fs.readFile(__dirname + '/discord.key', 'utf8', function(err, contents) {
    client.login(contents);
});