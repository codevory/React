import { useState, useEffect } from 'react'
import '../../index.css'

const ToggleButton = () => {
    const [dark,setDark] = useState(
        localStorage.getItem("theme") === "dark"
    )
    useEffect(() => {
        if(dark){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
        else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[dark])
    return (
    <button onClick={() => setDark(!dark)}
    className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer
        ${dark ? 'bg-white' :'bg-zinc-800' }`}
    >
        <span className={ `absolute w-5 h-5 rounded-full top-1 left-1 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,1.22,1.55)]
        ${dark ? 'translate-x-7 bg-zinc-800 rotate-180' : 'bg-yellow-500'}
        active:scale-95`}>
        </span>

    </button>
    )
}

export default ToggleButton
