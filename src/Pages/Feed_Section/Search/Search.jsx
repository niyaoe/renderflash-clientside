import "./Search.css";

export default function Search() {
  return (
    <div className="rf-search-section">

      <input
        placeholder="Search creators, edits..."
        className="rf-search-input"
      />

      <div className="rf-search-placeholder">
        <p>🔎 Trending creators</p>
        <p>@velocity_edit</p>
        <p>@cinema_flash</p>
        <p>@motion_ai</p>
      </div>

    </div>
  );
}