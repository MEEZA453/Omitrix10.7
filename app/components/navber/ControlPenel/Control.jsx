import LowerNav from "../Lower";
import UpperNav from "../Upper";

export default function Control (){
    return <div className="h-screen pointer-events-none w-screen fixed z-[500] top-0">
        
<UpperNav/>
<LowerNav/>
    </div>
}