import { useEffect, useState } from "react";
import "./SavedPosts.css";

export default function SavedPosts() {

  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {

    /* MOCK DATA (API READY) */
    const mockSavedPosts = [
      { id: 1, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 2, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ];

    setSavedPosts(mockSavedPosts);

    /*
    FUTURE API

    fetch("/api/posts/saved")
      .then(res => res.json())
      .then(data => setSavedPosts(data));
    */

  }, []);

  return (
    <div className="rf-saved-posts-grid">

      {savedPosts.map((post) => (
        <div key={post.id} className="rf-saved-post-card">

          <video
            src={post.videoUrl}
            className="rf-saved-post-video"
            muted
          />

          <div className="rf-saved-post-overlay">
            <i className="bi bi-bookmark-fill"></i>
          </div>

        </div>
      ))}

    </div>
  );
}