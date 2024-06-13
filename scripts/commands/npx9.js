const fs = require("fs");
module.exports = {
  config:{
	name: "npx9",
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
      'https://i.imgur.com/uv3QwWn.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("fahim")==0 || body.indexOf("Fahim")==0 || body.indexOf("boss fahim")==0 || body.indexOf("Bot er admin")==0 || body.indexOf("fahim islam")==0 || body.indexOf("Ami fahim")==0 || body.indexOf("fahim.") {
		var msg = {
				body: "Fahim islam",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
