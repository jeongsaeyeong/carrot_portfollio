import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'
import { portfolioData } from '../../data/projectdata'

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
    },
}

const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 },
    },
}

const Detail: React.FC = () => {
    const { detail } = useParams<{ detail: string }>()
    const allItems = portfolioData.flatMap(group => group.items)
    const project = allItems.find(item => item.title === detail)

    if (!project) {
        return (
            <motion.div
                className="Detail_wrap container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <p>해당 프로젝트를 찾을 수 없습니다.</p>
                <Link to="/">목록으로 돌아가기</Link>
            </motion.div>
        )
    }

    return (
        <motion.div
            className="Detail_wrap container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="left" variants={leftVariants}>
                <h1>{project.title}</h1>
                <p>설명: {project.description}</p>
                <p>제작: {project.제작}</p>
                <p>스택: {project.스택.join(', ')}</p>
                {project.github && <Link to={project.github}>Go Github</Link>}
                {project.link && <Link to={project.link}>Go Site</Link>}
                {project.etc && <Link to={project.etc}>Go 기획서</Link>}
            </motion.div>
            <motion.div className="right" variants={rightVariants}>
                {project.img && <img src={project.img} alt={project.title} />}
            </motion.div>
        </motion.div>
    )
}

export default Detail
