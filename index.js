var Client = require("mpp-client");
var client = new Client("ws://www.multiplayerpiano.com:443");
client.setChannel("lobby");
    setTimeout(() => {
        client.sendArray([{ m:'userset', set:{name:"ㅤ"} }]);
        client.sendArray([{ m:'a', message:"" }]);
    }, 100)
}); 

var chat;

(function checkChat(){
	client.start();
	client.once("c", msg => {
		if (!chat) console.log(chat = msg.c);
		else msg.c.forEach(thisChat => {
			let lastChat = chat[chat.length - 1];
			if (thisChat.t > lastChat.t) {
				chat.push(thisChat);
				console.log(thisChat);
			};
		});
		client.stop();
		setTimeout(checkChat, 10000);
	});
})();  
