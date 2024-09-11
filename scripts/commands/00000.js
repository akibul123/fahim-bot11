const fs = require("fs");
module.exports.config = {
  name: "00000",
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
	if (event.body.indexOf("Rakhi")==0 || (event.body.indexOf("@বেই মান")==0 || (event.body.indexOf("@সোহাগ হোসেন")==0 || (event.body.indexOf("@Akhi Akther")==0)))) {
		var msg = {
				body: " ওরে কেউ মেসোন দিবি না ও আমার বস ফাহিম এর কলিজা হয়😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
