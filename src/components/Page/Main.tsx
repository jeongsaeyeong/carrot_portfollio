import React, { useEffect } from 'react'
import Section01 from './Section01'
import Section02 from './Section02'
import Section03 from './Section03'
import Section04 from './Section04'
import Footer from '../Section/Footer'
import { useNavigate } from 'react-router-dom'

interface MainProps {
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Main: React.FC<MainProps> = ({ setDark }) => {
    const navigation = useNavigate();

    useEffect(() => {
        const loading = localStorage.getItem('loading');
        if (!loading) {
            navigation('/loading')
        }
    }, []);

    return (
        <>
            <div className='Main_wrap'>
                <Section01 />
                <Section02 setDark={setDark} />
                <Section03 />
                <Section04 setDark={setDark} />
            </div>
            <Footer />
        </>
    )
}

export default Main