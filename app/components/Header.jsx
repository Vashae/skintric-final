import React from 'react' 
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex h-[100px] py-3 mb-3 flex-row justify-between'>
      <div className='ml-2 flex text-sm scale-75'> 
        <Link href='/'><p className='font-bold'>SKINSTRIC</p></Link>
       <p className='pl-3 flex text-sm text-center '>[ INTRO ]</p> </div>
       <div><Button className='text-sm mr-2 scale-75 bg-black text-white' variant='ghost' >Enter Code</Button></div>
       </div>

  )
}
