var Client = require("mpp-client");
var client = new Client("ws://www.multiplayerpiano.com:443");
client.setChannel("NMPB Lobby");

(function checkChat(){
	client.start();
	client.once("c", msg => {
		client.stop();
		setTimeout(checkChat, 1000);
	});
})(); 
