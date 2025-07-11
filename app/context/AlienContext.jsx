'use client';

import { createContext, useContext, useEffect, useState, useRef } from 'react';

const AlienContext = createContext();

export function AlienProvider({ children }) {
  const [alien, setAlien] = useState([
    { name: 'a', state1: '/alien/a1.png', state2: '/alien/a2.png' },
    { name: 'b', state1: '/alien/b1.png', state2: '/alien/b2.png' },
    { name: 'c', state1: '/alien/c1.png', state2: '/alien/c2.png' },
    { name: 'd', state1: '/alien/d1.png', state2: '/alien/d2.png' },
    { name: 'e', state1: '/alien/e1.png', state2: '/alien/e2.png' },
    { name: 'f', state1: '/alien/f1.png', state2: '/alien/f2.png' },
    { name: 'g', state1: '/alien/g1.png', state2: '/alien/g2.png' },
    { name: 'h', state1: '/alien/h1.png', state2: '/alien/h2.png' },
  ]);

  const [count, setCount] = useState(0);
  const max = alien.length;

  const lastY = useRef(0);
  const deltaY = useRef(0);
  const threshold = 500;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      deltaY.current += currentY - lastY.current;
      lastY.current = currentY;

      if (deltaY.current <= -threshold) {
        setCount((prev) => (prev - 1 + max) % max); // scroll up
        deltaY.current = 0;
      } else if (deltaY.current >= threshold) {
        setCount((prev) => (prev + 1) % max); // scroll down
        deltaY.current = 0;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [max]);

  useEffect(() => {
    setAlien((prevAliens) =>
      prevAliens.map((alien, index) => ({
        ...alien,
        isOpen: index === count,
      }))
    );
  }, [count]);

  return (
    <AlienContext.Provider value={{ alien, count, setCount }}>
      {children}
    </AlienContext.Provider>
  );
}

export function useAlien() {
  return useContext(AlienContext);
}
