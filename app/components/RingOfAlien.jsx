'use client';

import { useState, useEffect } from 'react';
import { useAlien } from '../context/AlienContext';
import { useWatch } from '../context/WatchContext';

export default function RingOfAlien({ totalPoints = 8, dotVw = 10.4, alienVw = 13.3 }) {
  const { alien } = useAlien();
  const { watchState } = useWatch();

  const [dimensions, setDimensions] = useState({ dotRadius: 0, alienRadius: 0 });

  useEffect(() => {
    function updateRadius() {
      const vw = window.innerWidth / 100;
      const isMobile = window.innerWidth < 768;

      const currentDotVw = isMobile ? 22 : dotVw;
      const currentAlienVw = isMobile ? 30 : alienVw;

      setDimensions({
        dotRadius: currentDotVw * vw,
        alienRadius: currentAlienVw * vw,
      });
    }

    updateRadius(); // Initial run
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [dotVw, alienVw]);

  return (
    <div
      style={{ opacity: watchState === 'ON' ? 1 : 0 }}
      className="fixed w-[16vw] top-[38vh] z-[400] right-[58vw] lg:right-[46.9vw] duration-300 lg:top-[13.9vw] h-[15vw] rounded-full mx-auto"
    >
      {alien.map((img, i) => {
        const angle = (2 * Math.PI * i) / totalPoints;

        const alienX = dimensions.alienRadius + dimensions.alienRadius * Math.cos(angle);
        const alienY = dimensions.alienRadius + dimensions.alienRadius * Math.sin(angle);

        const dotX = dimensions.dotRadius + dimensions.dotRadius * Math.cos(angle);
        const dotY = dimensions.dotRadius + dimensions.dotRadius * Math.sin(angle);

        return (
          <div key={img.name}>
            {/* Inactive dot */}
            <div
              className="lg:w-2 w-[5px] opacity-75 lg:h-2 h-[5px] bg-black z-[200] rounded-full absolute"
              style={{
                opacity: img.isOpen ? 0 : 1,
                left: `${dotX}px`,
                top: `${dotY}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Active dot */}
            <div
              className="lg:w-2 w-[5px] opacity-75 lg:h-2 h-[5px] bg-[#c3ff00] z-[200] rounded-full absolute"
              style={{
                opacity: img.isOpen ? 1 : 0,
                left: `${dotX}px`,
                top: `${dotY}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />

            <div className=" -translate-x-[9vw] opacity-75 lg:-translate-x-[2.6vw] -translate-y-[9vw] lg:-translate-y-[2.9vw]">
              {/* Inactive Alien Image */}
              <img
                src={img.state2}
                alt={img.name}
                className={`w-[7vw] lg:w-[2vw] z-[200] rounded-full absolute transition-opacity duration-300 ${
                  img.isOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  left: `${alienX}px`,
                  top: `${alienY}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Active Alien Image */}
              <img
                src={img.state1}
                alt={img.name}
                className={`w-[7vw] lg:w-[2vw] z-[200] rounded-full absolute transition-opacity duration-300 ${
                  img.isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${alienX}px`,
                  top: `${alienY}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
