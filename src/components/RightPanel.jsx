import React from 'react';
import { Plus, User } from 'lucide-react'; // Lucide icons
import '../styles/RightPanel.css';
import CalendarView from './CalendarView';
import EventCards from './EventCards';
import UpcomingSchedule from './UpcomingSchedule';
const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="right-top-icons">
        <div className="avatar-icon">
          <User size={28} color="#5d5fef" />
        </div>
        <button className="add-button">
          <Plus size={20} color="#ffffff" />
        </button>
      </div>

<CalendarView/>

<EventCards/>

<UpcomingSchedule/>
         
    </div>
  );
};

export default RightPanel;
