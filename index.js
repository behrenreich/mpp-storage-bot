var Channel = "lobby7";

// Import Client.js
const MPPClient = require("mpp-client");

// Creation of the bot that will connect to MPP
client = new MPPClient('ws://multiplayerpiano.com', undefined);

// Start of the bot
client.start();

// When the bot is connected...
client.on("hi", () => {
    // Log a message in the console
    console.log("Connected!");

    // Go into a channel
    client.setChannel("lobby7");

    // Showing that the bot is ready
    setTimeout(() => {
        client.sendArray([{ m:'userset', set:{name:"ㅤ"} }]);
        client.sendArray([{ m:'a', message:"" }]);
    }, 100)
});  

client.on("a", function(msg){
  console.log(`ID: ${msg.p._id}`)
  console.log(`${msg.p.name}: ${msg.a}`)
});

var stdin = process.openStdin();
stdin.addListener("data", function(data) {
  var message = data.toString().trim();
  client.sendArray([{m:'a', message}]);
});

setInterval(function(){client.startNote("c7", 1)}, 900);
setInterval(function(){client.startNote("b6", 1)}, 900);
