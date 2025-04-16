// const http = require('http');
// const { Server } = require('socket.io')
// const readline = require('readline');


// const server = http.createServer();
// const io = new Server(server);

// io.on('connect',(socket)=>{
//     console.log('client connected:', socket.id);

//     socket.on('message',(msg)=>{
//         console.log('Received:',msg);
//         socket.emit('message','server received:'+msg);
//     })

//     socket.on('disconnect',()=>{
//         console.log('client disconnected:',socket.id);
//     })
// })


// server.listen(3000,()=>{
//     console.log('Socket.IO server listening on port 3000');
// })

const http = require('http');
const { Server } = require('socket.io');
const readline = require('readline');

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('client connected:', socket.id);

    // Server sends a message to the client after connection
    socket.emit('message', 'Hello from server!');

    // Listen for incoming messages from the client
    socket.on('message', (msg) => {
        console.log('Received:', msg);

        // If the message is 'byy', disconnect the client
        if (msg.toLowerCase() === 'byy') {
            console.log('Client wants to disconnect');
            socket.emit('message', 'Goodbye! Disconnecting now...');
            socket.disconnect(); // Disconnect the client
        } else {
            // If it's not 'byy', echo the message back to the client
            socket.emit('message', 'server received: ' + msg);
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('client disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Socket.IO server listening on port 3000');
});
