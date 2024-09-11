import React, { useEffect } from 'react';
import './GalaxyButton.css';

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const GalaxyButton = () => {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p) => {
      p.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
      `);
    });
  }, []);

  return (
    <div className="galaxy-button">
      <button>
        <span className="spark"></span>
        <span className="backdrop"></span>
        <span className="galaxy__container">
          <span className="star star--static"></span>
          <span className="star star--static"></span>
          <span className="star star--static"></span>
          <span className="star star--static"></span>
        </span>
        <span className="galaxy">
          <span className="galaxy__ring">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </span>
        </span>
        <span className="text">Explore</span>
      </button>
      <div className="bodydrop"></div>
    </div>
  );
};

export default GalaxyButton;
