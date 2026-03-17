import { useState, useEffect } from "react";
import axios from "axios";
import "./EditProfile.css";

export default function EditProfile() {
  const [preview, setPreview] = useState(null);
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    bio: "",
    country: "",
  });

  const token = localStorage.getItem("token");

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia",
    "Germany", "France", "UAE", "Saudi Arabia", "Japan", "China"
  ];

  const softwares = [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "Final Cut Pro",
    "CapCut",
    "Filmora",
    "Vegas Pro",
    "Blender",
    "VN Video Editor",
    "Alight Motion",
  ];

  // 🔥 FETCH USER DATA
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5002/api/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = res.data;

        setFormData({
          username: user.username || "",
          name: user.name || "",
          bio: user.bio || "",
          country: user.country || "",
        });

        setSelectedSoftwares(user.softwares || []);
        setPreview(user.avatar || null);

      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 SOFTWARE ADD
  const addSoftware = (software) => {
    if (!software || selectedSoftwares.includes(software)) return;
    setSelectedSoftwares((prev) => [...prev, software]);
  };

  const removeSoftware = (software) => {
    setSelectedSoftwares((prev) =>
      prev.filter((item) => item !== software)
    );
  };

  // 🔥 IMAGE PREVIEW
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      // Later → upload to cloudinary
    }
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "http://localhost:5002/api/user/update",
        {
          ...formData,
          softwares: selectedSoftwares,
          avatar: preview, // temp (later replace with cloudinary URL)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Profile Updated");

    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div className="rf-account-settings">
      <h3 className="rf-settings-title">Edit Profile</h3>

      {/* PROFILE PIC */}
      <div className="rf-profile-pic-section">
        <img
          src={preview || "https://i.pravatar.cc/150?img=32"}
          alt="profile"
          className="rf-profile-preview"
        />

        <label className="rf-upload-btn">
          <i className="bi bi-pen-fill"></i>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>

        <input
          className="rf-username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>

      {/* FORM */}
      <form className="rf-settings-form" onSubmit={handleSubmit}>

        {/* NAME */}
        <div className="rf-form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        {/* BIO */}
        <div className="rf-form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write something about you..."
          />
        </div>

        {/* SOFTWARE */}
        <div className="rf-form-group">
          <label>Softwares</label>

          <div className="rf-selected-chips">
            {selectedSoftwares.map((software) => (
              <div key={software} className="rf-chip active">
                {software}
                <span
                  className="rf-chip-remove"
                  onClick={() => removeSoftware(software)}
                >
                  ×
                </span>
              </div>
            ))}
          </div>

          <select
            value=""
            onChange={(e) => addSoftware(e.target.value)}
            className="rf-software-select"
          >
            <option value="" disabled>
              Select Software
            </option>

            {softwares
              .filter((s) => !selectedSoftwares.includes(s))
              .map((software) => (
                <option key={software} value={software}>
                  {software}
                </option>
              ))}
          </select>
        </div>

        {/* COUNTRY */}
        <div className="rf-form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* SUBMIT */}
        <button type="submit" className="rf-apply-btn">
          Apply Changes
        </button>

      </form>
    </div>
  );
}