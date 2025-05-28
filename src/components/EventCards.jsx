import React from 'react';
import { Dumbbell } from 'lucide-react';
import '../styles/EventCards.css';
import teethImg from '../assets/Image/Teeth.png';

const EventCards = () => {
  return (
    <div className="event-cards-row">
      {/* Dentist Card */}
      <div className="event-card dentist-card">
        <div className="icon-box">
          <img
            src={teethImg}
            alt="Tooth Icon"
            className="event-icon-img"
          />
        </div>
        <div className="event-details">
          <h4>Dentist</h4>
          <p className="event-time">09:00–11:00</p>
          <p className="event-doctor">Dr. Cameron Williamson</p>
        </div>
      </div>

      {/* Physiotherapy Card */}
      <div className="event-card physio-card">
        <div className="icon-box light">
          <Dumbbell size={20} color="#5d5fef" />
        </div>
        <div className="event-details">
          <h4>Physiotherapy Appointment</h4>
          <p className="event-time">11:00–12:00</p>
          <p className="event-doctor">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
