const Sortpost = ({ onSort }) => {

  return (
       <div className=''>
      <select id="sort-options" className='md:max-w-2/3 w-full h-10 px-2 py-1 rounded border-2  ' defaultValue="newest" onChange={(e) => onSort(e.target.value)
      }>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  )
}
export default Sortpost