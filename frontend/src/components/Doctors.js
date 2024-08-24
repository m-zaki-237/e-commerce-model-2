import React from 'react'
import { doc } from '../doc'
import Card from './Card'
const Doctors = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='text-xl font-semibold pb-2 mt-6'>Doctors</h1>
        </div>
        <div className="mt-1 grid grid-cols-1 md:grid-cols-4">
            {doc.map((d)=>(
                <Card doc={d} key={d.id}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Doctors