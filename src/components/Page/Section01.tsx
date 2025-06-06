import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/logo.svg'
import Arrow from '../../assets/img/arrow.svg'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Section01 = () => {
    return (
        <motion.div
            className="Section01_wrap container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.img src={Logo} alt="logo" variants={itemVariants} />
            <motion.h2 variants={itemVariants}>
                소개할게요!<br />
                당근을 향한 새로운 얼굴, 새영!
            </motion.h2>
            <motion.img src={Arrow} alt="arrow" className="arrow" variants={itemVariants} />
        </motion.div>
    )
}

export default Section01
