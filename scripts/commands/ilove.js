const fs = require("fs");
module.exports.config = {
  name: "iloveu",
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
	if (event.body.indexOf("mim")==0 || (event.body.indexOf("Fahim")==0 || (event.body.indexOf("@Nilima Mim")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: " ওরে কেউ মেসন দিবি না ও আমার বস ফাহিম এর বউ😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
