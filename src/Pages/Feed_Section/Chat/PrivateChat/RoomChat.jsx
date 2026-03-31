import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./RFRoom.css";

export default function RoomChat() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 create socket inside component
  const socket = useRef(null);

  /* =========================
     CONNECT + JOIN ROOM
  ========================== */
  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_URL);

    socket.current.emit("join_room", roomId);

    socket.current.on("receive_room_message", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          ...data,
          isMine: data.user === user?.name,
        },
      ]);
    });

    // 🔥 CLEANUP (VERY IMPORTANT)
    return () => {
      socket.current.emit("leave_room", roomId);
      socket.current.disconnect();
    };
  }, [roomId]);

  /* =========================
     AUTO SCROLL
  ========================== */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* =========================
     SEND MESSAGE
  ========================== */
  const sendMessage = () => {
    if (!input.trim()) return;

    const msg = {
      room: roomId,
      user: user?.name,
      avatar: user?.avatar,
      message: input,
      time: new Date().toLocaleTimeString(),
    };

    socket.current.emit("send_room_message", msg);

    setInput("");
  };

  return (
    <div className="rf-room-chat-container">

      <div className="rf-room-header">
        <h3>Room: {roomId}</h3>
      </div>

      <div className="rf-room-messages-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rf-room-message-bubble ${
              msg.isMine ? "rf-room-message-mine" : ""
            }`}
          >
            {!msg.isMine && (
              <span className="rf-room-user">{msg.user}</span>
            )}

            <p>{msg.message}</p>

            <span className="rf-room-time">{msg.time}</span>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="rf-room-input-container">
        <input
          className="rf-room-message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button
          className="rf-room-send-btn"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>

    </div>
  );
}