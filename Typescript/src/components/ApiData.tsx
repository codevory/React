import React,{ useState } from 'react'
import DataPresenter from './DataPresenter';
import '../App.css'

interface DataFromApi {
id:number;
title:string;
price:number;
rating:number;
description:string;
category:string;
tags:string[];
image:string;
}



const ApiData = () => {
    const [data, setData] = useState<DataFromApi[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string | null>()
    const [query,setQuery] = useState<string | undefined>()
    
    async function handleFetchData(){
        let response:DataFromApi;
        try {
            setLoading((prev) => !prev)
            setError(null)
            response = await fetch(`https://dummyjson.com/products/search/?q=${query}/?delay=${2000}`)
            .then((data) => data.json())
            setData((prev) => [...prev,response])
        } catch (error) {
            if(error instanceof Error){
                setError(error.message);
            }
            else{
                console.log('error occured : ',error)
            }
        }
 
        setLoading(false)
        setError(null)
        console.log(data)
    }

    if(loading) return <div className='outerLoad'><span className='innerLoad'></span></div>
    if(error) return <div className='error'>
        <h2>Oops! Error Occured</h2>
        <p>Error</p>
    </div>


  return (
    <div className='dataDiv'>
        <div className='search'>
        <input type='search' placeholder='search..' value={query} onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setQuery(e.target.value)}  />
       <button onClick={handleFetchData}>Search</button>
        </div>
  
      <div>
      {data.map((item) => <DataPresenter key={item.id} dataLen={data.length} id={item.id} title={item.title} price={item.price} 
      description={item.description} rating={item.rating} tags={item.tags} category={item.category} image={item.image} />)}
      </div>

    </div>
  )
}

export default ApiData
