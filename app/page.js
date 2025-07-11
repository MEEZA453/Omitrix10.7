'use client';

import { useEffect, useState } from 'react';
import UpperNav from './components/navber/Upper.jsx';
import LowerNav from './components/navber/Lower.jsx';
import Omnitrix from './components/Omnitrix.jsx';
import StoryOfAlien from './components/StoryofAlien.jsx';
import { AlienProvider } from './context/AlienContext.jsx';
import { WatchProvider } from './context/WatchContext.jsx';
import Reseting from './components/Reseting.jsx';
import Control from './components/navber/ControlPenel/Control.jsx';
import ArrowTransition from './components/ArrowTransition.jsx';
import Loading from './components/Loading.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // fade starts
      setTimeout(() => setHideLoading(true), 500); // wait for opacity transition to finish before removing
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <WatchProvider>
      <AlienProvider>
        <div>
          {!hideLoading && (
            <div
              className={`fixed z-[300] bg-black transition-opacity duration-1000 ${
                loading ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Loading />
            </div>
          )}

          <Omnitrix />
          {/* <ArrowTransition /> */}
          <Reseting />
          <Control />
          <StoryOfAlien />
        </div>
      </AlienProvider>
    </WatchProvider>
  );
}
