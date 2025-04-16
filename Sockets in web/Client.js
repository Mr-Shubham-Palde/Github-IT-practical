// const { io } = require('socket.io-client');


// const socket = io('http://localhost:3000');

// socket.on('connect', ()=>{
//     console.log('connecte to server');

//     socket.emit('message','Hello from client!');
// })

// socket.on('message',(msg)=>{
//     console.log('Messafe From Server:',msg);

//     setTimeout(()=>{
//         console.log('Disconnecting...');
//         socket.disconnect();
//     },3000)
// })

const { io } = require('socket.io-client');
const readline = require('readline');

// Connect to the server
const socket = io('http://localhost:3000');

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// When connected to the server
socket.on('connect', () => {
    console.log('Connected to server. You can start typing your messages:');

    rl.on('line', (input) => {
        // Send message to server
        socket.emit('message', input);
    });
});

// When receiving message from server
socket.on('message', (msg) => {
    console.log('Message From Server:', msg);
});

// When disconnected
socket.on('disconnect', () => {
    console.log('Disconnected from server.');
    rl.close();
});
