import { useState } from 'react'
import { setQuery } from '../provider/features/search';
import { useAppDispatch, useAppSelector } from '../provider/Store';
import { setData,setLoading,setError } from '../provider/features/fetchData';


interface DataFromApi {
id:number;
title:string;
price:number;
rating:number;
description:string;
category:string;
tags:string[];
images:string[];
}

interface ApiResponse {
products:DataFromApi[];
total:number;
skip:number;
limit:number;
}


const SearchBar = () => {
  const [searchQuery, setQueryLocal] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQueryLocal(value);
    dispatch(setQuery({ query: value }));
  };


   const query = useAppSelector((store) => store.search.query)
      async function handleFetchData(){
          try {
              dispatch(setLoading(true))
              dispatch(setError(null))
              const response = await fetch(`https://dummyjson.com/products/search/?q=${query}`)
              if(!response.ok){
                  throw new Error('Failed to fetch products')
              }
              const result:ApiResponse = await response.json()
              dispatch(setData(result.products))
              dispatch(setLoading(false))
          } catch (error) {
              if(error instanceof Error){
                  dispatch(setError(error.message));
              }
              else{
                  console.log('error occured : ',error)
              }
          } finally {
              dispatch(setLoading(false))
          }
      }
  

  return (
    <div className='search'>
           <input type='search' placeholder='search..' 
           value={searchQuery}
           onChange={handleInputChange}  />
          <button type='button' onClick={handleFetchData}>Search</button>
           </div>
  )
}

export default SearchBar
