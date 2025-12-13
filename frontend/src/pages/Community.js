import React, { useState } from "react";
import {
  Search,
  Plus,
  Phone,
  MapPin,
  MessageCircle,
  AlertTriangle
} from "lucide-react";
import "./Community.css";

const CommunityBoard = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filters = [
    { id: "All", label: "All" },
    { id: "Blood", label: "Blood Needed" },
    { id: "Missing", label: "Missing Person" },
    { id: "Medical", label: "Medical Emergency" },
    { id: "Shelter", label: "Shelter Needed" },
    { id: "Food", label: "Food / Water" },
    { id: "Disaster", label: "Disaster Help" },
    { id: "Urgent", label: "Urgent Only" }
  ];

  const posts = [
    {
      id: 1,
      type: "Blood Needed",
      urgent: true,
      title: "Urgent: O+ Blood Needed",
      description:
        "My father needs O+ blood urgently for surgery at City Hospital.",
      location: "City Hospital",
      phone: "+92 300 1234567",
      author: "Community Member",
      responses: 3,
      timeAgo: "32m ago"
    },
    {
      id: 2,
      type: "Missing Person",
      urgent: true,
      title: "Missing Child – 8 Years Old",
      description:
        "Last seen near Central Park wearing blue t-shirt and jeans.",
      location: "Central Park",
      phone: "+92 300 9876543",
      author: "Local Police",
      responses: 12,
      timeAgo: "7h ago"
    }
  ];

  return (
    <div className="community-container">
      <main className="main-content">
        {/* Header */}
        <div className="page-header">
          <div>
            <h1>Community Help Board</h1>
            <p className="subtitle">
              Connect with people and get help in emergencies
            </p>
          </div>

          <button
            className="create-post-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={18} />
            Create Post
          </button>
        </div>

        {/* Search + Filters */}
        <div className="search-filter-section">
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search requests..." />
          </div>

          <div className="filters">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${
                  activeFilter === f.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <span className="tag">{post.type}</span>
                {post.urgent && <span className="tag urgent">Urgent</span>}
                <span className="time">{post.timeAgo}</span>
              </div>

              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <div className="post-info">
                <span>
                  <MapPin size={14} /> {post.location}
                </span>
                {post.phone && (
                  <span>
                    <Phone size={14} /> {post.phone}
                  </span>
                )}
              </div>

              <div className="post-footer">
                <span>{post.author}</span>
                <div className="actions">
                  <MessageCircle size={16} />
                  {post.responses} responses
                  <button className="respond-btn">Respond</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Emergency Button */}
      <button className="fab">
        <AlertTriangle  />
      </button>

      {/* ================= CREATE POST MODAL ================= */}
      {showCreateModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="create-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Create Help Request</h2>
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ✕
              </button>
            </div>

            <form className="create-form">
              <label>Category</label>
              <select>
                <option>Blood Needed</option>
                <option>Missing Person</option>
                <option>Medical Emergency</option>
                <option>Shelter Needed</option>
                <option>Food / Water</option>
                <option>Disaster Help</option>
              </select>

              <label>Title</label>
              <input placeholder="Brief title" />

              <label>Description</label>
              <textarea placeholder="Describe your situation..." />

              <label>Location</label>
              <input placeholder="Area / Hospital / City" />

              <label>Contact Phone</label>
              <input placeholder="+92..." />

              <label className="urgent-check">
  <input type="checkbox" />
  <span>Mark as Urgent</span>
</label>


              <button className="submit-btn" type="button">
                Post Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityBoard;
