import React from 'react'
import {Link} from 'react-router-dom'
const Card = ({doc}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure className='h-48 w-full object-contain'>
  <img
              src={doc.image}
              alt={doc.name}
              className='h-full w-full'
            />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {doc.name}
      <div className="badge bg-blue-500 text-white">{doc.speciality}</div>
    </h2>
    <p>{doc.description}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">Years {doc.experience}</div>
      <Link to={`/schedule/${doc.id}`}> 
      <div className="badge-outline cursor-pointer px-2 rounded-full border-[1px] hover:bg-slate-800 hover:text-white duration-200">Schedule</div>
      </Link>
    </div>
  </div>
</div>  
</div>
    </>
  )
}

export default Card