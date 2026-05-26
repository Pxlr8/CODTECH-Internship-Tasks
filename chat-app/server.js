const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

let users = 0;

io.on("connection", (socket) => {

    users++;

    io.emit("user-count", users);

    console.log("User Connected");

    socket.on("join", (username) => {

        socket.broadcast.emit("message", {
            user: "System",
            text: `${username} joined the chat`
        });

    });


    socket.on("typing", (username) => {
        socket.broadcast.emit("typing", `${username} is typing...`);
    });


    socket.on("chat-message", (data) => {

        io.emit("message", {
            user: data.user,
            text: data.text,
            time: new Date().toLocaleTimeString()
        });

    });


    socket.on("disconnect", () => {

        users--;

        io.emit("user-count", users);

        console.log("User Disconnected");

    });

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});