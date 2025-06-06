import React from 'react'
import { motion, Variants } from 'framer-motion'

const highStack = [
    { label: 'React.js' },
    { label: 'Sass' },
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'Javascript' },
]

const mediumStack = [
    { label: 'PHP' },
    { label: 'Node.js' },
    { label: 'NySQL' },
]

const lowStack = [
    { label: 'React Native' },
    { label: 'Express' },
    { label: 'Typescript' },
    { label: 'Figma' },
]

const columnVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 12,
        },
    },
}

const Stack: React.FC = () => {
    return (
        <div className="Stack_wrap container">
            <div className="top">
                <h1>STACK</h1>
            </div>
            <div className="bottom">
                <motion.div
                    className="high"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>High</h2>
                    {highStack.map((item, idx) => (
                        <motion.div className="stack-item" variants={itemVariants} key={idx}>
                            <p>{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="medium"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>Medium</h2>
                    {mediumStack.map((item, idx) => (
                        <motion.div className="stack-item" variants={itemVariants} key={idx}>
                            <p>{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="low"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>Low</h2>
                    {lowStack.map((item, idx) => (
                        <motion.div className="stack-item" variants={itemVariants} key={idx}>
                            <p>{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Stack
