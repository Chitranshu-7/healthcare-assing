import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';
import Header from './Header';

const DashboardSection = () => {
  return (
    <div className="dashboard-container">
          <Header />
      <h2 className="page-title">Dashboard</h2>

      <div className="dashboard-top">
       
        <div className="anatomy-section">
          <AnatomySection />
        </div>
        <div className="health-cards-section">
          <HealthStatusCards />
        </div>
      </div>

      <div className="dashboard-activity">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardSection;
