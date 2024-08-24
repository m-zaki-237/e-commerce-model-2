import React,{useEffect} from 'react'
import Card from '../components/Card'
import { doc } from '../doc'
import { useNavigate } from 'react-router-dom';
export const OurDoctors = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-xl font-semibold md:text-4xl'>Our <span className='text-blue-500'>Doctors.</span></h1>
        </div>
        <div className='mt-1 grid grid-cols-1 md:grid-cols-4'>
        {

            doc.map((d)=>(
                <Card key={d.id} doc={d} />
            ))
        }
        </div>
    </div>
    </>
  )
}
