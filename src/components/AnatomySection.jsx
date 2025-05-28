import React from 'react';
// import humanBody from '../assets/Image/human-body.png';
import humanBody from '../assets/Image/Human_body.png'
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-wrapper">
        <img src={humanBody} alt="Human Anatomy" className="anatomy-img" />
        <div className="indicator heart">Healthy Heart</div>
        <div className="indicator leg">Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
