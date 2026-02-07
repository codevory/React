import { useDispatch, useSelector } from 'react-redux'
import { removeItem,clearCart } from '../store/cartSlice'
import { selectCartTotal } from '../store/cartSelectors'

const Checkout = () => {

  const dispatch = useDispatch()
  const {items} = useSelector((store) => store.cart)
  if(!items) return <p>Item not found</p>
  let total = useSelector(selectCartTotal)

  //placeOrder function
  function placeOrder(){
  dispatch(clearCart())}
  
   const divContent = items.map((item) => (
      <div key={item.id}  className='bg-slate-800 flex justify-between px-2 py-1'>
          <div className='flex gap-2 bg-pink-600 w-[80%]  h-10 rounded-xl p-2'>
            <span className='text-xl font-serif flex items-start w-full overflow-hidden'>{item.title} </span>
            <p className='text-[17px] top-2'>{`(${item.qty})`}</p>
            <span className='text-[17px] font-semibold'>{`$${item.price}`}</span>
          </div>

        <div>
         <button onClick={() => {
          dispatch(removeItem(item))}} 
          className='bg-amber-600 h-10 rounded-xl px-2 hover:bg-red-500 active:scale-95 cursor-pointer '>Remove</button>
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
          <button onClick={() => { placeOrder()  }} 
            className={`w-30 h-10 bg-black text-white cursor-pointer rounded ${items.length == 0 ? 'hidden' : 'block opacity-90'} hover:bg-blue-600 active:scale-90`}>Place order
          </button>
        </div>
     </div>
   </div>
  </>
)
}

export default Checkout
