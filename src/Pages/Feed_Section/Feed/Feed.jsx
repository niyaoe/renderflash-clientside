import { useState } from "react";
import AutoPlayVideo from "../../../Autoplay/AutoPlayVideo";
import "./Feed.css";
import { FaRegWindowClose } from "react-icons/fa";

/* ===============================
   INITIAL POSTS
=================================*/
const initialPosts = [
  {
    id: 1,
    category: "Ronaldo",
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 12,
    liked: false,
    comments: 4,
    saved: false,
  },
  {
    id: 2,
    category: "Ronaldo",
    user: "@flash_editor",
    caption: "Velocity transition edit ⚡",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 8,
    liked: false,
    comments: 2,
    saved: false,
  },

  // ✅ NEW POSTS
  {
    id: 3,
    category: "Messi",
    user: "@edit_master",
    caption: "Smooth dribble cinematic edit 🐐",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 21,
    liked: false,
    comments: 6,
    saved: false,
  },
  {
    id: 4,
    category: "Football",
    user: "@velocity_fx",
    caption: "Epic stadium transition edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 15,
    liked: false,
    comments: 3,
    saved: false,
  },
  {
    id: 5,
    category: "Neymar",
    user: "@flash_cuts",
    caption: "Skill move slow-motion edit ✨",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 30,
    liked: false,
    comments: 9,
    saved: false,
  },
  {
    id: 6,
    category: "UCL",
    user: "@cinematic_lab",
    caption: "Champions League hype edit ⚽",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 18,
    liked: false,
    comments: 5,
    saved: false,
  },
  {
    id: 7,
    category: "Freestyle",
    user: "@motion_editz",
    caption: "Freestyle football aesthetic reel 🎬",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 11,
    liked: false,
    comments: 2,
    saved: false,
  }
];

export default function Feed() {
  const [activePost, setActivePost] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [feedPosts, setFeedPosts] = useState(initialPosts);

  /* ===============================
     LIKE
  =================================*/
  const handleLike = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );

    // await axios.post(`/api/posts/${id}/like`);
  };

  /* ===============================
     COMMENT
  =================================*/
  const handleComment = (id) => {
    setActivePost(id);

    // API READY
    // axios.get(`/api/posts/${id}/comments`)
    //   .then(res => setComments(prev => ({
    //       ...prev,
    //       [id]: res.data
    //   })));
  };

  const addComment = async () => {
    if (!newComment.trim()) return;

    const commentObj = {
      id: Date.now(),
      user: "@you",
      text: newComment,
    };

    setComments((prev) => ({
      ...prev,
      [activePost]: [...(prev[activePost] || []), commentObj],
    }));

    setNewComment("");

    // API READY
    // await axios.post(`/api/posts/${activePost}/comments`, {
    //   text: newComment
    // });
  };

  /* ===============================
     SAVE POST
  =================================*/
  const handleSave = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post,
      ),
    );

    // await axios.post(`/api/posts/${id}/save`);
  };

  return (
    <div className="rf-video-feed">
      {feedPosts.map((post) => (
        <div key={post.id} className="rf-video-card">
          {/* USER INFO */}
          <div className="rf-video-info">
            <div className="rf-post-left">
              <h4>{post.user}</h4>
              <p>{post.caption}</p>
            </div>

            <div className="rf-post-category">
              <p className="rf-category">{post.category}</p>
            </div>
          </div>

          {/* VIDEO */}
          <AutoPlayVideo src={post.video} />

          
          {/* ACTIONS */}
          <div className="rf-video-actions">
            <div className="rf-actions-left">
              {/* LIKE */}
              <button
                className="rf-action-btn"
                onClick={() => handleLike(post.id)}
              >
                <i
                  className={`bi ${post.liked ? "bi-heart-fill" : "bi-heart"}`}
                ></i>
                <span>{post.likes}</span>
              </button>

              {/* COMMENT */}
              <button
                className="rf-action-btn"
                onClick={() => handleComment(post.id)}
              >
                <i className="bi bi-chat"></i>
                <span>{post.comments}</span>
              </button>

              {/* SAVE — NOW LEFT */}
              <button
                className="rf-action-btn"
                onClick={() => handleSave(post.id)}
              >
                <i
                  className={`bi ${
                    post.saved ? "bi-bookmark-fill" : "bi-bookmark"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      ))}
      {activePost && (
        <div className="rf-comment-overlay">
          <div className="rf-comment-box">
            <div className="rf-comment-header">
              <h4>Comments</h4>
              <i
                className="bi bi-x-lg rf-close-icon"
                onClick={() => setActivePost(null)}
              ></i>
            </div>

            <div className="rf-comment-list">
              {(comments[activePost] || []).map((c) => (
                <div key={c.id} className="rf-comment-item">
                  <b>{c.user}</b>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>

            <div className="rf-comment-input">
              <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <i
                className="bi bi-send-fill rf-comment-send"
                onClick={addComment}
              ></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
