import { useEffect } from 'react'
import {useWatch} from '../context/WatchContext.jsx'
import gsap from 'gsap'
export default function ArrowTransition(){
const {watchState} = useWatch();

    return <div className={`fixed z-[140] right-[6vw] duration-1000 ${watchState === 'ON' ? 'top-[-100vw] opacity-100':'top-[140vh] opacity-0' }`}>
        <img src="/arrowtransition.svg" className="scale-[1.5]  "/>

    </div>
}