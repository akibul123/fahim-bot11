const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
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
      'https://i.imgur.com/O8Th1ll.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("vlobasi")==0 || body.indexOf("love u")==0 || body.indexOf("love")==0 || body.indexOf("i love u")==0 || body.indexOf("love u joy")==0 || body.indexOf("prem korbo")==0 || body.indexOf("vlobasi tmay")==0 || body.indexOf("prem")==0 || body.indexOf("love u jan")==0 || body.indexOf("Love")==0) {
		var msg = {
				body: "md fahim islam",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
