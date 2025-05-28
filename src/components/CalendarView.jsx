import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/CalendarView.css';

const weekData = [
  { day: 'Mon', date: 25, times: [] },
  { day: 'Tues', date: 26, times: ['09:00'] },
  { day: 'Wed', date: 27, times: ['11:00'] },
  { day: 'Thur', date: 28, times: ['09:00', '11:00'] },
  { day: 'Fri', date: 29, times: [] },
  { day: 'Sat', date: 30, times: ['14:00'] },
  { day: 'Sun', date: 31, times: [] },
];

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <ChevronLeft size={20} className="nav-icon" />
        <h3>October 2021</h3>
        <ChevronRight size={20} className="nav-icon" />
      </div>

      <div className="calendar-grid">
        {weekData.map((day, idx) => (
          <div key={idx} className="calendar-day">
            <div className="day-label">{day.day}</div>
            <div className="day-date">{day.date}</div>
            <div className="day-times">
              {day.times.map((time, index) => (
                <span
                  key={index}
                  className={`time-badge ${time === '11:00' ? 'highlight' : ''}`}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
