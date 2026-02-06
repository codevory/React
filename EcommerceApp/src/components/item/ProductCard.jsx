import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { addedToCart, setItems } from '../../store/cartSlice'
import { Star } from 'lucide-react'
const ProductCard = () => {

    const dispatch = useDispatch()
    const {slug} = useParams()
    const {results} = useSelector(store => store.search)
    const item = results.find(a => a.slug == slug);
    if(!item) return <div className='absolute top-1/2 left-1/2'>
    <p className='bg-red-500 p-3'>404 | Item not found</p>
    </div>

  return (
    <div className=' flex justify-center items-center p-2'>
       <div className='flex gap-2 overflow-hidden justify-center h-100'>
          <div className='w-[40%] h-full flex justify-center bg-red-100'>
            <img src={item.image} alt={item.title}></img>
          </div>

          <div className='flex flex-col gap-2 w-1/4'>
             <h1 className='font-semibold text-2xl'>{item.title}</h1>
             <p>{item.description}</p>
              <span className='font-medium text-[12px] bg-gray-500 rounded-xl p-2 w-fit'>{item.category}</span>
            
            <div className='flex justify-between px-2'>
              <span>${item.price}</span>
              <div>
               <span>{<Star size={13} stroke='black' fill='black' />}</span>
               {item.rating}</div>
            </div>

            <button onClick={() =>{
             dispatch(setItems(item))
            dispatch(addedToCart())}}
            className='bg-gray-300 text-black p-4 w-40 h-9 rounded-xl flex justify-center items-center'>Add to cart</button>
         </div>
       </div>
     </div>
  )
}

export default ProductCard
