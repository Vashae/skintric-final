import React, {useState} from 'react'
import Diamond from './diamond'



export default function Hero() {
    const [hoveredDiamond, setHoveredDiamond] = useState(null)
    const headingShift = hoveredDiamond === 'left'
    ?  '-translate-x-[20rem]'
    : 'translate-x-0';
    
  return (
    <>
    {/* Wrapper div for scaling mobile content */}
    <div className='max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6'>
        <Diamond/></div>
        </>
  )
}
