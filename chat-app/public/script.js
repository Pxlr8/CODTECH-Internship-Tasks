const socket = io();

const username = prompt("Enter your name") || "Anonymous";

socket.emit("join", username);

const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");
const typing = document.getElementById("typing");
const userCount = document.getElementById("userCount");


// Send message
function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    socket.emit("chat-message", {
        user: username,
        text: text
    });

    input.value = "";
}


// Enter key support
input.addEventListener("keypress", (event) => {

    socket.emit("typing", username);

    if(event.key === "Enter"){
        sendMessage();
    }
});


// Receive messages
socket.on("message", (data) => {

    typing.innerHTML = "";

    const div = document.createElement("div");

    div.classList.add("message");

    div.innerHTML = `
        <strong>${data.user}</strong><br>
        ${data.text}
        <span class="time">${data.time || ""}</span>
    `;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
});


// Typing indicator
socket.on("typing", (data) => {

    typing.innerHTML = data;

    setTimeout(() => {
        typing.innerHTML = "";
    }, 1000);
});


// Online users count
socket.on("user-count", (count) => {
    userCount.innerHTML = count;
});