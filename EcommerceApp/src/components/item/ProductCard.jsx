import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { setItems } from '../../store/cartSlice'
const ProductCard = () => {
 // const {updateTotal,setItems} = useSelector((state) => state.cart)
  console.log(setItems)
  const dispatch = useDispatch()
    const {slug} = useParams()
    const {results} = useSelector(store => store.search)
   const item = results.find(a => a.slug == slug);
   if(!item) return <div className='absolute top-1/2 left-1/2'>
    <p className='bg-red-500 p-3'>404 | Item not found</p>
   </div>
  return (
    <div className='w-screen h-full flex justify-center items-center p-2'>
    <div className='flex gap-2 w-2/3 h-100 bg-purple-400'>
      <div className='w-full h-full flex justify-center bg-red-300'>
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-2xl'>{item.title}</h1>
        <p>{item.description}</p>
        <span className='font-medium text-[12px] bg-gray-500 rounded-xl p-2 w-fit'>{item.category}</span>
        <div className='flex justify-between px-2'>
            <span>${item.price}</span>
            <span>{item.rating}</span>
        </div>
        <button onClick={() =>{
          dispatch(setItems({item}))}}
        className='bg-gray-300 text-black p-4 w-40 h-9 rounded-xl flex justify-center items-center'>Add to cart</button>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
