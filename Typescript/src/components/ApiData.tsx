import DataPresenter from './DataPresenter';
import '../App.css'
import {useAppSelector } from '../provider/Store';
import SkeletonCard from './SkeletonCard';

const ApiData = () => {
    const data = useAppSelector((store) => store.data.products);
    const loading = useAppSelector((store) => store.data.loading);
    const error = useAppSelector((store) => store.data.error);
 


    if(loading) return <SkeletonCard count={18} />
    if(error) return <div className='error'>
        <h2>Oops! Error Occured</h2>
        <p>{error}</p>
    </div>


  return (
    <div className='dataDiv'>
            <div>
            {data.length === 0 && <div className='page'>
                <h2>No data found </h2>
                <p>Search above eg. phone,laptops etc</p>
            </div>}
      {data.map((item) => <DataPresenter key={item.id} dataLen={data.length} id={item.id} title={item.title} price={item.price} 
      description={item.description} rating={item.rating} tags={item.tags} category={item.category} image={item.images[0]} />)}
            </div>

    </div>
  )
}

export default ApiData
