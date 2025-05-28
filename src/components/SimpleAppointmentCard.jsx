import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="appointment-card">
      <div className="icon-top-right">{icon}</div>
      <div className="appointment-content">
        <p className="appointment-title">{title}</p>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
