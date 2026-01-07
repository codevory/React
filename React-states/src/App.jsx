import {useState, useEffect,useRef , useTransition } from 'react'
import './App.css'
import ModalBox from './components/ModalBox'

function App() {
const [isOpen,setisOpen] = useState(false)
  return (
    <div>
      <h1>My App</h1>
<button onClick={() => setisOpen(true)}>Open Modal</button>

<ModalBox isOpen={isOpen} onClose={() => setisOpen(false)} children={<h1>hellow world</h1>}  >
  <h2>Iam title inside modal Box</h2>
  <p>Quisquam debitis non officia, sed odit id vero ipsam aspernatur impedit exercitationem!</p>
</ModalBox>
    </div>
  )
}

export default App
