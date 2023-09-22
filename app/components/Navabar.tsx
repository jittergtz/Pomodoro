import React from 'react'
import Logo from './Logo'
import { Button } from '@nextui-org/button'

function Navabar() {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex gap-2'>
      <div>IN TIME</div>
      <Logo/>
      </div>
 
   
    </nav>
  )
}

export default Navabar