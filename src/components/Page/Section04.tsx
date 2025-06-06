import React, { useEffect, useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import Video from '../../assets/video/coding.mp4'

interface Sec04Props {
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const text = `사람 간의
REPOSITORY를 만드는
개발자`

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const charVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 20,
        },
    },
}

const Section04: React.FC<Sec04Props> = ({ setDark }) => {
    const refSection = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setDark(true)
                else setDark(false)
            },
            { root: null, threshold: 0.2 }
        )
        if (refSection.current) observer.observe(refSection.current)
        return () => {
            if (refSection.current) observer.unobserve(refSection.current)
        }
    }, [setDark])

    return (
        <div ref={refSection} className="Section04_wrap container">
            <video src={Video} autoPlay muted loop playsInline />
            <motion.h2
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {Array.from(text).map((char, i) => (
                    <motion.span key={i} variants={charVariants}>
                        {char === '\n' ? <br /> : char}
                    </motion.span>
                ))}
            </motion.h2>
        </div>
    )
}

export default Section04
