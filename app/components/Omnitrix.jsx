import {useRef , useState , useEffect} from 'react'
import gsap from 'gsap'
import RingOfAlien from './RingOfAlien'
import {useAlien} from '../context/AlienContext.jsx'
import { useWatch } from '../context/WatchContext';
export default function Omnitrix (){
const {count} = useAlien();
const onScreenRef = useRef(false);
const offScreenRef = useRef(false);
const resetScreenRef = useRef(false);
const screenRef = useRef(false);


const stateOnRef = useRef()
const  [flickerAnime , setFlickerAnime ] = useState(false)
const {watchState , setWatchState} = useWatch()
useEffect(() => {
  const interval = setInterval(() => {
    setFlickerAnime(prev => !prev); // ✅ functional form
  }, 500);

  return () => clearInterval(interval); // ✅ cleanup
}, []);
const screen = {
    on : <div className=''>
            <img ref={onScreenRef} className="fixed max-sm:scale-[2]  w-[17.5vw] max-sm:translate-y-[37vh]  top-[15.66vw] right-[43.5vw] z-[200] duration-700 transition-opacity" src="/WatchParts/screen.svg"/>
    </div>,

    off : <div className=''>
             <img ref={offScreenRef} className="fixed w-[17.5vw] max-sm:scale-[2] max-sm:translate-y-[37vh]  top-[15.7vw] right-[43.5vw] z-[200] duration-700 transition-opacity" src="/WatchParts/screenreset.svg"/> 
    </div> ,

    reset :<div>
        <img ref={resetScreenRef} className="fixed w-[17.5vw] max-sm:scale-[2] max-sm:translate-y-[37vh]  top-[15.7vw] right-[43.5vw] z-[200] duration-700 transition-opacity" src="/WatchParts/screenred.svg"/> 
    </div> ,
    
       
}
let currentScreen;
useEffect(()=>{
switch (watchState) {
  case 'ON':
    offScreenRef.current.style.opacity = '0'

    break;
  case 'OFF':
     offScreenRef.current.style.opacity = 1
    onScreenRef.current.style.opacity = 1

    break;
  case 'RESET':
    offScreenRef.current.style.opacity = '0'
    onScreenRef.current.style.opacity = '0'


    break;
  default:
    currentScreen = null;
}
},[watchState])



useEffect(()=>{
    gsap.to('.base',{
        rotate : 14*count,
      
    })
},[count])
const watchfaceEnterAnime = ()=>{

   gsap.to([onScreenRef.current , offScreenRef.current , resetScreenRef.current , screenRef.current] , {
    rotate : 270,
    duration : 1,

    ease : 'power1.inOut'
   })
      gsap.to('.base' , {
    rotate : -180,
    duration : 1,

    ease : 'power1.inOut'
   })
}
const watchfaceLeaveAnime = ()=>{


    gsap.to([onScreenRef.current , offScreenRef.current , resetScreenRef.current , screenRef.current],{
        rotate : 0 , 
        duration : 1 , 
        ease : 'power1.inOut'
    })

          gsap.to('.base' , {
    rotate : 0,
    duration : 1,

    ease : 'power1.inOut'
   })

}
const handleWatchClick = ()=>{
    if(watchState === 'ON'){
        setWatchState('OFF')
       
    }
       if(watchState === 'OFF'){
        setWatchState('ON')
    }
}
useEffect(()=>{
    if(watchState === 'BATTERY-LOW'){

    }
})
    return <div className="text-white ">
        <div onClick={handleWatchClick} onMouseLeave={watchfaceLeaveAnime} onMouseEnter={watchfaceEnterAnime}  className="">
            <img  className="base  fixed max-sm:scale-[2]  max-sm:translate-y-[37vh] top-[11.1vw] right-[39.25vw]  w-[26vw] lg:top-[11.38vw] lg:right-[39.35vw] z-[200]" src="/WatchParts/base.svg"/>
            <img  ref={screenRef} className="fixed max-sm:scale-[2]  max-sm:translate-y-[36.8vh]  w-[18vw] pointer-events-none top-[15.3vw] right-[43.3vw] z-[200]" src="/WatchParts/layer2.svg"/>

        {screen.reset}
        {screen.on}
        {screen.off}
            <img  className="pointer-events-none max-sm:scale-[2] w-[18vw] lg:w-[19.5vw] max-sm:translate-y-[37.090vh]  top-[15.1vw] right-[43.20vw] fixed scale-91 lg:top-[14.70vw] lg:right-[42.50vw] z-[200]" src="/WatchParts/ring.svg"/>
            <RingOfAlien/>      



        </div>
    </div>
}