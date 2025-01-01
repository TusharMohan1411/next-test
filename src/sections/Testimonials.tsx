"use client"

import { AVATAR } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react"

function Testimonials() {
    const testimonials = [
        {
            text: "“This product has completely transformed how I manage my projects and deadlines”",
            name: "Sophia Perez",
            title: "Director @ Quantum",
            avatarImg: AVATAR.avatar1,
        },
        {
            text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
            name: "Jamie Lee",
            title: "Founder @ Pulse",
            avatarImg: AVATAR.avatar2,
        },
        {
            text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
            name: "Alisa Hester",
            title: "Product @ Innovate",
            avatarImg: AVATAR.avatar3,
        },
        {
            text: "“Our team's productivity has increased significantly since we started using this tool”",
            name: "Alec Whitten",
            title: "CTO @ Tech Solutions",
            avatarImg: AVATAR.avatar4,
        },
    ];

    return (
        <section className='py-20 md:py-24'>
            <div className="container">
                <h2 className='text-5xl md:text-6xl text-center tracking-tighter font-medium'>
                    Beyond Expectations.
                </h2>
                <p className='text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto '>
                    Our revolutionary AI SEO tools have transformed our clients' strategies.
                </p>
                <div className='flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                    <motion.div
                        className='flex gap-5 flex-none -translate-x-1/2'
                        initial={{ translateX: "0" }}
                        animate={{ translateX: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className='border border-white/15 p-6 md:p-10 rounded-lg bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-md flex-none'
                            >
                                <div className='text-lg md:text-xl tracking-tight'>{testimonial.text}</div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:rounded-lg after:mix-blend-soft-light before:absolute before:inset-0 before:content-[""] before:border before:border-white/20 before:z-10 before:rounded-lg'>
                                        <Image
                                            src={testimonial.avatarImg}
                                            alt='Avatar'
                                            className='h-11 w-11 rounded-lg grayscale ' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>{testimonial.name}</div>
                                        <div className='text-white/50 text-sm'>{testimonial.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                    <motion.div
                        className='flex gap-5 flex-none -translate-x-1/2'
                        initial={{ translateX: "-50%" }}
                        animate={{ translateX: "0" }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className='border border-white/15 p-6 md:p-10 rounded-lg bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-md flex-none'
                            >
                                <div className='text-lg md:text-xl tracking-tight'>{testimonial.text}</div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:rounded-lg after:mix-blend-soft-light before:absolute before:inset-0 before:content-[""] before:border before:border-white/20 before:z-10 before:rounded-lg'>
                                        <Image
                                            src={testimonial.avatarImg}
                                            alt='Avatar'
                                            className='h-11 w-11 rounded-lg grayscale ' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>{testimonial.name}</div>
                                        <div className='text-white/50 text-sm'>{testimonial.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Testimonials