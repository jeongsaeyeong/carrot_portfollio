import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Main from './components/Page/Main'
import Nav from './components/Section/Nav'
import Project from './components/Page/Project'
import Stack from './components/Page/Stack'
import Detail from './components/Page/Detail'
import Loading from './components/Section/Loading'

const ScrollToTopOnNavigate: React.FC = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

const App: React.FC = () => {
    const [dark, setDark] = React.useState<boolean>(false);

    return (
        <BrowserRouter>
            <ScrollToTopOnNavigate />

            <Nav dark={dark} />
            <Routes>
                <Route path='/' element={<Main setDark={setDark} />} />
                <Route path='/loading' element={<Loading />} />
                <Route path='/project' element={<Project />} />
                <Route path='/project/:detail' element={<Detail />} />
                <Route path='/stack' element={<Stack />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
