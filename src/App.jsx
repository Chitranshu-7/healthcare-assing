import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardSection from './components/DashboardSection';
import RightPanel from './components/RightPanel';
import { Stethoscope } from 'lucide-react'; 
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Healthcare Logo Button */}
      <div className="hamburger" onClick={toggleSidebar}>
        <Stethoscope size={26} color="#0f4b93" />
      </div>

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="content-section">
        <section className="main-content">
          <DashboardSection />
        </section>
        <section className="right-panel">
          <RightPanel />
        </section>
      </main>
    </div>
  );
}

export default App;
