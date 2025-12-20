const Sortpost = ({ onSort }) => {

  return (
       <div className=''>
      <select className='w-40 h-10 px-2 py-1 rounded bg-purple-800 text-white' defaultValue="newest" onChange={(e) => onSort(e.target.value)
      }>
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  )
}
export default Sortpost