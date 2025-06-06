import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}

const textVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

const shapeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 70, damping: 12 },
    },
}

const Section03: React.FC = () => {
    const navigation = useNavigate()

    const onDetail = (label: string) => {
        navigation(`/project/${label}`)
    }

    return (
        <motion.div
            className='Section03_wrap container'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div className='top' variants={containerVariants}>
                <motion.h2 variants={textVariants}>
                    프론트개발로 만난
                    <br />
                    다양한 순간들
                </motion.h2>
                <motion.p variants={textVariants}>
                    처음 내딛는 개발의 세계
                    <br />
                    소중하고 다양한 프로젝트
                </motion.p>
            </motion.div>

            <motion.div className='bottom' variants={containerVariants}>
                <motion.div className='top' variants={containerVariants}>
                    <motion.div className='left' onClick={() => { onDetail('Culticare') }} variants={shapeVariants}>Culticare</motion.div>
                    <motion.div className='right' onClick={() => { onDetail('손틈새로') }} variants={shapeVariants}>손틈새로</motion.div>
                </motion.div>

                <motion.div className='bottom' variants={containerVariants}>
                    <motion.div className='left' variants={containerVariants}>
                        <motion.div className='top' onClick={() => { onDetail('Kid in Seoul') }} variants={shapeVariants}>Kid in Seoul</motion.div>
                        <motion.div className='bottom' onClick={() => { onDetail('2024 LIkelion SSWU Restrospect') }} variants={shapeVariants}>2024 LIkelion SSWU Restrospect</motion.div>
                    </motion.div>
                    <motion.div className='right' onClick={() => { onDetail('2024 SSWU Eternal') }} variants={shapeVariants}>2024 SSWU Eternal</motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Section03
