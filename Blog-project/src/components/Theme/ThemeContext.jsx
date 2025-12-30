import {useState , useContext , createContext , useEffect } from 'react'

const themeContext = createContext()

const ThemeProvider = ({children}) => {
    const [isDark , setisDark] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    })

    //save to body & localstorage
    useEffect(() => {
        document.body.className = isDark ? "dark" : "light";
        localStorage.setItem("theme",isDark ? "dark" : "light")
    },[isDark])

    //theme toggle function
    function themeToggle(){
        setisDark(prev => !prev)
    }

    //return main function component
  return (
    <div>
      <themeContext.Provider value={{isDark , themeToggle}}>
        {children}
      </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(themeContext)