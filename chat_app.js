const EventEmitter = require('events');
const chatEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
    emitter.emit('message', { user, message });
}

chatEmitter.on('message', (data) => {
    console.log(`${data.user}: ${data.message}`);
});

sendMessage('Alice', 'Hello, everyone!', chatEmitter);
sendMessage('Bob', 'Hi, Alice!', chatEmitter);
sendMessage('Charlie', 'Good morning!', chatEmitter);

