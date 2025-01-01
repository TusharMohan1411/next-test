"use client"

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "motion/react"
import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'
import React, { useEffect, useRef, type RefObject } from 'react'

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0)

    const updateMousePosition = (event: MouseEvent) => {
        if (!to.current) {
            console.log('error')
            return
        };
        const { top, left } = to.current.getBoundingClientRect();
        const relativeX = event.x - left;
        const relativeY = event.y - top;
        mouseX.set(relativeX);
        mouseY.set(relativeY);

        // console.log("Mouse X:", relativeX, "Mouse Y:", relativeY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [updateMousePosition])

    return [mouseX, mouseY];
}

function CallToAction() {

    const sectionRef = useRef<HTMLElement>(null)
    const borderedDivRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const backgroundPositionY = useTransform(
        scrollYProgress,
        [0, 1],
        [-300, 300]
    );

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef as RefObject<HTMLElement>);

    const maskImage = useMotionTemplate`radial-gradient(80% 80% at ${mouseX}px ${mouseY}px, black 5%, rgba(0, 0, 0, 0.05) 60%, transparent 95%)`

    return (
        <section className='py-20 md:py-24' ref={sectionRef}>
            <div className='container'>
                <motion.div
                    ref={borderedDivRef}
                    className='border border-white/15 py-24 rounded-xl overflow-hidden relative group'
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${ASSETS.stars.src})`,
                        backgroundPositionY,
                    }}
                    animate={{
                        backgroundPositionX: ASSETS.stars.width,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear",
                    }}
                >
                    <div
                        className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700'
                        style={{
                            backgroundImage: `url(${ASSETS.grid.src})`
                        }}>
                    </div>
                    <motion.div
                        className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700'
                        style={{
                            maskImage: maskImage,
                            backgroundImage: `url(${ASSETS.grid.src})`,
                            maskRepeat: "no-repeat",
                        }}
                    />
                    <div className='relative'>
                        <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>
                            AI-driven SEO for Everyone
                        </h2>
                        <p className='text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tighter'>
                            Achieve clear, impactful results without the complexity.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Button />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CallToAction