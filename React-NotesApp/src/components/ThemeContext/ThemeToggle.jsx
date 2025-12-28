import { useTheme } from './ThemeContext.jsx'

 export const ThemeToggle = () => {
    const { isDark , toggleTheme } = useTheme()

    return <button onClick={toggleTheme} className={`absolute top-2 right-2 w-15 h-7 rounded-full transition-all  flex items-center p-1 ${isDark ? "bg-white " : "bg-slate-800"}`}>
      <div className={`w-6 h-6 rounded-full transition-all cursor-pointer   ${isDark ? "translate-x-7 bg-slate-900" : "bg-yellow-300"}`}></div>
    </button>
  }