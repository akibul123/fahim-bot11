const fs = require("fs");
module.exports = {
  config:{
	name: "fahim12",
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
      'https://i.imgur.com/oa5Ym25.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🔪")==0 || body.indexOf("Mim")==0 || body.indexOf("@মেহের তুবা")==0 || body.indexOf("তুবা")==0 || body.indexOf("tuba")==0 || body.indexOf(",")==0 || body.indexOf("@মেহের তুবা")==0 || body.indexOf("maya")==0 || body.indexOf("maya")==0 || body.indexOf("maya")==0) {
		var msg = {
				body: "Md Fahim islam",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😓", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
