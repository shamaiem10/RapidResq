import React, { useState } from 'react';
import './Account.css';
import { AlertTriangle } from 'lucide-react';
const AccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    emergencyContact: '',
    bloodType: '',
    medicalConditions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
  };

  return (
    <div className="account-page">
     

      {/* Main Content */}
      <main className="account-main-content">
        {/* Profile Card */}
        <div className="account-profile-card">
          <div className="account-avatar">JD</div>
          <div className="account-profile-info">
            <h2>John Doe</h2>
            <p className="account-email">john.doe@example.com</p>
            <span className="account-verified-badge">Verified User</span>
          </div>
        </div>

        {/* Personal Information */}
        <div className="account-section">
          <div className="account-section-header">
            <div className="account-section-icon personal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <h3>Personal Information</h3>
              <p className="account-section-subtitle">Update your personal details</p>
            </div>
          </div>

          <div className="account-form">
            <div className="account-form-row">
              <div className="account-form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="account-input"
                />
              </div>
              <div className="account-form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="account-input"
                />
              </div>
            </div>

            <div className="account-form-group">
              <label>Email Address</label>
              <div className="account-input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="account-input-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="account-input with-icon"
                />
              </div>
            </div>

            <div className="account-form-group">
              <label>Phone Number</label>
              <div className="account-input-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="account-input-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="account-input with-icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="account-section">
          <div className="account-section-header">
            <div className="account-section-icon emergency">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <h3>Emergency Information</h3>
              <p className="account-section-subtitle">Critical info for emergencies</p>
            </div>
          </div>

          <div className="account-form">
            <div className="account-form-group">
              <label>Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Name and phone number"
                className="account-input"
              />
            </div>

            <div className="account-form-row">
              <div className="account-form-group">
                <label>Blood Type</label>
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  placeholder="e.g., O+, A-, B+"
                  className="account-input"
                />
              </div>
              <div className="account-form-group">
                <label>Medical Conditions</label>
                <input
                  type="text"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  placeholder="Any conditions to note"
                  className="account-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="account-save-container">
          <button className="account-save-btn" onClick={handleSave}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            Save Changes
          </button>
        </div>
      </main>

   

       <button className="fab">
              <AlertTriangle  />
            </button>

     
    </div>
  );
};

export default AccountPage;