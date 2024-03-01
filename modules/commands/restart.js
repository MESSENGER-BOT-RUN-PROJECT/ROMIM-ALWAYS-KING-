module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart Bot",
  usePrefix: true,
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`[❶❶❶]⁖℘༒𝚁𝙾𝙼𝙸𝙼 𝙱𝙾𝚃 𝙰𝚁𝙴 𝙽𝙾𝚆 𝚁𝙴𝚂𝚃𝙰𝚁𝚃 亗[❶❶❶]\n[❶❶❶]𖤍𖤓𝚃𝙷𝙰𝙽𝙺'𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚁𝙾𝙼𝙸𝙼 𝙱𝙾𝚃 —͟͟͞͞𖣘\n[❶❶❶] [❶❶❶]亗𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙷𝙸𝙼 : Facebook.com/100087320919723_______[❶❶❶]\n
[❶❶❶]꧁♧𝙰𝙱𝙱𝚄 𝚁𝙾𝙼𝙸𝙼 ☠︎︎✪2.0[❶❶❶] `, threadID, () => process.exit(1));
}
