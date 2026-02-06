import { useDispatch, useSelector } from 'react-redux'
import { removeItem,removedSuccessfully,clearCart,clearedCart } from '../store/cartSlice'

const Checkout = () => {
  
  const dispatch = useDispatch()
  const {items} = useSelector((store) => store.cart)
  if(!items) return <p>Item not found</p>
  let total = items.reduce((acc,item) => acc + item.price,0).toFixed(2);


  //function to clear cart items in store
  const cleared = () => {
  items.map((item) => {
  dispatch(clearCart(item))})}
  

   const divContent = items.map((item) => (
      <div key={item.id}  className='bg-slate-800 flex justify-between px-2 py-1'>
          <div className='flex gap-2 bg-pink-600 w-[80%]  h-10 rounded-xl p-2'>
            <span className='text-xl font-serif flex items-start w-full overflow-hidden'>{item.title} </span>
            <p className='text-[17px] top-2'>{`(${item.qty})`}</p>
            <span className='text-[17px] font-semibold'>{`$${item.price}`}</span>
          </div>

        <div>
         <button onClick={() => {
          dispatch(removeItem(item))
          dispatch(removedSuccessfully())}} 
          className='bg-amber-600 h-10 rounded-xl px-2'>Remove</button>
        </div>

    
      </div>
   ))

return (
  <>
    <div className=' bg-blue-300 h-dvh px-6 py-2 flex flex-col justify-center items-center'>

      <div className='bg-slate-500 min-w-[40%] h-1/2 flex flex-col gap-1 px-2 py-1'>
          {divContent}
        <div className='w-full h-15 px-2 items-center bg-red-500 flex justify-between'>
          total
          <span>${total}</span>
        </div>

        <div className='w-full h-20 flex justify-center items-center'>
          <button onClick={() => {
            cleared()
            dispatch(clearedCart())}} 
            className='w-30 h-10 bg-black text-white rounded '>Place order
          </button>
        </div>
     </div>
   </div>
  </>
)
}

export default Checkout
