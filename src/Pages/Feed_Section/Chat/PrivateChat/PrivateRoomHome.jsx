import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RFRoom.css";

export default function PrivateRoomHome() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const createRoom = () => {
    const code = Math.random().toString(36).substring(2, 8);
    navigate(`/main/chat/private/${code}`);
  };

  const joinRoom = () => {
    if (!roomCode.trim()) return;
    navigate(`/main/chat/private/${roomCode}`);
  };

  return (
    <div className="rf-room-home-container">

      <h2 className="rf-room-title">Private Rooms</h2>

      <div className="rf-room-actions-wrapper">

        <button
          className="rf-room-create-btn"
          onClick={createRoom}
        >
          Create Room
        </button>

        <div className="rf-room-join-box">
          <input
            className="rf-room-input"
            placeholder="Enter Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button
            className="rf-room-join-btn"
            onClick={joinRoom}
          >
            Join
          </button>
        </div>

      </div>

    </div>
  );
}