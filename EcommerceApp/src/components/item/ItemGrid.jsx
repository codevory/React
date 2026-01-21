import React,{useEffect,useState} from 'react'
import ItemCard from './ItemCard'
import { useDispatch, useSelector } from 'react-redux';
import { onSearch } from '../../api/items';
import { setError, setLoading,updateResults } from '../../store/searchSlice';
const img = 'https://images.unsplash.com/photo-1761839257946-4616bcfafec7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const ItemGrid = () => {
const { query,results,loading,error } = useSelector((store) => store.search)
console.log(results)
const dispatch = useDispatch()
  useEffect(() => {
 
    if(!query) return ;

    function getData(){
 try{
dispatch(setLoading(true))
dispatch(setError(null))
let data = [];
let response = onSearch(query);
data = response.map((item) => ({
  id:item.id,
  title:item.title,
  image:item.image,
  price:item.price,
  rating:item.rating,
  category:item.category
}))
 }catch(err){
dispatch(setLoading(false))
dispatch(setError(err.message))
 }
    }
   dispatch(updateResults(data))
   if(loading) return <div className='w-8 h-8 rounded-full border-l-red-500 border-t-green-500 border-r-blue-700 animate-spin absolute top-1/2 left-1/2'>
</div>
    getData()
  },[query])
  return (
    results.map((item) => {
      return <div className='flex flex-wrap h-full w-full'>
      <ItemCard data={item}/>
    </div>
    })
  )
}

export default ItemGrid
