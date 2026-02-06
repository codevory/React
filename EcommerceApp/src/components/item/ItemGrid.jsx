import {useEffect} from 'react'
import ItemCard from './ItemCard'
import { useDispatch, useSelector } from 'react-redux';
import { onSearch } from '../../api/items';
import { setError, setLoading,setResults } from '../../store/searchSlice';

const ItemGrid = () => {
const { query,results,loading,error } = useSelector((store) => store.search)
const dispatch = useDispatch()
const slugify = (title) => title
.toLowerCase()
.trim()
.replace(/[^a-z0-9\s-]/g,"")
.replace(/\s+/g,"-");

  useEffect(() => {
 
    if(!query) return ;

   async function getData(){
 try{
    dispatch(setLoading(true))
     let data = [];
     let response = await onSearch(query);
     data = response[0].products.map((item) => ({
       id:item.id,
       title:item.title,
       image:item.images[0],
       thumbnail:item.thumbnail,
       price:item.price,
       rating:item.rating,
       category:item.category,
       slug:slugify(item.title),
       description:item.title + "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta maiores ipsum ipsam culpa labore autem ab corrupti accusamus. Magni, vero?"
     }))
     dispatch(setResults(data))
     dispatch(setLoading(false))}

     catch(err){
      dispatch(setError(err.message))
      console.log(err.message)
      }}
         getData()
       },[query])

       if (error) return <h1>Error : {error}</h1>
       if(loading) return <div className='absolute top-1/2 left-1/2 w-10 h-10  transition-transform rounded-full border-3 border-l-red-500 border-t-green-500 border-r-blue-700 animate-spin '></div>
       if(results.length === 0){
       return <div>
       <p className='bg-red-500 p-3 font-serif text-2xl'>No product found</p>
  </div>
}
  return (
    results.map((item) => {
      return <div key={item.id} id='result' className=''>
      <ItemCard item={item}/>
    </div>
    })
  )
}

export default ItemGrid
