import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/UserContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Verify() {
  const { backendUrl, setCartItems } = useContext(userContext)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login')
        return
      }

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`, 
        { success, orderId }, 
        { headers: { token } }
      )

      if (response.data.success) {
        setCartItems({}) // Clear local cart context
        toast.success(response.data.message)
        navigate('/orders') // Route over to personal transactions list
      } else {
        toast.error(response.data.message || "Checkout failed")
        navigate('/cart') // Fall back into cart context
      }

    } catch (error) {
      console.error(error)
      toast.error("An error occurred during payment verification.")
      navigate('/cart')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <div className='flex items-center justify-center min-h-[60vh] flex-col gap-2'>
      <div className='w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin' />
      <p className='text-sm text-gray-500 font-medium mt-2'>Verifying secure checkout pipeline transaction...</p>
    </div>
  )
}

export default Verify