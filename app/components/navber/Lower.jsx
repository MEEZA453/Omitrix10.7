'use client'
export default function LowerNav(){
    return <div className="fixed bottom-0 z-[500]">
        {/* <h3 className="fixed bottom-7 left-[45.7vw]">077</h3> */}
        <img src='/svg/lowernav.svg' className ='w-[100vw] hidden sm:block'/>
        <img src='/svg/smlowernav.svg' className ='w-[100vw] sm:hidden'/>

    </div>
}