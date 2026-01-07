import React from 'react'
import { createPortal } from 'react-dom'
const ModalBox = ({isOpen,onClose,children}) => {
    if(!isOpen) return null
  return createPortal(
    <div style={{
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
<div style={{
    background:'white',
    borderRadius:'8px',
    color:'black',
    padding:'20px',

}}>
{children}
<button onClick={onClose}>Close</button>
</div>
</div>,
    document.body
  )
}

export default ModalBox
