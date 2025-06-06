import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/logo.svg'

const originalWord = ['커', '뮤', '니', '케', '이', '션']

const Loading: React.FC = () => {
    const [displayWord, setDisplayWord] = useState(originalWord.join(''))
    const [stage, setStage] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const shuffled = [...originalWord].sort(() => Math.random() - 0.5).join('')
            setDisplayWord(shuffled)
        }, 100)

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId)
            setStage(1)
        }, 1800)

        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div
            className="Loading_wrap container"
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <img src={Logo} alt="logo" />
            <h1>{displayWord}</h1>

            {stage >= 1 && (
                <motion.div
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'var(--main)',
                        zIndex: 999,
                    }}
                    onAnimationComplete={() => {
                        setTimeout(() => setStage(2), 300)
                    }}
                />
            )}

            {stage >= 2 && (
                <motion.div
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#fff',
                        zIndex: 1000,
                    }}
                    onAnimationComplete={() => {
                        // 애니메이션이 끝나기 전에 localStorage에 loading=true 저장
                        localStorage.setItem('loading', 'true')
                        setTimeout(() => navigate('/'), 200)
                    }}
                />
            )}
        </div>
    )
}

export default Loading
