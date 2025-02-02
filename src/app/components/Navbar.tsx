import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-around px-2'>
    <div className='flex align items-center gap-3 p-2'>
      <Image src="/Image/datafetch.jpg" alt="logo" width={40} height={40} />
      <h1 className='text-xl md:text-2xl lg:text-2xl font-bold hover:text-purple-600'>Dynamic Routing</h1>
      </div>
      <div className='flex justify-center align items-center gap-8'>
      <ul className='flex justify-start gap-4'>
        <li className='text-[20px] font-semibold md:font-bold lg:font-bold'><Link href="/">Home</Link></li>
        <li className='text-[20px] font-semibold md:font-bold lg:font-bold'><Link href="Concepts">Concepts</Link></li>
        
      </ul>
      </div>
    
    </div>
  )
}

export default Navbar
