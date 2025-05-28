import React from 'react';
import { BrainCog, Smile, ShieldPlus } from 'lucide-react'; // Changed Tooth → Smile, Bone → ShieldPlus
import '../styles/HealthStatusCards.css';
import lungsImg from '../assets/Image/Lungs.png'
import teethImg from '../assets/Image/Teeth.png'
import boneImg from '../assets/Image/BOne.png'
import { ArrowRight } from 'lucide-react';



const cards = [
  {
    icon: lungsImg,
    title: 'Lungs',
    date: '26 Okt 2021',
    progress: 80,
    color: '#ff6b6b',
  },
  {
    icon: teethImg,
    title: 'Teeth',
    date: '26 Okt 2021',
    progress: 100,
    color: '#3dc984',
  },
  {
    icon: boneImg,
    title: 'Bone',
    date: '26 Okt 2021',
    progress: 60,
    color: '#f0a500',
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {cards.map((card, idx) => (
        <div className="health-card" key={idx}>
          <div className="card-header">
            <div className="icon">
              <img src={card.icon} alt={card.title} className="icon-img" />
            </div>
            <h4>{card.title}</h4>
          </div>
          <p className="card-date">Date: {card.date}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${card.progress}%`, backgroundColor: card.color }}
            ></div>
          </div>
        </div>
      ))}
<div className="detail-box">
  <p className="details-para">Details</p>
  <ArrowRight size={15} color="purple" />
</div>


    </div>

  );
};

export default HealthStatusCards;
