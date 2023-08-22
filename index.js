const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatDay() {
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    weekday: 'long'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatMonth() {
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    month: 'long'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatYears() {
  const date = new Date();
  const options = {
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.username} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1021634450020376626')
    .setType('PLAYING') //PLAYING, COMPETING, LISTENING, WATCHING, AND STREAMING
    .setURL('Your Twitch URL') //must be a youtube video link
    .setState(`Your State`)
    .setName('ItsFexnes')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}] - [${formatDay()}] - [${formatMonth()}] - [${formatYears()}]`)
    .setStartTimestamp(Date.now())
      /*.setParty({ // remove /* if you want to use the party features
        max: 9999,
        current: 6789,
        id: Discord.getUUID,
      })*/

    
    .setAssetsLargeImage('Large Image URL') //You can put links in tenor or discord and etc (recomended discord image url).
    .setAssetsLargeText('Large Text') //Text when you hover the Large image
    .setAssetsSmallImage('Small Image URL') //You can put links in tenor or discord and etc (recomended discord image url).
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('Button 1', 'Button URL')
    .addButton('Button 2', 'Button URL');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, idle, offline, online

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `THE NAME IT SHOWS YOUR STREAMING [${newTime}] - [${formatDay()}] - [${formatMonth()}] - [${formatYears()}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);










// ©️ Copyright by ItsFexnes - 2023 - All rights reserved
// DM me on discord if there is an error code - rendra.aja#0
// Support me in https://saweria.co/ItsFexnes
// Join my friends store if you want to help my friends and me
