import React, { useEffect, useRef } from 'react'
import { motion, Variants } from 'framer-motion'

interface Sec02Props {
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
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
            stiffness: 70,
            damping: 12,
        },
    },
}

const Section02: React.FC<Sec02Props> = ({ setDark }) => {
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
        <motion.div
            ref={refSection}
            className='Section02_wrap container'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
        >
            <motion.h2 variants={itemVariants}>
                SUNGSHIN<br />
                WOMEN'S UNIVERSITY
            </motion.h2>

            <motion.div className="introduce_wrap" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <h3>Major</h3>
                    <p>미디어커뮤니케이션학과 Media Communication</p>
                    <p>컴퓨터공학과 Computer Engineering</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3>2023</h3>
                    <p>
                        라인아트컴퓨터학원 공공데이터를 활용한 Node.js, Java
                        전문가_양성_육성 과정 수료 (2023.08~2024.02)
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3>2024</h3>
                    <p>멋쟁이사자처럼 12기 성신여대 프론트엔드 운영진(2024.01~)</p>
                    <p>멋쟁이사자처럼 트렌디톤 우승(2024.02)</p>
                    <p>서울시공공데이터활용 창업 공모전 참가</p>
                    <p>멋쟁이사자처럼 여기톤 우승(2024.07)</p>
                    <p>멋쟁이사자차럼 중앙해커톤 참가(2024.08)</p>
                    <p>성신여자대학교 2024 대동제 Eternal 사이트 제작(2024.07~2024.09)</p>
                    <p>성신여자대학교 2024 회고 사이트 제작(2025.01)</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3>2025</h3>
                    <p>멋쟁이사자처럼 12기 성신여대 부대표(2025.02~)</p>
                    <p>멋쟁이사자처럼 트렌디톤 우승(2025.02)</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Section02
