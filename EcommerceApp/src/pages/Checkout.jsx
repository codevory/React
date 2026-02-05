import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const {items} = useSelector((store) => store.cart)
 let total = items.reduce((acc,item) => acc + item.qty,0)
let content = items.map((item) => {
  return (
    <div className='flex gap-1'>
      <div>
        <span>title</span>
        <p>quant</p>
      </div>
      <span>price</span>
      <div>
        total
      </div>
    </div>
  )
})

return (
  <>
 {items.map((item) => {
 
  return (
    <div key={item.id} className='flex gap-2 px-6 py-2'>
      <div className='flex gap-1'>
        <span>{item.title} </span>
        <p>{`(${item.qty})`}</p>
      </div>
      <span>{`$${item.price}`}</span>
      <div>
        {total}
      </div>
    </div>
  )
})}
  </>
)
}

export default Checkout
