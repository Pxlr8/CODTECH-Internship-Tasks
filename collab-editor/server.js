const express = require("express");

const http = require("http");

const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

let documentData = "";

let users = 0;



io.on("connection", (socket) => {

    users++;

    io.emit("user-count", users);

    console.log("User Connected");



    // Send existing document
    socket.emit("load-document", documentData);



    // Live sync
    socket.on("text-change", (data) => {

        documentData = data;

        socket.broadcast.emit("receive-changes", data);

    });



    // Typing
    socket.on("typing", (name) => {

        socket.broadcast.emit("show-typing", `${name} is editing...`);

    });



    // Disconnect
    socket.on("disconnect", () => {

        users--;

        io.emit("user-count", users);

        console.log("User Disconnected");

    });

});



server.listen(3000, () => {

console.log("Server running on http://localhost:3000");
});