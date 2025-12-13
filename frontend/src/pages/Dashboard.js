import React from 'react';
import './Dashboard.css';
import { Phone, BookOpen,  Flame, Heart, Car, Droplet, Shield, Zap, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      

    

      {/* Main Content */}
      <main className="main-content">
        {/* Title Section */}
        <div className="title-section">
          
          <p className="subtitle">
            Quick access to emergency guides, first aid instructions, and immediate help
          </p>
        </div>

        {/* Emergency Cards Grid */}
        <div className="emergency-grid">
          {/* Fire Emergency */}
          <div className="emergency-card">
            <div className="emergency-icon icon-fire">
              <Flame />
            </div>
            <h3 className="card-title">Fire Emergency</h3>
            <p className="card-description">
              Fire outbreak, smoke, or burning hazards
            </p>
            <button className="get-help-button button-red">
              Get Help
            </button>
          </div>

          {/* Medical Emergency */}
          <div className="emergency-card">
            <div className="emergency-icon icon-medical">
              <Heart />
            </div>
            <h3 className="card-title">Medical Emergency</h3>
            <p className="card-description">
              Heart attack, stroke, or severe injury
            </p>
            <button className="get-help-button button-blue">
              Get Help
            </button>
          </div>

          {/* Accident */}
          <div className="emergency-card">
            <div className="emergency-icon icon-accident">
              <Car />
            </div>
            <h3 className="card-title">Accident</h3>
            <p className="card-description">
              Vehicle collision or road accident
            </p>
            <button className="get-help-button button-yellow">
              Get Help
            </button>
          </div>

          {/* Flood/Water */}
          <div className="emergency-card">
            <div className="emergency-icon icon-water">
              <Droplet />
            </div>
            <h3 className="card-title">Flood/Water</h3>
            <p className="card-description">
              Flooding, water damage, or drowning
            </p>
            <button className="get-help-button button-blue">
              Get Help
            </button>
          </div>

          {/* Security Threat */}
          <div className="emergency-card">
            <div className="emergency-icon icon-security">
              <Shield />
            </div>
            <h3 className="card-title">Security Threat</h3>
            <p className="card-description">
              Theft, violence, or criminal activity
            </p>
            <button className="get-help-button button-red">
              Get Help
            </button>
          </div>

          {/* Electrical Hazard */}
          <div className="emergency-card">
            <div className="emergency-icon icon-electrical">
              <Zap />
            </div>
            <h3 className="card-title">Electrical Hazard</h3>
            <p className="card-description">
              Power outage, electrical fire, or shock
            </p>
            <button className="get-help-button button-yellow">
              Get Help
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Emergency Numbers */}
          <div className="info-card info-card-blue">
            <div className="info-card-header">
              <Phone />
              <h2 className="info-card-title">Emergency Numbers</h2>
            </div>
            <p className="info-card-description">
              Quick access to local emergency services and hospitals
            </p>
            <button className="info-card-button">
              View Numbers
            </button>
          </div>

          {/* First Aid Library */}
          <div className="info-card info-card-red">
            <div className="info-card-header">
              <BookOpen />
              <h2 className="info-card-title">First Aid Library</h2>
            </div>
            <p className="info-card-description">
              Step-by-step first aid guides with visual instructions
            </p>
            <button className="info-card-button">
              Browse Guides
            </button>
          </div>
        </div>
      </main>

      {/* Emergency Float Button */}
      <button className="emergency-float-button">
        <AlertTriangle />
      </button>

      
    </div>
  );
};

export default Dashboard;