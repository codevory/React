import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()
  return (<div className='flex flex-wrap justify-between items-center w-full h-full gap-y-4 gap-x-2 overflow-auto px-10'>
  <CollectionCard item={collection} />
  </div>)
}

export default CollectionPage
