// socketInit.js
const socketIo = require("socket.io");

let io; // Declare io without initializing it yet

const initializeSocket = (server, origin) => {
    io = socketIo(server, {
        cors: {
            origin: origin,
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("New user connected: ", socket.id);
        // Handle events here
        io.emit("message", "Welcome")
    });

    return io
};

// Export the initialize function and the io instance
module.exports = { initializeSocket, getIo: () => io };
