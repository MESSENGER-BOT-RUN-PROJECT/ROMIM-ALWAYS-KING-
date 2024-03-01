module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "ROMIM", 
	description: "Admin and Bot info.",
	usePrefix:true,
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
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/SIzhwdz.mp4", "https://i.imgur.com/wuDrUJ4.mp4", "https://i.imgur.com/NZuQYym.mp4"];
var callback = () => api.sendMessage({body:`★★★★★★★★★★★★★★\n꧁☠︎ᴮᴼᵀ ᴵᴺᶠᴼᴿᴹᴬᵀᴵᴼᴺ ♡●\n
༒ᴮᴼᵀ ᴺᴬᴹᴱ 💎ღ: 🅁🄾🄼🄸🄼 🄱🄾🅃\n
❀♰♛BOT PREFIX 亗: ${global.config.PREFIX}\n
꧁ 𒈞𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 ヅ: ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ\n
༒𝙵𝙱 𝙻𝙸𝙽𝙺⦖:https://www.facebook.com/100087320919723\n\n
𝖳𝗈𝖽𝖺𝗒 𝗂𝗌: ${juswa} 
𝖡𝗈𝗍 𝗂𝗌 𝗋𝗎𝗇𝗇𝗂𝗇𝗀 ${hours}:${minutes}:${seconds}\n━━━━━━━━━━━━━━\n★★★★★★★★★★★★★★
\n🤍꧁⁣༒𓆩༒𝚃𝙷𝙰𝙽𝙺'𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚁𝙾𝙼𝙸𝙼 𝙱𝙾𝚃༒ 亗\n亗𝚁𝙾𝙼𝙸𝙼亗___⓫⓻➎___/ :*
⓫➎⓫⓫⓫⓫⓫⓫⓫⓫ :*
❹⓼______〤 _____❽⓾ ;*
⓫➎⓫⓫⓫⓫⓫⓫⓫⓫ ;*
◙◙____❷⓿⓶❹____:* :* 3:)`,attachment: fs.createReadStream(__dirname + "/cache/juswa.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.mp4")).on("close",() => callback());
   };
