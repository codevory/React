import React,{ useState, useEffect } from 'react'
import { useDebounce } from '../Hooks/useDebounce'


const SearchBox = () => {
    const [query, setQuery] = useState("")
    const debounceQuery = useDebounce(query,600)

    useEffect(() => {
        if(!debounceQuery) return;

        console.log(`API Call with ${debounceQuery}`)

    },[debounceQuery])
  return (
    <div>
            <h3>Search User</h3>
            <input
                className="border rounded p-1"
                type="text"
                value={query}
                placeholder="Type to search…"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
  )
}

export default SearchBox
