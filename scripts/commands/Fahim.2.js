const fs = require("fs");
module.exports.config = {
  name: "fahim",
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
	if (event.body.indexOf("bot er malik ke")==0 || (event.body.indexOf("kar bot")==0 || (event.body.indexOf("bot tor boss ke")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: " আমার বস ফাহিম ইসলাম কিছু বলে আমার বসের ইনবক্সে এ জা Facebook ling : https://www.facebook.com/profile.php?id=100046430705172:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
