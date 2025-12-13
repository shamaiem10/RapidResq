import React from 'react';
import './FirstAidLibrary.css';
import {  BookOpen, Heart, Clock, PlayCircle, AlertCircle, Droplet, Scissors, Activity, AlertTriangle } from 'lucide-react';

const FirstAidLibrary = () => {
  return (
    <div className="first-aid-library-page">
     

      {/* Main Content */}
      <main className="main-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="page-title">First Aid Library</h1>
          <p className="page-subtitle">
            Step-by-step first aid guides with visual instructions and audio guidance
          </p>
        </div>

        {/* Critical Life-Saving Skills Section */}
        <section className="critical-section">
          <div className="section-header">
            <AlertCircle className="section-icon" />
            <h2 className="section-title">Critical Life-Saving Skills</h2>
          </div>

          <div className="critical-grid">
            {/* CPR Card */}
            <div className="critical-card">
              <div className="critical-card-header">
                <div className="critical-card-info">
                  <div className="critical-icon-container icon-red">
                    <Heart />
                  </div>
                  <div>
                    <h3 className="critical-card-title">CPR (Cardiopulmonary Resuscitation)</h3>
                    <p className="critical-card-description">Life-saving technique for cardiac arrest</p>
                  </div>
                </div>
                <span className="critical-badge">Critical</span>
              </div>
              <div className="critical-card-meta">
                <div className="meta-item">
                  <Clock />
                  <span>5-10 min</span>
                </div>
                <div className="meta-item">
                  <BookOpen />
                  <span>5 steps</span>
                </div>
              </div>
              <div className="critical-card-actions">
                <button className="read-guide-button">
                  <BookOpen />
                  <span>Read Guide</span>
                </button>
                <button className="audio-button">
                  <PlayCircle />
                  <span>Audio</span>
                </button>
              </div>
            </div>

            {/* Choking Relief Card */}
            <div className="critical-card">
              <div className="critical-card-header">
                <div className="critical-card-info">
                  <div className="critical-icon-container icon-red-alert">
                    <AlertCircle />
                  </div>
                  <div>
                    <h3 className="critical-card-title">Choking Relief</h3>
                    <p className="critical-card-description">Heimlich maneuver for blocked airways</p>
                  </div>
                </div>
                <span className="critical-badge">Critical</span>
              </div>
              <div className="critical-card-meta">
                <div className="meta-item">
                  <Clock />
                  <span>2-3 min</span>
                </div>
                <div className="meta-item">
                  <BookOpen />
                  <span>4 steps</span>
                </div>
              </div>
              <div className="critical-card-actions">
                <button className="read-guide-button">
                  <BookOpen />
                  <span>Read Guide</span>
                </button>
                <button className="audio-button">
                  <PlayCircle />
                  <span>Audio</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All First Aid Topics Section */}
        <section className="topics-section">
          <h2 className="section-title">All First Aid Topics</h2>

          <div className="topics-grid">
            {/* CPR Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-red">
                  <Heart />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">CPR (Cardiopulmonary Resuscitation)</h3>
                  <p className="topic-description">Life-saving technique for cardiac arrest</p>
                  <span className="topic-badge badge-critical">Critical</span>
                </div>
              </div>
              <span className="topic-duration">5-10 min</span>
            </div>

            {/* Choking Relief Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-red-alert">
                  <AlertCircle />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">Choking Relief</h3>
                  <p className="topic-description">Heimlich maneuver for blocked airways</p>
                  <span className="topic-badge badge-critical">Critical</span>
                </div>
              </div>
              <span className="topic-duration">2-3 min</span>
            </div>

            {/* Severe Bleeding Control Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-blue">
                  <Droplet />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">Severe Bleeding Control</h3>
                  <p className="topic-description">How to stop heavy bleeding and apply pressure</p>
                  <span className="topic-badge badge-important">Important</span>
                </div>
              </div>
              <span className="topic-duration">3-5 min</span>
            </div>

            {/* Burn Treatment Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-blue-burn">
                  <Activity />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">Burn Treatment</h3>
                  <p className="topic-description">First aid for burns and scalds</p>
                  <span className="topic-badge badge-important">Important</span>
                </div>
              </div>
              <span className="topic-duration">5-8 min</span>
            </div>

            {/* Wound Cleaning & Dressing Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-green">
                  <Scissors />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">Wound Cleaning & Dressing</h3>
                  <p className="topic-description">Clean and dress minor cuts and wounds</p>
                  <span className="topic-badge badge-basic">Basic</span>
                </div>
              </div>
              <span className="topic-duration">3-5 min</span>
            </div>

            {/* Shock Management Topic */}
            <div className="topic-card">
              <div className="topic-card-header">
                <div className="topic-icon-wrapper icon-blue-shock">
                  <Activity />
                </div>
                <div className="topic-info">
                  <h3 className="topic-title">Shock Management</h3>
                  <p className="topic-description">Recognizing and treating shock symptoms</p>
                  <span className="topic-badge badge-important">Important</span>
                </div>
              </div>
              <span className="topic-duration">4-6 min</span>
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

export default FirstAidLibrary;