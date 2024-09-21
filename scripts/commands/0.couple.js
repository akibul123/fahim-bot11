const fs = require("fs");
module.exports = {
  config:{
	name: "fahim16",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "fahim islam", 
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
      'https://i.imgur.com/2rfTHsp.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("Fahim")==0 || body.indexOf("ফাহিম")==0) {
		var msg = {
				body: "Md Fahim islam ",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
