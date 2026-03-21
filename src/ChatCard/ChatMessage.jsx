import React from "react";
import "./ChatMessage.css";

export default function ChatMessage({ user, message, avatar, time, isMine }) {
  return (
    <div className={`rf-chat-card ${isMine ? "rf-chat-mine" : ""}`}>
      
      {/* Avatar (hidden for own messages) */}
      {!isMine && (
        <img src={avatar} alt="user" className="rf-chat-avatar" />
      )}

      {/* Message Content */}
      <div className="chat-outer">
        
        <div className="rf-chat-content">
          
          {/* Username (hide for own messages) */}
          {!isMine && (
            <span className="rf-chat-username">{user}</span>
          )}

          <p className="rf-chat-text">{message}</p>

          <span className="chat-time">{time}</span>

        </div>

      </div>
    </div>
  );
}