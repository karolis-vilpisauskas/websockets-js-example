const socket = new WebSocket("ws://localhost:8080");

const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");

// Listen for messages
socket.onmessage = ({ data }) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  li.setAttribute("id", `message-${Math.random()}`);
  messageList.appendChild(li);
};

document.querySelector("button").onclick = () => {
  socket.send(messageInput.value);
};
