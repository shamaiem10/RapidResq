import React, { useState } from "react";
import { Link } from "react-router-dom"; // if using react-router
import "./Signup.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Signup = () => {
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="signup-page">

      {/* BACK ARROW FIXED ON PAGE */}
      <div className="page-back-arrow">
        <Link to="/">
          <i className="bi bi-arrow-left"></i> Back to home
        </Link>
      </div>

      <div className="signup-container">
        <div className="signup-card">

          <h2 className="signup-title">Create Your Account</h2>

          <form className="signup-form">

            {/* Row 1 */}
            <div className="row">
              <div className="input-group">
                <i className="bi bi-person-fill icon"></i>
                <input type="text" placeholder="Full Name" />
              </div>

              <div className="input-group">
                <i className="bi bi-person-badge-fill icon"></i>
                <input type="text" placeholder="Username" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row">
              <div className="input-group">
                <i className="bi bi-envelope-fill icon"></i>
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-group">
                <i className="bi bi-lock-fill icon"></i>
                <input type="password" placeholder="Password" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="row">
              <div className="input-group">
                <i className="bi bi-telephone-fill icon"></i>
                <input type="text" placeholder="Phone Number" />
              </div>

              <div className="input-group">
                <i className="bi bi-geo-alt-fill icon"></i>
                <input type="text" placeholder="City / Location" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="row">
              <div className="input-group">
                <i className="bi bi-calendar-fill icon"></i>
                <input type="number" placeholder="Age (optional)" />
              </div>

              <div className="input-group">
                <i className="bi bi-gender-ambiguous icon"></i>
                <select>
                  <option>Gender (optional)</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Blood Group (full width row) */}
            <div className="input-group full">
              <i className="bi bi-droplet-fill icon"></i>
              <select>
                <option>Blood Group (optional)</option>
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>O+</option><option>O-</option>
                <option>AB+</option><option>AB-</option>
              </select>
            </div>

            {/* Skills */}
            <label className="skills-label">Skills (optional)</label>
            <div className="skills-box">
              {[
                "First Aid",
                "CPR",
                "Fire Safety",
                "Search & Rescue",
                "Crisis Support",
                "Transportation / Driving",
                "Technical Assistance",
              ].map((skill) => (
                <label key={skill} className="skill-item">
                  <input
                    type="checkbox"
                    checked={skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                  />
                  {skill}
                </label>
              ))}

              <div className="input-group other-skill">
                <i className="bi bi-pencil-square icon"></i>
                <input type="text" placeholder="Other (optional)" />
              </div>
            </div>

            <button className="signup-btn">Create Account</button>

            <p className="login-text">
              Already have an account? <a href="/login">Login</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
