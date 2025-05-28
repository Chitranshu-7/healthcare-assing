import Sidebar from './components/Sidebar';
import DashboardSection from './components/DashboardSection';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
  return (
    <div className='app-container'>
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
