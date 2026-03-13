import "./GlobalChat.css";
import ChatMessage from "../../../ChatCard/ChatMessage";
import { useEffect, useState } from "react";

export default function GlobalChat() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "editwizard",
      message: "Anyone exporting 4K reels without quality loss?",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "9:12pm",
      isMine: false,
    },
    {
      id: 2,
      user: "niyas.cut",
      message: "Try 60fps + VBR 2 pass. Works smooth for me.",
      avatar: "https://i.pravatar.cc/100?img=33",
      time: "9:13pm",
      isMine: false,
    },
  ]);

  const [input, setInput] = useState("");

  /* scroll to bottom */
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "auto",
      });
    }, 0);
  }, [messages]);

  /* send message */
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: "you",
      message: input,
      avatar: "https://i.pravatar.cc/100?img=32",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMine: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    /*
    BACKEND READY

    socket.emit("send-message", newMessage)

    OR

    axios.post("/api/chat/send", newMessage)
    */
  };

  /* enter key send */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="rf-chat-section">
      
      <div className="rf-chat-messages">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            {...msg}
            isMine={msg.isMine}
          />
        ))}
      </div>

      <div className="rf-chat-input-area">
        <input
          className="rf-chat-input"
          placeholder="Send Anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <i
          className="bi bi-send-fill rf-comment-send"
          onClick={sendMessage}
        ></i>
      </div>

    </div>
  );
}