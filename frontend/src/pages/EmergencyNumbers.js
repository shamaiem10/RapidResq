import React from 'react';
import './EmergencyNumbers.css';
import { Phone,Clock, MapPin, AlertTriangle } from 'lucide-react';

const EmergencyNumbers = () => {
  return (
    <div className="emergency-numbers-page">
   

      {/* Main Content */}
      <main className="main-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="page-title">Emergency Numbers</h1>
          <p className="page-subtitle">
            Quick access to emergency services in your area
          </p>
        </div>

        {/* Emergency Services Section */}
        <section className="services-section">
          <h2 className="section-title">Emergency Services</h2>

          <div className="services-grid">
            {/* Emergency Services Card */}
            <div className="service-card">
              <div className="card-header">
                <div>
                  <h3 className="service-title">Emergency Services</h3>
                  <p className="service-description">Police, Fire, Ambulance</p>
                </div>
                <span className="priority-badge">HIGH</span>
              </div>
              <div className="card-footer">
                <div className="availability">
                  <Clock />
                  <span>24/7</span>
                </div>
                <button className="call-button">
                  <Phone />
                  <span>911</span>
                </button>
              </div>
            </div>

            {/* Police Department Card */}
            <div className="service-card">
              <div className="card-header">
                <div>
                  <h3 className="service-title">Police Department</h3>
                  <p className="service-description">Local police emergency line</p>
                </div>
                <span className="priority-badge">HIGH</span>
              </div>
              <div className="card-footer">
                <div className="availability">
                  <Clock />
                  <span>24/7</span>
                </div>
                <button className="call-button">
                  <Phone />
                  <span>101</span>
                </button>
              </div>
            </div>

            {/* Fire Department Card */}
            <div className="service-card">
              <div className="card-header">
                <div>
                  <h3 className="service-title">Fire Department</h3>
                  <p className="service-description">Fire emergency and rescue</p>
                </div>
                <span className="priority-badge">HIGH</span>
              </div>
              <div className="card-footer">
                <div className="availability">
                  <Clock />
                  <span>24/7</span>
                </div>
                <button className="call-button">
                  <Phone />
                  <span>102</span>
                </button>
              </div>
            </div>

            {/* Ambulance Service Card */}
            <div className="service-card">
              <div className="card-header">
                <div>
                  <h3 className="service-title">Ambulance Service</h3>
                  <p className="service-description">Medical emergency response</p>
                </div>
                <span className="priority-badge">HIGH</span>
              </div>
              <div className="card-footer">
                <div className="availability">
                  <Clock />
                  <span>24/7</span>
                </div>
                <button className="call-button">
                  <Phone />
                  <span>103</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Hospitals Section */}
        <section className="hospitals-section">
          <h2 className="section-title">Nearby Hospitals</h2>

          <div className="hospitals-list">
            {/* City General Hospital */}
            <div className="hospital-card">
              <div className="hospital-info">
                <h3 className="hospital-name">City General Hospital</h3>
                <div className="hospital-details">
                  <div className="hospital-address">
                    <MapPin />
                    <span>123 Medical Center Dr</span>
                    <span className="distance">• 2.1 km</span>
                  </div>
                  <div className="hospital-availability">
                    <Clock />
                    <span>24/7</span>
                  </div>
                </div>
              </div>
              <button className="hospital-call-button">
                <Phone />
                <span>Call</span>
              </button>
            </div>

            {/* Emergency Medical Center */}
            <div className="hospital-card">
              <div className="hospital-info">
                <h3 className="hospital-name">Emergency Medical Center</h3>
                <div className="hospital-details">
                  <div className="hospital-address">
                    <MapPin />
                    <span>456 Health Plaza</span>
                    <span className="distance">• 3.5 km</span>
                  </div>
                  <div className="hospital-availability">
                    <Clock />
                    <span>24/7</span>
                  </div>
                </div>
              </div>
              <button className="hospital-call-button">
                <Phone />
                <span>Call</span>
              </button>
            </div>

            {/* Regional Trauma Center */}
            <div className="hospital-card">
              <div className="hospital-info">
                <h3 className="hospital-name">Regional Trauma Center</h3>
                <div className="hospital-details">
                  <div className="hospital-address">
                    <MapPin />
                    <span>789 Care Way</span>
                    <span className="distance">• 4.2 km</span>
                  </div>
                  <div className="hospital-availability">
                    <Clock />
                    <span>24/7</span>
                  </div>
                </div>
              </div>
              <button className="hospital-call-button">
                <Phone />
                <span>Call</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Emergency Float Button */}
      <button className="emergency-float-button">
        <AlertTriangle />
      </button>

      
    </div>
  );
};

export default EmergencyNumbers;