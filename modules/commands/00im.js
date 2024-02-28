module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ROMIM",
    description: "Lấy link ảnh imgur",
	usePrefix:true,
    commandCategory: "Công cụ",
    usages: "[reply]",
    cooldowns: 5,
	dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('[⚜️]→ আপনার ফটো লিংক', event.threadID, event.messageID)
const res = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/imgur?url=${encodeURIComponent(linkanh)}`);    
var img = res.data.data;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
	
}
