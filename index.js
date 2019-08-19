var URLs = [
  "ws://www.multiplayerpiano.com:443",
  "ws://mpp-proxy-server-53--ehrenreich.repl.co",
  "ws://mpp-proxy-server-55--ehrenreich.repl.co",
  "ws://mpp-proxy-server-56--ehrenreich.repl.co",
  "ws://mpp-proxy-server-57--ehrenreich.repl.co",
  "ws://mpp-proxy-server-58--ehrenreich.repl.co",
  "ws://mpp-proxy-server-59--ehrenreich.repl.co",
  "ws://mpp-proxy-server-61--ehrenreich.repl.co",
  "ws://mpp-proxy-server-62--ehrenreich.repl.co",
  "ws://mpp-proxy-server-63--ehrenreich.repl.co",
  "ws://mpp-proxy-server-64--ehrenreich.repl.co",
  "ws://mpp-proxy-server-65--ehrenreich.repl.co",
  "ws://mpp-proxy-server-66--ehrenreich.repl.co",
  "ws://mpp-proxy-server-67--ehrenreich.repl.co",
  "ws://mpp-proxy-server-68--ehrenreich.repl.co",
  "ws://mpp-proxy-server-69--ehrenreich.repl.co",
  "ws://mpp-proxy-server-70--ehrenreich.repl.co",
  "ws://mpp-proxy-server-71--ehrenreich.repl.co",
  "ws://mpp-proxy-server-72--ehrenreich.repl.co",
  "ws://mpp-proxy-server-73--ehrenreich.repl.co",
  "ws://mpp-proxy-server-74--ehrenreich.repl.co",
  "ws://mpp-proxy-server-75--ehrenreich.repl.co",
  "ws://mpp-proxy-server-76--ehrenreich.repl.co",
  "ws://mpp-proxy-server-77--ehrenreich.repl.co",
  "ws://mpp-proxy-server-78--ehrenreich.repl.co",
  "ws://mpp-proxy-server-79--ehrenreich.repl.co",
  "ws://mpp-proxy-server-80--ehrenreich.repl.co",
  "ws://mpp-proxy-server-81--ehrenreich.repl.co",
  "ws://mpp-proxy-server-83--ehrenreich.repl.co",
  "ws://mpp-proxy-server-85--ehrenreich.repl.co",
  "ws://mpp-proxy-server-86--ehrenreich.repl.co",
  "ws://mpp-proxy-server-87--ehrenreich.repl.co",
  "ws://mpp-proxy-server-88--ehrenreich.repl.co",
  "ws://mpp-proxy-server-89--ehrenreich.repl.co",
  "ws://mpp-proxy-server-90--ehrenreich.repl.co",
  "ws://mpp-proxy-server-91--ehrenreich.repl.co",
  "ws://mpp-proxy-server-92--ehrenreich.repl.co",
  "ws://mpp-proxy-server-93--ehrenreich.repl.co",
  "ws://mpp-proxy-server-94--ehrenreich.repl.co",
  "ws://mpp-proxy-server-95--ehrenreich.repl.co",
  "ws://mpp-proxy-server-96--ehrenreich.repl.co",
  "ws://mpp-proxy-server-97--ehrenreich.repl.co",
  "ws://mpp-proxy-server-98--ehrenreich.repl.co",
  "ws://mpp-proxy-server-99--ehrenreich.repl.co",
  "ws://mpp-proxy-server-100--ehrenreich.repl.co",
  "ws://mpp-proxy-server-101--ehrenreich.repl.co",
  "ws://mpp-proxy-server-102--ehrenreich.repl.co",
  "ws://mpp-proxy-server-103--ehrenreich.repl.co",
  "ws://mpp-proxy-server-104--ehrenreich.repl.co",
  "ws://mpp-proxy-server-105--ehrenreich.repl.co",
  "ws://mpp-proxy-server-106--ehrenreich.repl.co",
  "ws://mpp-proxy-server-107--ehrenreich.repl.co",
  "ws://mpp-proxy-server-108--ehrenreich.repl.co",
  "ws://mpp-proxy-server-109--ehrenreich.repl.co",
  "ws://mpp-proxy-server-110--ehrenreich.repl.co",
  "ws://mpp-proxy-server-111--ehrenreich.repl.co",
  "ws://mpp-proxy-server-112--ehrenreich.repl.co",
  "ws://mpp-proxy-server-113--ehrenreich.repl.co",
  "ws://mpp-proxy-server-114--ehrenreich.repl.co",
  "ws://mpp-proxy-server-115--ehrenreich.repl.co",
  "ws://mpp-proxy-server-116--ehrenreich.repl.co",
  "ws://mpp-proxy-server-117--ehrenreich.repl.co",
  "ws://mpp-proxy-server-118--ehrenreich.repl.co",
  "ws://mpp-proxy-server-119--ehrenreich.repl.co",
  "ws://mpp-proxy-server-120--ehrenreich.repl.co",
];

var i = 0;
var clients = URLs.map((url, i) => {
	var Client = require('mpp-client-xt');
	var client = new Client(url);

let x = 100 * Math.random(),
    y = 100 * Math.random(),
    xSpeed = 0.02,
    ySpeed = 0.03;

function setPosition(e, t) {
    client.sendArray([{
        m: "m",
        x: e,
        y: t
    }])
}

setInterval(() => {
    setPosition(x, y), (x + xSpeed > 100 || x + xSpeed < 0) && (xSpeed *= -1), (y + ySpeed > 100 || y + ySpeed < 0) && (ySpeed *= -.9999), x += xSpeed, y += ySpeed
}, 0);

client.on("p",function(msg) {
  msg._id === client.getOwnParticipant()._id ? client.sendArray([{m:'userset', set: {name: 'ofo'}}]) : {};
});

var stdin = process.openStdin();
stdin.addListener("data", function(data) {
  var message = data.toString().trim();
  client.sendArray([{m:'a', message}]);
});

(function checkChat(){
	client.start();
	client.once("c", msg => {
		client.stop();
		setTimeout(checkChat, 1000);
	});
})(); 

setInterval(function() { client.startNote('c7', 1); }, 1);
setInterval(function() { client.startNote('b6', 1); }, 1);
setInterval(function() { client.startNote('a6', 1); }, 1);
setInterval(function() { client.startNote('g6', 1); }, 1);
setInterval(function() { client.startNote('f6', 1); }, 1);
setInterval(function() { client.startNote('e6', 1); }, 1);
setInterval(function() { client.startNote('d6', 1); }, 1);
setInterval(function() { client.startNote('c6', 1); }, 1);
setInterval(function() { client.startNote('b5', 1); }, 1);
setInterval(function() { client.startNote('a5', 1); }, 1);
setInterval(function() { client.startNote('g5', 1); }, 1);
setInterval(function() { client.startNote('f5', 1); }, 1);
setInterval(function() { client.startNote('e5', 1); }, 1);
setInterval(function() { client.startNote('d5', 1); }, 1);
setInterval(function() { client.startNote('c5', 1); }, 1);
setInterval(function() { client.startNote('b4', 1); }, 1);
setInterval(function() { client.startNote('a4', 1); }, 1);
setInterval(function() { client.startNote('g4', 1); }, 1);
setInterval(function() { client.startNote('f4', 1); }, 1);
setInterval(function() { client.startNote('e4', 1); }, 1);
setInterval(function() { client.startNote('d4', 1); }, 1);
setInterval(function() { client.startNote('c4', 1); }, 1);
setInterval(function() { client.startNote('b3', 1); }, 1);
setInterval(function() { client.startNote('a3', 1); }, 1);
setInterval(function() { client.startNote('g3', 1); }, 1);
setInterval(function() { client.startNote('f3', 1); }, 1);
setInterval(function() { client.startNote('e3', 1); }, 1);
setInterval(function() { client.startNote('d3', 1); }, 1);
setInterval(function() { client.startNote('c3', 1); }, 1);
setInterval(function() { client.startNote('b2', 1); }, 1);
setInterval(function() { client.startNote('a2', 1); }, 1);
setInterval(function() { client.startNote('g2', 1); }, 1);
setInterval(function() { client.startNote('f2', 1); }, 1);
setInterval(function() { client.startNote('e2', 1); }, 1);
setInterval(function() { client.startNote('d2', 1); }, 1);
setInterval(function() { client.startNote('c2', 1); }, 1);
setInterval(function() { client.startNote('b1', 1); }, 1);
setInterval(function() { client.startNote('a1', 1); }, 1);
setInterval(function() { client.startNote('g1', 1); }, 1);
setInterval(function() { client.startNote('f1', 1); }, 1);
setInterval(function() { client.startNote('e1', 1); }, 1);
setInterval(function() { client.startNote('d1', 1); }, 1);
setInterval(function() { client.startNote('c1', 1); }, 1);
setInterval(function() { client.startNote('b0', 1); }, 1);
setInterval(function() { client.startNote('a0', 1); }, 1);
setInterval(function() { client.startNote('g0', 1); }, 1);
setInterval(function() { client.startNote('f0', 1); }, 1);
setInterval(function() { client.startNote('e0', 1); }, 1);
setInterval(function() { client.startNote('d0', 1); }, 1);
setInterval(function() { client.startNote('c0', 1); }, 1);

	client.setChannel("test/awkward");
	client.start();
  client.on("connect", ()=> (url, "connected"));
  client.on("disconnect", ()=> (url, "disconnected"));
	client.on('hi', () => {
		client.setName('ofo');
	});
  return client;
});
