import React,{useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
      const {items} = useSelector((store) => store.cart)
      console.log(items)
      let itemsCount = 0;
    itemsCount =  useMemo(() => {
        itemsCount = items.reduce((acc,sum) => acc + sum.qty,0)
        return itemsCount
    },[items])

    return (
            <div key={items.id} className='flex justify-center items-center w-6 h-3 bg-slate-700 text-red-600 relative'>
        <span  className='absolute bottom-0.5 right-0.5 font-semibold text-[18px]' >{itemsCount}</span>
      </div>
          
  )
}

export default Cart
