import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
    const initialMode = localStorage.getItem('mode') || 'light'

    const [mode, setColorMode] = useState(initialMode)

    const setAllColorMode = () => {
        setColorMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light'
            document.documentElement.classList.toggle('dark', newMode === 'dark')
            localStorage.setItem('mode', newMode)
            return newMode
        })
    }

    document.documentElement.classList.toggle('dark', mode === 'dark')

    return (
        <div className='dark:bg-colorDark bg-colorLight text-black dark:text-white duration-500 w-[100%] h-[100vh]'>
            <div>
                <Header localMode={mode} setAllColorMode={setAllColorMode} />
                <Content />
                <p className=' z-[10000] dark:text-colorLight text-colorDark absolute bottom-[15px] w-[100%] text-center'>Coded by <a className='text-blue-700' href="https://t.me/samancik_me">Samandar</a></p>
            </div>
        </div>
    )
}

export default App
