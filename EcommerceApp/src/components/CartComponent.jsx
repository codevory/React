import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSelectors'

const Cart = () => {
      const {items} = useSelector((store) => store.cart)
      let itemsCount = useSelector(selectCartCount)

    return (
      <div key={items.id} className='flex justify-center items-center w-6 h-3 bg-slate-700 text-red-600 relative'>
        <span  className='absolute bottom-0.5 right-0.5 font-semibold text-[18px]' >{itemsCount}</span>
      </div>
          
  )
}

export default Cart
