import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/assets/Workforce-Logo.png'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const NavbarComponent = () => {
  return (
    <>
    <div className='flex justify-around items-center h-[200px] bg-white' id='home'>
      <div>
        <Image 
        src={Logo}
        width={'200'}
        alt='Visa Solutions WorkForce Logo'
        />
      </div>
      <div className='flex flex-col items-center'>
        <Link href='#contact'>
      <Button color="danger" variant="ghost" size='lg' className='font-bold'>
        Contact Us!
      </Button>
        </Link>
      <p className='text-black font-bold'>
      ¡Live your American Dream!
      </p> 
      </div>
    </div>
    </>
  )
}

export default NavbarComponent