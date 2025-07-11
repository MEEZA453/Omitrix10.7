'use client';
import { useEffect, useRef } from 'react';
import { useWatch } from '../context/WatchContext';

export default function Reseting() {
  const { watchState , setWatchState } = useWatch();
  const styleRef = useRef();

  useEffect(() => {

    if (watchState === 'RESET') {
      styleRef.current.style.opacity = 1;
      setTimeout(()=>{
        window.scrollTo(0 , 0);
      },1000)
    } else if( watchState === 'ON') {
      setTimeout(()=>{

        styleRef.current.style.opacity = 0.1;
      },100)
    }
  }, [watchState]); // only run when watchState changes

  return (
    <div
      ref={styleRef}
      className="bg-white  duration-500 pointer-events-none h-screen w-screen fixed top-0 z-[150]"
    />
  );
}
