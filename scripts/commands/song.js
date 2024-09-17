// Fixed by Mohammad Nayan. Dont Change Credit
const fs = require('fs');
const ytdl = require('ytdl-core');
const axios = require('axios');
const { createReadStream, unlinkSync, statSync, existsSync } = require('fs-extra');
const Youtube = require('youtube-search-api');

async function downloadMusicFromYoutube(link, path) {
  if (!link) return 'Undefined Link';

  const timestart = Date.now();

  try {
    const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
    const nayan = apis.data.youtube;
    const response = await axios.get(`${nayan}/downloadAudio?url=${link}`, { responseType: 'stream' });
    const writer = fs.createWriteStream(path);

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    const data = await ytdl.getInfo(link);
    const result = {
      title: data.videoDetails.title,
      dur: Number(data.videoDetails.lengthSeconds),
      viewCount: data.videoDetails.viewCount,
      likes: data.videoDetails.likes,
      author: data.videoDetails.author.name,
      timestart: timestart
    };

    return result;
  } catch (error) {
    console.error('Error downloading music:', error);
    throw error;
  }
}

module.exports.config = {
  name: "song",
  version: "1.0.3",
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Media",
  usages: "user",
  cooldowns: 5,
  dependencies: {
    "ytdl-core": "",
    "simple-youtube-api": ""
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  try {
    const path = `${__dirname}/cache/1.mp3`;
    const data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body - 1], path);

    if (statSync(path).size > 26214400) {
      return api.sendMessage('The file cannot be sent because it exceeds 25MB.', event.threadID, () => unlinkSync(path), event.messageID);
    }

    api.unsendMessage(handleReply.messageID);
    return api.sendMessage({ 
      body: `🎵 Title: ${data.title}\n🎶 Channel: ${data.author}\n⏱️ Duration: ${this.convertHMS(data.dur)}\n👀 Views: ${data.viewCount}\n🥰 Likes: ${data.likes}\n⏱️ Processing time: ${Math.floor((Date.now() - data.timestart) / 1000)} seconds\n💿====DISME PROJECT====💿`,
      attachment: createReadStream(path)
    }, event.threadID, () => unlinkSync(path), event.messageID);
  } catch (error) {
    console.error('Error handling reply:', error);
    return api.sendMessage('An error occurred while handling the reply.', event.threadID, event.messageID);
  }
};

module.exports.convertHMS = function(value) {
  const sec = parseInt(value, 10);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - (hours * 3600)) / 60);
  const seconds = sec - (hours * 3600) - (minutes * 60);
  return `${hours > 0 ? String(hours).padStart(2, '0') + ':' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

module.exports.run = async function ({ api, event, args }) {
  if (args.length === 0) {
    return api.sendMessage('» Please provide a keyword or URL.', event.threadID, event.messageID);
  }

  const keywordSearch = args.join(" ");
  const path = `${__dirname}/cache/1.mp3`;

  if (existsSync(path)) { 
    unlinkSync(path);
  }

  if (keywordSearch.startsWith("https://")) {
    try {
      const data = await downloadMusicFromYoutube(keywordSearch, path);
      if (statSync(path).size > 26214400) {
        return api.sendMessage('Unable to send files because the capacity exceeds 25MB.', event.threadID, () => unlinkSync(path), event.messageID);
      }
      return api.sendMessage({
        body: `🎵 Title: ${data.title}\n🎶 Channel: ${data.author}\n⏱️ Duration: ${this.convertHMS(data.dur)}\n👀 Views: ${data.viewCount}\n👍 Likes: ${data.likes}\n⏱️ Processing time: ${Math.floor((Date.now() - data.timestart) / 1000)} seconds\n💿====DISME PROJECT====💿`,
        attachment: createReadStream(path)
      }, event.threadID, () => unlinkSync(path), event.messageID);
    } catch (error) {
      console.error('Error running URL download:', error);
      return api.sendMessage('An error occurred while downloading the music.', event.threadID, event.messageID);
    }
  } else {
    try {
      const data = await Youtube.GetListByKeyword(keywordSearch, false, 6);
      const link = [];
      let msg = "";
      let num = 0;

      data.items.forEach(value => {
        link.push(value.id);
        num++;
        msg += `${num} - ${value.title} (${value.length.simpleText})\n\n`;
      });

      const body = `»🔎 Found ${link.length} results for your search keyword:\n\n${msg}» Reply with the number to select one of the searches above.`;
      return api.sendMessage({
        body: body
      }, event.threadID, (error, info) => {
        if (error) {
          console.error('Error sending search results:', error);
          return api.sendMessage('An error occurred while sending the search results.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          link
        });
      }, event.messageID);
    } catch (error) {
      console.error('Error running search:', error);
      return api.sendMessage('An error occurred while searching for the video.', event.threadID, event.messageID);
    }
  }
};
