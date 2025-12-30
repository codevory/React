
const ToggleThemeBtn = ({ariaLabel,onChange,checked}) => {

  return (
    <button type="button" aria-label={ariaLabel} onClick={onChange} 
    className={`relative overflow-hidden border w-14 h-8 rounded-full flex items-center px-1 transition-colors duration-300
    ${checked ? "bg-zinc-800":"bg-white"}`}>
        <div type="div" className={`absolute left-0  w-7 h-7 cursor-pointer rounded-full transition-transform duration-300 border 
          ${checked ? "translate-x-full bg-yellow-300" : "bg-zinc-800"} active:scale-95`} >
        </div>
    </button>
  )
}

export default ToggleThemeBtn
