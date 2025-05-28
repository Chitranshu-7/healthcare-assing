import React from 'react';
import {
  LayoutDashboard,
  Clock,
  Calendar,
  CalendarClock,
  BarChart2,
  MessageCircle,
  Headphones,
  Settings
} from 'lucide-react';

import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        Health<span>care</span><span className="dot">.</span>
      </h2>

      <div className="nav-section">
        <h4>General</h4>
        <ul>
          <li className="active"><LayoutDashboard size={18} /> Dashboard</li>
          <li><Clock size={18} /> History</li>
          <li><Calendar size={18} /> Calendar</li>
          <li><CalendarClock size={18} /> Appointments</li>
          <li><BarChart2 size={18} /> Statistics</li>
        </ul>
      </div>

      <div className="nav-section">
        <h4>Tools</h4>
        <ul>
          <li><MessageCircle size={18} /> Chat</li>
          <li><Headphones size={18} /> Support</li>
        </ul>
      </div>

      <div className="nav-section">
        <ul>
          <li><Settings size={18} /> Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
