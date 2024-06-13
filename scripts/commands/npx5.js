const fs = require("fs");
module.exports = {
  config:{
	name: "npx5",
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
      'https://i.imgur.com/xTFUVAd.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("bot dance koro")==0 || body.indexOf("dance")==0 || body.indexOf("/dance")==0 || body.indexOf("dance")==0 || body.indexOf("dance kori")==0 || body.indexOf("dance")==0 || body.indexOf("nach")==0 || body.indexOf("dance kor")==0 || body.indexOf("nach kor")==0 || body.indexOf("ay dance kori")==0) {
		var msg = {
				body: "md fahim islam",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💃", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
