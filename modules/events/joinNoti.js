module.exports.config = {
  name: "join",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Romim",
  description: "join and welcome notification",
  dependencies: {
    "jimp": ""
  }
};
module.exports.run = async function({ api, event }) {
  const axios = require("axios")
const vid = (
    await axios.get(
      'https://drive.google.com/uc?id=1BSCLgGsSDPmtFP49tgxLuX-p2SE8HcCd',
      { responseType: 'stream' }
    )
  ).data;

  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ➠${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("➣চলে এসেছি আমি R4M1M PICCI বট🤍", event.threadID, () => api.sendMessage({body:`আসসালামু আলাইকুম☘️\n
<------------------------------>\n 
BOT CONNECTED SUCCESFUL !!!\n 

ALWAYS MY KING ROMIM 👑!!!\n
<------------------------------>\n
<^^^^^^^^ABBU ROMIM^^^^^^^^^^^^^>\n
<<<<<------------------------------>>>>>\n
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER\n\n

«========OWNER:★★★𝗥𝗢𝗠𝗜𝗠 𝗔𝗛𝗠𝗘𝗗★★★=========»\n

«★★★★★★★★★★★✓★★★★★★★★★★★★★★★★»\n

   [ BOT NAME:🅁🄾🄼🄸🄼 🄱🄾🅃 ]\n
   
<--------------------------------------------->\n

       [ BOT PREFIX:=[ * ]\n
<------------------------------->\n

  [🔵Facebook:

Www.facebook.com/100087320919723⚪]\n
___________________________\n
_________★★★★★__________\n
***************************
   ⚪«YOUTUBE--=
https://youtube.com/@MIXxA_Ns?»
†»»»»»»»»»»»»»»»»»»»»»»»»»»»»»†\n\n           

×××××××××××××“„«“»”₱№×××××××××××××××××✓✓\n
  «♠️TIKTOK:=!!!!=
https://www.tiktok.com/@its_me_romim07?»
×××××××××××××××××××××××××××××××××××××××✓✓\n

«★★★★★★★★★★★★★★★★★★★★»
🟡Email: redwanboss195@gmail.com
«★★★★★★★★★★★★★★★★★★★★»\n\n

<=================================>
   «🟢Messenger GROUP=!!!!!!!!                     https://m.me/j/Abb7wbYHQa94WIoQ/`, attachment: vid
    } ,threadID));
  }
  else {
    try {
    const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "༆-✿「༒𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴   ｣  ༊࿐\n•—» 🤍✖‿✖•𝙾𝚆𝙽𝙴𝚁:- 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳🤍«—•\n\n╭•┄┅════❁𝗥𝗢𝗠𝗜𝗠 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n🦋🍀ツ●───༊᭄࿐❥\n🤍:)🥀 ♡●আঁপঁনাঁকেঁ গ্রুঁপেঁরঁ সঁবাঁরঁ পঁক্ষঁ থেঁকেঁ শুঁভেঁচ্ছাঁ亗ツ●───༊᭄࿐❥\n\n╰•┄┅════❁ ༺𝙰𝙽𝙳 𝙰𝙶𝙰𝙸𝙽 𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴 ▓࿐ ❁════┅┄•╯" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			

      var link = [
"https://drive.google.com/uc?id=1-mx6CSpzsFJtT-Z9M1d4i4HplaLYkcEx"
      ];
        var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/Nayan.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/Nayan.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/Nayan.jpg")).on("close", () => callback());       
            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
}
