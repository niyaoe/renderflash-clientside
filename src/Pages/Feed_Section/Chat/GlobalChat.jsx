import { useState, useEffect, useRef } from "react";
import "./RFGlobalChat.css";

export default function GlobalChat() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "editwizard",
      message: "Anyone exporting 4K reels without quality loss?",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "9:12 PM",
      isMine: false,
    },
    {
      id: 2,
      user: "niyas.cut",
      message: "Try 60fps + VBR 2 pass.",
      avatar: "https://i.pravatar.cc/100?img=32",
      time: "9:13 PM",
      isMine: true,
    },
      {
      id: 3,
      user: "snehasuseel",
      message: "Hello guys",
      avatar: "https://i.pravatar.cc/100?img=24",
      time: "9:12 PM",
      isMine: false,
    },
    
  ]);

  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  /* auto scroll to latest message */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

    or

    axios.post("/api/chat/send", newMessage)
    */
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="rf-chat-container">

      {/* messages */}
      <div className="rf-chat-messages">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`rf-chat-message ${msg.isMine ? "rf-chat-mine" : ""}`}
          >

            {!msg.isMine && (
              <img
                src={msg.avatar}
                className="rf-chat-avatar"
                alt="avatar"
              />
            )}

            <div className="rf-chat-bubble">

              {!msg.isMine && (
                <span className="rf-chat-user">{msg.user}</span>
              )}

              <p className="rf-chat-text">{msg.message}</p>

              <span className="rf-chat-time">{msg.time}</span>

            </div>

          </div>
        ))}

        <div ref={chatEndRef}></div>

      </div>

      {/* input */}
      <div className="rf-chat-input-wrapper">

        <input
          className="rf-chat-input"
          placeholder="Send anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="rf-chat-send-btn"
          onClick={sendMessage}
        >
          <i className="bi bi-send-fill"></i>
        </button>

      </div>

    </div>
  );
}