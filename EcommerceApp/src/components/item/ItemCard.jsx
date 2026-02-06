import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
const ItemCard = ({item}) => {

const slugify = (title) => title
.toLowerCase()
.trim()
.replace(/[^a-z0-9\s-]/g,"")
.replace(/\s+/g,"-")

let res = slugify(item.title)
      return (
        <Link to={`/${slugify(item.title)}`}>
          <div className='w-50 h-45  flex flex-col gap-1 rounded-xl hover:scale-95 bg-pink-400 '>
            <div className='flex justify-center items-center'>
              <img className='w-2/3 h-full object-cover object-center' src={item.thumbnail} alt={`${item.title} image`}></img>
          </div>
          
        <div className='flex gap-2 bg-yellow-300 w-full'>
          <h2 className='text-[12px] w-full overflow-hidden h-5'>{item.title}</h2>
          <span className='flex gap-1 items-center text-[14px]'>{item.rating}
          <span>{<Star size={13} stroke='black' fill='black' />}</span>
          </span>
        </div>
        <div className='flex justify-between px-1 text-[13px]'>
          <span>${item.price}</span>
          <span>{item.category}</span>
        </div>
      </div>
        </Link>
      )
  }


export default ItemCard
