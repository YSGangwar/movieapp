import React from 'react'
import storeItems from '../data/items.json';
import MediaCard from '../components/Card/Card';
import { Data } from '../types/Card';
const Store = () => {
  return (
    <div>
      <h1 className='text-4xl text-center underline-offset-1 underline mt-10 mb-10 '>Items  Store </h1>
      <div className='grid grid-cols-3 gap-8 ml-10 mr-10'> 
      {
        storeItems.map(item=>(
          <div className='shadow-lg '>
            <MediaCard {...item} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Store
