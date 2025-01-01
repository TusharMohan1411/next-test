import React from 'react'
import Image from 'next/image'
import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'

export function Header() {

    return (
        <header className='py-4 border-b border-white/15 md:border-none'>
            <div className="container">
                <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto'>
                    <div>
                        <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                            <Image src={ASSETS.logo} alt="Logo" height={40} width={40} priority />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-sm'>
                            <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
                        </nav>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button />
                        <Image src={ASSETS.menuIcon} alt="Logo" height={40} width={40} priority className='md:hidden' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header