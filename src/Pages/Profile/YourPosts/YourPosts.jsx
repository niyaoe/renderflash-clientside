import { useEffect, useState } from "react";
import "./YourPosts.css";

export default function YourPosts() {

  const [posts, setPosts] = useState([]);

  /* API READY */
  useEffect(() => {

    // later replace with API
    const mockPosts = [
      { id: 1, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 1241 },
      { id: 2, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 950 },
      { id: 3, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 402 },
      { id: 4, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 2300 },
      { id: 5, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 120 },
      { id: 6, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 650 },
      { id: 7, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 890 },
      { id: 8, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: 1420 },
    ];

    setPosts(mockPosts);

  }, []);

  return (
    <div className="rf-profile-posts-grid">

      {posts.map((post) => (
        <div key={post.id} className="rf-profile-post-card">

          <video
            src={post.videoUrl}
            className="rf-profile-post-video"
            muted
            preload="metadata"
          />

          {/* overlay like instagram */}
          <div className="rf-profile-post-overlay">
            <i className="bi bi-play-fill"></i>
            <span>{post.views}</span>
          </div>

        </div>
      ))}

    </div>
  );
}