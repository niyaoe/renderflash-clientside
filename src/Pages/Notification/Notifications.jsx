import "./Notifications.css";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      user: "editwizard",
      action: "liked your video",
      time: "2m",
      avatar: "https://i.pravatar.cc/100?img=21",
      
    },
    {
      id: 2,
      user: "amal.motion",
      action: "commented: 🔥 insane edit",
      time: "10m",
      avatar: "https://i.pravatar.cc/100?img=45",
      
    },
    {
      id: 3,
      user: "pixelstorm",
      action: "started following you",
      time: "1h",
      avatar: "https://i.pravatar.cc/100?img=8",
      
    },
    {
      id: 4,
      user: "framehunter",
      action: "liked your video",
      time: "3h",
      avatar: "https://i.pravatar.cc/100?img=14",
      
    },
  ];

  return (
    <div className="rf-notifications">
      <h3 className="rf-notifications-title">Notifications</h3>

      <div className="rf-notifications-list">
        {notifications.map((n) => (
          <div key={n.id} className="rf-notification-card">
            
            <img src={n.avatar} className="rf-notification-avatar" />

            <div className="rf-notification-content">
              <p>
                <b>{n.user}</b> {n.action}
              </p>
              <span className="rf-notification-time">{n.time}</span>
            </div>

            

          </div>
        ))}
      </div>
    </div>
  );
}