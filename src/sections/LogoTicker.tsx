'use client';

import { LOGOS } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

function LogoTicker() {
    return (
        <section className='py-20 md:py-24'>
            <div className="container">
                <div className='flex flex-col gap-8 md:flex-row items-center md:gap-5'>
                    <div className='flex-1 md:flex-none'>
                        <h2>Trusted by top innovative teams</h2>
                    </div>
                    <div className='flex w-[90%] md:w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                        <motion.div
                            initial={{ translateX: "0" }}
                            animate={{ translateX: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear"
                            }}
                            className='flex flex-none gap-14 -translate-x-1/2'>
                            {LOGOS.map((logo, index) => (
                                <img src={logo.src} key={index} alt='image' className='h-8' />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LogoTicker