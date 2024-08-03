const fs = require("fs");
module.exports = {
  config:{
	name: "npx7",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/pXaA17P.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("fider")==0 || body.indexOf("dud")==0 || body.indexOf("dudu")==0 || body.indexOf("🍼")==0 || body.indexOf("pider")==0 || body.indexOf("pm pm")==0 || body.indexOf("pom pom")==0 || body.indexOf("pm pm khamu")==0 || body.indexOf("fider")==0 || body.indexOf("milk")==0) {
		var msg = {
				body: "Fahim Islam",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
