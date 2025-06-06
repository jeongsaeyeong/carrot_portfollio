import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/Logo_only.svg'

const Footer: React.FC = () => {
    return (
        <div className="Footer_wrap container">
            <motion.img
                src={Logo}
                alt="logo"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 150, damping: 8 }}
            />
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
                당근에서 만나요!
            </motion.h2>
        </div>
    )
}

export default Footer
