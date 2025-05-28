import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';
import { saturdayAppointments, thursdayAppointments } from '../data/appointments';



const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-heading">The Upcoming Schedule</h3>

      <div className="schedule-block">
        <h4 className="day-title">On Thursday</h4>
        <div className="card-row">
          {thursdayAppointments.map((item, idx) => (
            <SimpleAppointmentCard key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className="schedule-block">
        <h4 className="day-title">On Saturday</h4>
        <div className="card-row">
          {saturdayAppointments.map((item, idx) => (
            <SimpleAppointmentCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
