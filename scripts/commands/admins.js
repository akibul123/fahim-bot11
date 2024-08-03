module.exports.config = {
name: "admin",
version: "1.0.1", 
hasPermssion: 0,
credits: "aizen code", //don't change the credits please
description: "Admin and Bot info.",
commandCategory: "...",
cooldowns: 1,
dependencies: 
{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
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
var link = ["https://i.postimg.cc/nhybf9W7/received-320490950683263.jpg",
"https://i.postimg.cc/DwxJ3yCd/Screenshot-20231020-155148.jpg",
           "https://i.postimg.cc/nhybf9W7/received-320490950683263.jpg"];
  
var callback = () => api.sendMessage({body:`DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : FAHIM ISLAM 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : MD FAHIM ISLAM 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: FARIDPUR, DHAKA, BANGLADESH 
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐤𝐨𝐦𝐮 𝐧𝐚
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 20+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : akibulsheikh2@gamil.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801892323664
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/👅💦💋
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : 
 https://www.facebook.com/profile.php?id=100046430705172
  `,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
