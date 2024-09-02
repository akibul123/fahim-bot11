module.exports.config = {
  name: "ruls",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "rules",
  category: "rules",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/THk8hul.jpeg",

            "https://i.imgur.com/Gas6EM7.jpeg", 

            "https://i.imgur.com/ymHWOTm.jpeg",

"",

            "https://i.imgur.com/Gas6EM7.jpeg"];

var callback = () => api.sendMessage({body:`আসসালামু আলাইকুম 
"༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺প⋆⃝🌸࿐" 
ফ্যামেলি গ্রুপের কলিজার ভাই/বোন__😊🍒 

আমাদের গ্রুপে আসার জন্য আপনাকে অনেক ধন্যবাদ______!!🍒😘    

এটা আড্ডা বক্স, এখানে কোন বাজে বিহেভ অথবা ১৮+ কথা বলা যাবে না 💯

এখানে সবাই বন্ধুর মতো আড্ডা দিবা💯

তোমাদের নিয়ে আমাদের এইসব বক্স সো তোমরা মিলে মিশে আড্ডা দিবা 🌼

৩ দিনের বেশি এক্টিভ না থাকলে এডমিন  
আপনাকে বক্সের রুলস অনুযায়ী রিমুভ করতে বাধ্য হবে_______💚🍒
  

༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺𝄞⋆⃝🌸࿐ ফ্যামেলি গ্ৰুপের পক্ষ থেকে আপনাকে  জানায় ভালবাসা  অভিরাম_____💯🌸

          🌸💯______𝐂𝐄𝐎______💯🌸 ............ .  Md Fahim islam`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
