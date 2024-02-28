module.exports.config = {
  name: "album",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Shaon Ahmed- modified by 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳",
  description: "Random video",
  usePrefix:false,
  commandCategory: "short video",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("╭──────•👑•──────╮\n\n☢★★★★★★🤍𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾🤍★★★★★★☢ \n!\n»1 𝙸𝚂𝙻𝙰𝙼 𝚅𝙸𝙳𝙴𝙾✓\n!\n»2 𝙰𝙽𝙸𝙼𝙴 𝚅𝙸𝙳𝙴𝙾✓\n!\n»3 𝚂𝙷𝙰𝙸𝚁𝙸 𝚅𝙸𝙳𝙴𝙾✓\n!\n»4 𝚂𝙷𝙾𝚁𝚃 𝚅𝙸𝙳𝙴𝙾✓\n!\n»5 𝚂𝙰𝙳𝚅𝙸𝙳𝙴𝙾✓\n!\n»6 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾✓\n!\n»7 𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻 𝚅𝙸𝙳𝙴𝙾✓\n!\n»8 𝙵𝚄𝙽𝙽𝚈 𝚅𝙸𝙳𝙴𝙾✓\n!\n»9 𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾✓\n!\n»10 𝙲𝙿𝙻 𝚅𝙸𝙳𝙴𝙾✓\n!\n»11 𝙱𝙰𝙱𝚈 𝚅𝙸𝙳𝙴𝙾✓\n!\n»12 𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝚅𝙸𝙳𝙴𝙾✓\n!\n»13 𝙻𝙾𝙵𝙸 𝚅𝙸𝙳𝙴𝙾✓\n!\n»14 𝙷𝙰𝙿𝙿𝚈 𝚅𝙸𝙳𝙴𝙾✓\n!\n»15 𝙷𝚄𝙼𝙰𝙸𝚈𝚄𝙽 𝚂𝙸𝚁 𝚅𝙸𝙳𝙴𝙾✓™\n☢«««««««🤍»»»»»»»☢\n◄┈╯\n★★★★★★★★★★★★★★★★★★★★★★\n𝙾𝚆𝙽𝙴𝚁:𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳\nROMIM ALWAYS KING 👑\n╰──────•👑•──────╯\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
  }, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
  }) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const Romim = (await p.get(h)).data.Romim;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `꧁༻★🔥★⋆𝙹𝙰𝙽 𝙰𝙸 𝙽𝙰𝚆 𝚃𝙾𝙼𝙰𝚁 𝚅𝙸𝙳𝙴𝙾 亗👑`,
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://shaon-all-api-07mo.onrender.com/video/islam";
        else if ("2" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/anime";
        else if ("3" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/shairi";
        else if ("4" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/short";
        else if ("5" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/sad";
        else if ("6" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/status";
        else if ("7" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/football";
        else if ("8" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/funny";
        else if ("9" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/love";
        else if ("10" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/cpl";
          else if ("11" == a.body)
           var  h = "https://shaon-all-api-07mo.onrender.com/video/baby";
          else if ("12" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/ff";
         else if ("13" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/lofi";
         else if ("14" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/happy";
         else if ("15" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/humaiyun";
           else if ("000" == a.body)
         var  h =
"https:0//shaon-all-api-07mo.onrender.com/video/sex";
    else if ("6866" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/horny";
    else if ("5864" == a.body)
         var  h =
"https:0//shaon-all-api-07mo.onrender.com/video/item";
    else if ("77oo" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/hot";
    else if ("7677" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/capcut";
        return { p, h };
    }
};
