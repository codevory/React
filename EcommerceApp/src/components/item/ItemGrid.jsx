import {useEffect} from 'react'
import ItemCard from './ItemCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/searchSlice';
import Spinner from '../Spinner';
import EmptyState from '../EmptyState';

const ItemGrid = () => {
const { query,results,status,error } = useSelector((store) => store.search)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts(""))
  },[])

  useEffect(() => {
    if(!query) return;

    dispatch(fetchProducts(query));
       },[query])
       
     if(status === "error") return <h1>Error : {error}</h1> ;
     if(status === "loading") return <Spinner /> ;
     if(status === "empty") return <EmptyState /> ;

  return (
    results.map((item) => {
      return <div key={item.id} id='result' className=''>
      <ItemCard item={item}/>
    </div>
    })
  )
}

export default ItemGrid
