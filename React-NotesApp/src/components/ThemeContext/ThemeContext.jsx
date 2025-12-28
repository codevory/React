import React,{ useState , useContext , createContext, useEffect} from 'react'

const context = createContext()


export const ThemeContext = ({children}) => {

    const [isDark,setisDark] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    })

  function toggleTheme(){
    setisDark(prev => !prev)
  }

//symc with body & localStorage.
useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
    localStorage.setItem("theme",isDark ? "dark" : "light")
},[isDark])




  return (
    <div>
        <context.Provider value={{isDark, toggleTheme}}>
      {children}
        </context.Provider>
    </div>
  )
}

export const useTheme =  () => useContext(context);