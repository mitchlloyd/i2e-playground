var http = require('http');
var sockjs = require('sockjs');

var messages = [
  'Ada logged in',
  'Allen logged in',
  'Gena logged in',
  'Tomster in the house'
]

var socketServer = sockjs.createServer();
socketServer.on('connection', periodicallyWrite);

function periodicallyWrite(conn) {
  var index = 0;
  var writeMessage = function() {
    conn.write(messages[index]);
    index = nextIndex(index);
  };
  setInterval(writeMessage, 3000);
}

function nextIndex(index) {
  return index === 3 ? 0 : index + 1;
}

var server = http.createServer();
socketServer.installHandlers(server, {prefix:'/friend-activity'});
server.listen(8080, '0.0.0.0');

