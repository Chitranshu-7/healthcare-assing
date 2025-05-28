import React from 'react';
import '../styles/ActivityFeed.css';

const activityData = [
  30, 60, 40, 80, 50, 70, 60 // sample bar heights
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="activity-subtext">3 appointments on this week</span>
      </div>

      <div className="bar-chart">
        {["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"].map((day, index) => (
          <div className="bar-group" key={index}>
            <div className="bar-wrapper">
              <div className="bar-fill" style={{ height: `${activityData[index]}px` }}></div>
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
