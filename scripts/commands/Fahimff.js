const fs = require("fs");
module.exports.config = {
  name: "fahimff",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("☞♥♪✆😘😍🥵🤯 Fahim islam ☞♥♪✆😘😍🥵🤯")==0 || (event.body.indexOf("Fahim")==0 || (event.body.indexOf("fahim")==0 || (event.body.indexOf("ফাহিম")==0)))) {
		var msg = {
				body: " কিরে এতো ডাকিস কেন আমার বস বিজি আসে দেখস না গা্ৃ্ঁধা্ঁ 🤬:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
