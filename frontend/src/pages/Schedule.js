import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { doc } from '../doc'
import toast from 'react-hot-toast'

export const Schedule = () => {
    const [email, setEmail] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")

    const { id } = useParams()
    console.log('Doctor ID from URL:', id)
    const selectedDoctor = doc.find(d => d.id === id)
    console.log('Selected Doctor:', selectedDoctor) 
    
    const navigate = useNavigate()

    const Paynow = () => {
        if (!email || !cardNumber || !expiryDate || !cvv) {
            toast.error("Please fill in all fields")
            return
        }
        toast.success("Appointment Scheduled")
        navigate("/")
    }

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center'>
                <div className='mt-28 flex items-center justify-center w-full'>
                    <h1 className='text-xl font-semibold md:text-4xl text-center'>
                        Your <span className='text-blue-500'>Appointment :)</span>
                    </h1>
                </div>
                <div className='mt-8 flex flex-col md:flex-row w-full'>
                    <div className='mt-12 w-full md:w-1/2'>
                        <div className='mt-1 grid grid-cols-1 md:grid-cols-2'>
                            {selectedDoctor ? (
                                <Card doc={selectedDoctor} />
                            ) : (
                                <p>No doctor selected.</p>
                            )}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex items-center justify-center'>
                        <form 
                        onSubmit={(e)=>e.preventDefault()}
                        className='flex flex-col space-y-4'>
                            <div className="mt-4 space-y-4 py-4 px-6 border rounded-md bg-white shadow-md max-w-md mx-auto">
                                <h2 className="text-lg font-semibold text-gray-700">Payment Information</h2>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                                    <input
                                    target={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">Card Number</label>
                                    <input
                                    target={cardNumber}
                                    onChange={(e)=>setCardNumber(e.target.value)}
                                    required
                                        type="text"
                                        id="cardNumber"
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex space-x-2">
                                    <div className="flex-1 space-y-2">
                                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">Expiration Date</label>
                                        <input
                                        target={expiryDate}
                                        onChange={(e)=>setExpiryDate(e.target.value)}
                                        required
                                            type="text"
                                            id="expiryDate"
                                            placeholder="MM/YY"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">CVV</label>
                                        <input
                                        target={cvv}
                                        onChange={(e)=>setCvv(e.target.value)}
                                        required
                                            type="text"
                                            id="cvv"
                                            placeholder="123"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={Paynow}
                                    type="submit"
                                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Pay Now
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
