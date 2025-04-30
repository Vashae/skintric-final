'use client'
import React, {useState} from 'react'
import Diamond from './diamond'



export default function Hero() {
    const [hoveredDiamond, setHoveredDiamond] = useState(null)
    const headingShift = hoveredDiamond === 'right'
    ?  '-translate-x-[20rem]'
    : 'translate-x-0';
    
  return (
    <>
    {/* Wrapper div for scaling mobile content */}
    <div className='max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6'>
      <div className='flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
      {/* Mobile Diamonds */}
      <div className='absolute inset-0 flex items-center justify-center lg:hidden'>
        <Diamond className='absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[420px] h-[420px]'
        dotted
        borderColorClass='border-black'/>
        <Diamond className='absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[280px] h-[280px]'
        dotted
        borderColorClass='border-black'/>
        </div>
        {/* HeadingShift */}
        <div className={`z-10 text-center transition-transform ease-in-out duration-700 ${headingShift}`}>
          <h1 className='text-[60px] lg:text-[100px] font-inter font-normal tracking-tighter leading-none'>Sophisticated
             <br/>
             <span className={`block transition-transform duration-700 ease-in-out ${hoveredDiamond === 'right' ? '-translate-x-[6rem]' : 'translate-x-0'}`}> skincare </span> 
             </h1>
        </div>
        {/* Mobile Text */}
        </div>
        </div> 
        </>
  )
}