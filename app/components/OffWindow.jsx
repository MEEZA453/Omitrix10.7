import { useEffect } from "react"
import { useWatch } from "../context/WatchContext"
export default function OffWindow(){
const {watchState} = useWatch();
    
    return   <div style={watchState === "OFF" ? {opacity : 1} : {opacity : 0}} className="h-screen duration-500 transition-opacity pointer-events-none w-screen bg-[#ffffff] z-[160] fixed top-0">

    </div>
}