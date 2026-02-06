import {useMemo} from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
      const {items} = useSelector((store) => store.cart)
      let itemsCount = 0;
    itemsCount =  useMemo(() => {
      if(!items) return (
        itemsCount = 0,
        console.log("item not found")
      )

     if(items) itemsCount = items.reduce((acc,sum) => acc + sum.qty,0)
    return itemsCount;
    },[items])

    return (
            <div key={items.id} className='flex justify-center items-center w-6 h-3 bg-slate-700 text-red-600 relative'>
        <span  className='absolute bottom-0.5 right-0.5 font-semibold text-[18px]' >{itemsCount}</span>
      </div>
          
  )
}

export default Cart
