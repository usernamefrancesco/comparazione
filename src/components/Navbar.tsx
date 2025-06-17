import React from 'react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
    subsets: ['latin']
})
export default function Navbar() {
  return (
    <div className='p-2'>
 
            <h1 className={`${outfit.className} text-2xl font-semibold`}>Nexio</h1>
    
    </div>
  )
}
