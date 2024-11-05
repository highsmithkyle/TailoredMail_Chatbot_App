document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chat-messages");

  // Event listener for send button
  sendBtn.addEventListener("click", sendMessage);

  // Event listener for Enter key
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Function to send message
  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("user", message);
    userInput.value = "";

    // Mimic bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      appendMessage("bot", botResponse);
    }, 1000);
  }

  // Function to append messages to chat
  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const textSpan = document.createElement("span");
    textSpan.classList.add("text");
    textSpan.textContent = text;

    messageDiv.appendChild(textSpan);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Placeholder function for bot response
  function getBotResponse(message) {
    // You can enhance this with more complex logic or use predefined responses
    return "Thank you for reaching out! We'll get back to you shortly.";
  }
});
