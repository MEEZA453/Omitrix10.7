'use client';
import { useEffect, useRef } from 'react';
import { useWatch } from '../context/WatchContext';

export default function Reseting() {
  const { watchState , setWatchState } = useWatch();
  const styleRef = useRef();
  const textRef = useRef();

  useEffect(() => {

    if (watchState === 'RESET') {
      styleRef.current.style.opacity = 1;
              // textRef.current.style.opacity = 1
      setTimeout(()=>{
        window.scrollTo(0 , 0);
        setWatchState('OFF')
      },1000)
    } else if( watchState === 'ON') {
      setTimeout(()=>{

        styleRef.current.style.opacity = 0;
        // textRef.current.style.opacity = 0
      },500)
    }
  }, [watchState]); // only run when watchState changes

  return (
    <div className='fixed top-0 z-[150]'>
      {/* <p   ref={textRef}  className='fixed top-[30vw] z-[160] left-[28vw]'>tap the watch to choose alien</p> */}
    
       <div  src='/image11.webp'
      ref={styleRef}
      className="bg-white object-cover object-right duration-1000 transition-opacity pointer-events-none h-screen w-screen "
    />
    </div>
   
  );
}
