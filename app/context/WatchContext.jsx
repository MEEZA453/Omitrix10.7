'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useAlien } from './AlienContext';
const WatchContext = createContext();

export function WatchProvider({ children }) {
  const [watchState, setWatchState] = useState('OFF');
  useEffect(() => {
    const onScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 1;
      if (isBottom && watchState != 'RESET') {
        setWatchState('RESET');
        setTimeout(()=>{
          setWatchState('OFF')
        },1000)
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
console.log(watchState)
  return (
    <WatchContext.Provider value={{ watchState, setWatchState }}>
      {children}
    </WatchContext.Provider>
  );
}

export function useWatch() {
  return useContext(WatchContext);
}
