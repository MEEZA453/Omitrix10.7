'use client'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline()

    // Counter animation: count from 0 to 100
    let count = { value: 0 }
    tl.to(count, {
      value: 100,
      duration: 4,
      ease: 'power3.In',
      onUpdate: () => {
        console.log('Updating')
        const rounded = Math.round(count.value)
        document.getElementById('loading-count').textContent = `${rounded}%`
      },
    }, 'a') // 'a' is a label so this happens in parallel

    // Rotation animations
    tl.to('.skelbase', {
      rotate: '360deg',
      duration: 2,
    }, 'a')

    tl.to('.screen', {
      rotate: '-360deg',
      duration: 4,
    }, 'a')

    // Fade-out animations
    tl.to('.skelbase', {
      opacity: 0,
      duration: 1,
    }, 'b')

    tl.to('.screen', {
      opacity: 0,
      duration: 1,
    }, 'b')
  }, [])

  return (
    <div className="h-screen duration-500 w-screen bg-white max-sm:-translate-x-[0.1vw] fixed top-0 z-[300]">
      <img
        className="skelbase fixed max-sm:scale-[2] rotate-[-720deg] max-sm:translate-y-[37vh] top-[11.1vw] right-[39vw] w-[26.1vw] lg:top-[11.38vw] lg:right-[39.25vw] z-[250]"
        src="/WatchParts/skelbase.svg"
      />
      <img
        className="screen fixed rotate-[720deg] max-sm:scale-[2] w-[15.4vw] max-sm:translate-y-[37vh] top-[15.5vw] right-[44.70vw] z-[200] duration-700 transition-opacity"
        src="/WatchParts/skelscreen.svg"
      />
      <h1 id="loading-count" className="fixed lg:left-[45.4vw] opacity-50 lg:top-[75%] top-[70%] left-[42.5%] text-2xl font-bold">
        0%
      </h1>
    </div>
  )
}
