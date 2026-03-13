import "../ProfileTabs/ProfileTabs.css";

export default function YourPosts() {

  const posts = [
    { id: 1, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
   
  ];

  return (
    <div className="rf-video-grid">
      {posts.map((post) => (
        <div key={post.id} className="rf-video-card-profile">
          <video src={post.video} />
        </div>
      ))}
    </div>
  );
}