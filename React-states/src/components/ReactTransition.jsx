import {useState, useEffect,useRef , useTransition } from 'react'
import './App.css'
import useFetch from './components/useFetch'

function SearchResults({query}){
  const items = []
  if(query){
    for(let i=0;i<1000;i++){
      items.push(<li key={i}>Result for {query} - {i}</li>)
    }
  }
  return <ul>{items}</ul>
}

function ReactTransition() {
const [input , setInput] = useState('')
const [result,setResult] = useState('')
const [isPending,startTransition] = useTransition()

const handleChange = (e) => {
  setInput(e.target.value)

  //startTransition
    startTransition(() => {
      setResult(e.target.value)
    })

}
  return (
<>
<input value={input} onChange={handleChange} />
<div>
 {isPending && (<p>Loading Results..</p>)}
 <SearchResults query={result} />
</div>
</>
  )
}

export default ReactTransition
