import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../../assets/img/logo.svg'
import LogoW from '../../assets/img/logo_white.svg'
import { Link } from 'react-router-dom'

interface NavProps {
    dark: boolean
}

const Nav: React.FC<NavProps> = ({ dark }) => {
    return (
        <motion.div
            className='Nav_wrap'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Link to='/'>
                <img src={dark ? LogoW : Logo} alt='logo' />
            </Link>
            <div className={`link_wrap ${dark ? 'dark' : ''}`}>
                <Link to='/project'>프로젝트</Link>
                <Link to='/stack'>기술스택</Link>
                <Link to='https://github.com/jeongsaeyeong'>Github</Link>
                <Link to='https://colorful-platinum-d83.notion.site/POTFOLIO-11ff68f4a4a48098ac51fc82b9fb5252?source=copy_link'>Notion</Link>
            </div>
        </motion.div>
    )
}

export default Nav
