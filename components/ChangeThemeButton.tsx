import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CgDarkMode, CgSun } from 'react-icons/cg'

const ChangeThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMouted] = useState<boolean>(false)

    return (
        <>
            {/* <button
                type='button'
                onClick={() => setTheme(theme==='dark'?'light':'dark')}>
                <CgDarkMode />
                a
            </button> */}
            <input
                id="toggleThree"
                className='mr-1'
                type="checkbox"
                placeholder='DarkMode'
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            DarkMode
        </>
    )
}

export default ChangeThemeButton
